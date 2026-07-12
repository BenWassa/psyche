import type { DomainId } from '@/types';
import { CONTENT_NODES, nodesForDomain, evidenceNodesForDomain } from '@/data/content';
import { DOMAIN_SEQUENCE } from '@/data/domains';

/**
 * Field Notes — local-only reading progress.
 *
 * Everything lives in this browser (localStorage, `psyche.progress.v1`);
 * nothing is collected or sent anywhere, matching the SelfLocation contract.
 * Progress is coverage, not compulsion: no points, no streak pressure —
 * just a record of which entries have been read, which bridges crossed,
 * and which days the atlas was open.
 */

export const PROGRESS_STORAGE_KEY = 'psyche.progress.v1';

export type ProgressState = {
  /** node id -> ISO timestamp of first read (inspector opened) */
  read: Record<string, string>;
  /** `${fromId}>${toId}` -> ISO timestamp of first crossing via a bridge chip */
  bridges: Record<string, string>;
  /** calendar days (yyyy-mm-dd, local) on which the atlas was opened */
  days: string[];
};

const EMPTY_STATE: ProgressState = Object.freeze({ read: {}, bridges: {}, days: [] });

function localDay(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isIsoLike(value: unknown): value is string {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
}

/** Parse + validate a persisted payload, pruning ids that no longer exist in content. */
function sanitize(raw: unknown): ProgressState {
  if (typeof raw !== 'object' || raw === null) return EMPTY_STATE;
  const source = raw as Record<string, unknown>;

  const read: Record<string, string> = {};
  if (typeof source.read === 'object' && source.read !== null) {
    for (const [id, stamp] of Object.entries(source.read as Record<string, unknown>)) {
      if (CONTENT_NODES[id] && isIsoLike(stamp)) read[id] = stamp;
    }
  }

  const bridges: Record<string, string> = {};
  if (typeof source.bridges === 'object' && source.bridges !== null) {
    for (const [key, stamp] of Object.entries(source.bridges as Record<string, unknown>)) {
      const [from, to] = key.split('>');
      if (from && to && CONTENT_NODES[from] && CONTENT_NODES[to] && isIsoLike(stamp)) bridges[key] = stamp;
    }
  }

  const days: string[] = [];
  if (Array.isArray(source.days)) {
    for (const day of source.days) {
      if (typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) && !days.includes(day)) days.push(day);
    }
    days.sort();
  }

  return { read, bridges, days };
}

function load(): ProgressState {
  if (typeof window === 'undefined') return EMPTY_STATE;
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    return sanitize(JSON.parse(raw));
  } catch {
    return EMPTY_STATE;
  }
}

let state: ProgressState = load();
const listeners = new Set<() => void>();

function persist(next: ProgressState) {
  state = next;
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({ v: 1, ...next }));
  } catch {
    // Storage full or unavailable (private mode) — progress still works in-memory.
  }
  listeners.forEach(listener => listener());
}

export function getProgressSnapshot(): ProgressState {
  return state;
}

export function getEmptyProgress(): ProgressState {
  return EMPTY_STATE;
}

export function subscribeProgress(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Cross-tab sync: reload when another tab writes the same key.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', event => {
    if (event.key !== PROGRESS_STORAGE_KEY) return;
    state = load();
    listeners.forEach(listener => listener());
  });
}

function withToday(days: string[]): string[] {
  const today = localDay();
  return days.includes(today) ? days : [...days, today].sort();
}

/** Record that a node's inspector was opened. First read wins; later opens are no-ops. */
export function markNodeRead(nodeId: string) {
  if (!CONTENT_NODES[nodeId] || state.read[nodeId]) return;
  persist({
    ...state,
    read: { ...state.read, [nodeId]: new Date().toISOString() },
    days: withToday(state.days),
  });
}

/** Record a bridge-chip navigation from one node to another. */
export function markBridgeCrossed(fromId: string, toId: string) {
  if (!CONTENT_NODES[fromId] || !CONTENT_NODES[toId]) return;
  const key = `${fromId}>${toId}`;
  if (state.bridges[key]) return;
  persist({ ...state, bridges: { ...state.bridges, [key]: new Date().toISOString() } });
}

/** Record that the atlas was opened today. */
export function recordVisit() {
  const days = withToday(state.days);
  if (days === state.days) return;
  persist({ ...state, days });
}

export function clearProgress() {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
  } catch {
    // ignore
  }
  state = EMPTY_STATE;
  listeners.forEach(listener => listener());
}

export function hasProgress(progress: ProgressState): boolean {
  return Object.keys(progress.read).length > 0 || Object.keys(progress.bridges).length > 0 || progress.days.length > 0;
}

// ---------------------------------------------------------------------------
// Selectors
// ---------------------------------------------------------------------------

export type CoverageSummary = { read: number; total: number; pct: number; complete: boolean };

function coverage(readCount: number, total: number): CoverageSummary {
  const pct = total === 0 ? 0 : Math.round((readCount / total) * 100);
  return { read: readCount, total, pct, complete: total > 0 && readCount >= total };
}

export function domainCoverage(progress: ProgressState, domain: DomainId): CoverageSummary {
  const nodes = nodesForDomain(domain);
  return coverage(nodes.filter(node => progress.read[node.id]).length, nodes.length);
}

export function overallCoverage(progress: ProgressState): CoverageSummary {
  return coverage(Object.keys(progress.read).length, Object.keys(CONTENT_NODES).length);
}

export type ProgressStats = {
  entriesRead: number;
  totalEntries: number;
  bridgesCrossed: number;
  domainsTouched: number;
  domainsCharted: number;
  daysVisited: number;
};

export function progressStats(progress: ProgressState): ProgressStats {
  const perDomain = DOMAIN_SEQUENCE.map(domain => domainCoverage(progress, domain.id));
  return {
    entriesRead: Object.keys(progress.read).length,
    totalEntries: Object.keys(CONTENT_NODES).length,
    bridgesCrossed: Object.keys(progress.bridges).length,
    domainsTouched: perDomain.filter(item => item.read > 0).length,
    domainsCharted: perDomain.filter(item => item.complete).length,
    daysVisited: progress.days.length,
  };
}

// ---------------------------------------------------------------------------
// Waypoints — the seven fixed milestones of the atlas
// ---------------------------------------------------------------------------

export type Waypoint = {
  id: string;
  title: string;
  description: string;
  achievedOn?: string; // ISO timestamp when reached
};

function earliest(stamps: string[]): string | undefined {
  return stamps.length > 0 ? [...stamps].sort()[0] : undefined;
}

function latest(stamps: string[]): string | undefined {
  return stamps.length > 0 ? [...stamps].sort()[stamps.length - 1] : undefined;
}

export function waypoints(progress: ProgressState): Waypoint[] {
  const readStamps = Object.values(progress.read);
  const total = Object.keys(CONTENT_NODES).length;

  // Per-domain first-read and completion timestamps.
  const domainFirstRead: (string | undefined)[] = [];
  const domainCompleted: (string | undefined)[] = [];
  for (const domain of DOMAIN_SEQUENCE) {
    const stamps = nodesForDomain(domain.id)
      .map(node => progress.read[node.id])
      .filter((stamp): stamp is string => stamp !== undefined);
    const nodeCount = nodesForDomain(domain.id).length;
    domainFirstRead.push(earliest(stamps));
    domainCompleted.push(stamps.length === nodeCount && nodeCount > 0 ? latest(stamps) : undefined);
  }

  const allDomainsTouched = domainFirstRead.every(stamp => stamp !== undefined);
  const chartedStamps = domainCompleted.filter((stamp): stamp is string => stamp !== undefined);

  const halfThreshold = Math.ceil(total / 2);
  const sortedReads = [...readStamps].sort();
  const halfStamp = sortedReads.length >= halfThreshold ? sortedReads[halfThreshold - 1] : undefined;

  const evidenceNodes = DOMAIN_SEQUENCE.flatMap(domain => evidenceNodesForDomain(domain.id));
  const evidenceStamps = evidenceNodes.map(node => progress.read[node.id]);
  const evidenceDone = evidenceNodes.length > 0 && evidenceStamps.every(stamp => stamp !== undefined);

  return [
    {
      id: 'first-entry',
      title: 'First Entry',
      description: 'Open any node and read it — the atlas starts anywhere.',
      achievedOn: earliest(readStamps),
    },
    {
      id: 'first-crossing',
      title: 'First Crossing',
      description: 'Follow a bridge from one node to another. The connections are the point.',
      achievedOn: earliest(Object.values(progress.bridges)),
    },
    {
      id: 'six-doors',
      title: 'Six Doors',
      description: 'Read at least one entry in every domain.',
      achievedOn: allDomainsTouched ? latest(domainFirstRead as string[]) : undefined,
    },
    {
      id: 'first-domain',
      title: 'First Domain Charted',
      description: 'Read every entry in a single domain, end to end.',
      achievedOn: earliest(chartedStamps),
    },
    {
      id: 'half-atlas',
      title: 'Half the Atlas',
      description: `Read ${halfThreshold} of the ${total} entries.`,
      achievedOn: halfStamp,
    },
    {
      id: 'evidence-auditor',
      title: 'Evidence Auditor',
      description: 'Read every popular-but-revised entry — know what the evidence actually shows.',
      achievedOn: evidenceDone ? latest(evidenceStamps as string[]) : undefined,
    },
    {
      id: 'full-coverage',
      title: 'Full Coverage',
      description: 'Every entry in every domain, read. The map is yours.',
      achievedOn: readStamps.length >= total && total > 0 ? latest(readStamps) : undefined,
    },
  ];
}
