#!/usr/bin/env node
/**
 * Psyche content compiler.
 *
 * Reads structured markdown from content/nodes/<domain>/*.md and emits
 * src/data/content.generated.ts — the typed node graph the app renders.
 *
 * File format:
 *
 *   ---
 *   domain: personality
 *   theory: Big Five
 *   ---
 *
 *   ## node: openness
 *   title: Openness
 *   tier: cornerstone
 *   grammar: Hierarchy / Trait
 *
 *   Summary paragraph(s).
 *
 *   ### Structure
 *   - bullet
 *
 *   ### Note
 *   Caveat / continuity text.
 *
 *   ### Bridges
 *   - [target-node-id] Why this connection matters.
 *
 *   ### Sources
 *   - Author (Year). Work.
 *
 * Evidence-card nodes additionally set `status:` (+ optional `year:`) and use
 * sections: Known for / Survives / Evidence shows / Instead.
 */
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = join(ROOT, 'content', 'nodes');
const OUT_FILE = join(ROOT, 'src', 'data', 'content.generated.ts');

const DOMAINS = ['personality', 'cognition', 'motivation', 'relationships', 'emotion', 'self'];
const TIERS = ['cornerstone', 'include', 'revised'];
const STATUSES = ['superseded', 'revised', 'contested'];
const SECTION_KEYS = {
  structure: 'bullets',
  note: 'note',
  bridges: 'bridges',
  sources: 'sources',
  'known for': 'knownFor',
  survives: 'survives',
  'evidence shows': 'shows',
  instead: 'instead',
};

const errors = [];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith('.md')) files.push(full);
  }
  return files;
}

function parseFrontmatter(lines, file) {
  const meta = {};
  if (lines[0] !== '---') {
    errors.push(`${file}: missing frontmatter (--- block with domain/theory)`);
    return { meta, body: lines };
  }
  let i = 1;
  for (; i < lines.length && lines[i] !== '---'; i++) {
    const m = lines[i].match(/^(\w+):\s*(.+)$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  return { meta, body: lines.slice(i + 1) };
}

function parseFile(file) {
  const rel = file.slice(ROOT.length + 1);
  const lines = readFileSync(file, 'utf8').split('\n');
  const { meta, body } = parseFrontmatter(lines, rel);
  if (!DOMAINS.includes(meta.domain)) errors.push(`${rel}: invalid or missing domain "${meta.domain}"`);
  if (!meta.theory) errors.push(`${rel}: missing theory`);

  const nodes = [];
  let node = null;
  let section = null; // active ### section key, or null = summary

  const flush = () => {
    if (node) nodes.push(node);
  };

  for (const raw of body) {
    const line = raw.replace(/\s+$/, '');
    const nodeHeader = line.match(/^## node:\s*([\w-]+)\s*$/);
    if (nodeHeader) {
      flush();
      node = {
        id: nodeHeader[1],
        domain: meta.domain,
        theory: meta.theory,
        meta: {},
        summary: [],
        bullets: [],
        note: [],
        bridges: [],
        sources: [],
        knownFor: [],
        survives: [],
        shows: [],
        instead: [],
        file: rel,
        inHeader: true,
      };
      section = null;
      continue;
    }
    if (!node) continue;

    const sectionHeader = line.match(/^###\s+(.+)$/);
    if (sectionHeader) {
      node.inHeader = false;
      const key = SECTION_KEYS[sectionHeader[1].trim().toLowerCase()];
      if (!key) errors.push(`${node.file} [${node.id}]: unknown section "### ${sectionHeader[1]}"`);
      section = key ?? 'ignore';
      continue;
    }

    // key: value lines directly under the ## node header
    if (node.inHeader) {
      const kv = line.match(/^(\w+):\s*(.+)$/);
      if (kv) {
        node.meta[kv[1]] = kv[2].trim();
        continue;
      }
      if (line.trim() !== '') node.inHeader = false;
    }

    if (line.trim() === '') continue;

    if (section === 'bullets' || section === 'sources') {
      const item = line.match(/^-\s+(.+)$/);
      if (item) node[section].push(item[1].trim());
      else errors.push(`${node.file} [${node.id}]: expected "- " list item in section, got "${line}"`);
    } else if (section === 'bridges') {
      const item = line.match(/^-\s+\[([\w-]+)\]\s+(.+)$/);
      if (item) node.bridges.push({ target: item[1], description: item[2].trim() });
      else errors.push(`${node.file} [${node.id}]: bridge lines must look like "- [target-id] description", got "${line}"`);
    } else if (section) {
      if (section !== 'ignore') node[section].push(line.trim());
    } else {
      node.summary.push(line.trim());
    }
  }
  flush();
  return nodes;
}

function finalize(raw) {
  const { id, domain, theory, meta, file } = raw;
  const tier = meta.tier;
  if (!TIERS.includes(tier)) errors.push(`${file} [${id}]: tier must be one of ${TIERS.join('|')}, got "${tier}"`);
  if (!meta.title) errors.push(`${file} [${id}]: missing title`);
  if (!meta.grammar) errors.push(`${file} [${id}]: missing grammar`);
  if (raw.summary.length === 0) errors.push(`${file} [${id}]: missing summary paragraph`);

  const node = {
    id,
    domain,
    theory,
    title: meta.title ?? id,
    tier,
    grammar: meta.grammar ?? '',
    summary: raw.summary.join(' '),
    bullets: raw.bullets,
    bridges: raw.bridges,
    sources: raw.sources,
  };
  if (raw.note.length) node.note = raw.note.join(' ');

  if (meta.status || tier === 'revised') {
    if (!STATUSES.includes(meta.status)) {
      errors.push(`${file} [${id}]: revised-tier nodes need status: ${STATUSES.join('|')}`);
    }
    const evidence = {
      status: meta.status,
      knownFor: raw.knownFor.join(' '),
      shows: raw.shows.join(' '),
      instead: raw.instead.join(' '),
    };
    if (meta.year) evidence.year = meta.year;
    if (raw.survives.length) evidence.survives = raw.survives.join(' ');
    if (!evidence.knownFor) errors.push(`${file} [${id}]: evidence node missing "### Known for"`);
    if (!evidence.shows) errors.push(`${file} [${id}]: evidence node missing "### Evidence shows"`);
    if (!evidence.instead) errors.push(`${file} [${id}]: evidence node missing "### Instead"`);
    node.evidence = evidence;
  }
  return node;
}

const files = walk(CONTENT_DIR).sort();
if (files.length === 0) {
  console.error(`No content files found under ${CONTENT_DIR}`);
  process.exit(1);
}

const nodes = [];
const seen = new Map();
for (const file of files) {
  for (const raw of parseFile(file)) {
    if (seen.has(raw.id)) errors.push(`${raw.file} [${raw.id}]: duplicate id (first defined in ${seen.get(raw.id)})`);
    seen.set(raw.id, raw.file);
    nodes.push(finalize(raw));
  }
}

// Bridge targets must exist; warn on one-way cross-domain bridges (informational only).
for (const node of nodes) {
  for (const bridge of node.bridges) {
    if (!seen.has(bridge.target)) errors.push(`[${node.id}]: bridge target "${bridge.target}" does not exist`);
    if (bridge.target === node.id) errors.push(`[${node.id}]: bridge points at itself`);
  }
}

if (errors.length) {
  console.error(`Content compile failed with ${errors.length} error(s):\n` + errors.map(e => `  - ${e}`).join('\n'));
  process.exit(1);
}

const byId = {};
for (const node of nodes) byId[node.id] = node;

const banner = `// GENERATED FILE — do not edit by hand.
// Source: content/nodes/**/*.md · Rebuild with \`npm run content\`.
import type { ContentNode } from '@/types';

export const CONTENT_NODES: Record<string, ContentNode> = `;

writeFileSync(OUT_FILE, banner + JSON.stringify(byId, null, 2) + ';\n');

const counts = {};
for (const node of nodes) counts[node.domain] = (counts[node.domain] ?? 0) + 1;
console.log(
  `Compiled ${nodes.length} nodes from ${files.length} files → src/data/content.generated.ts\n` +
  DOMAINS.map(d => `  ${d}: ${counts[d] ?? 0}`).join('\n')
);
