import React from 'react';
import type { ContentNode, DomainId, Tier } from '@/types';
import { DOMAIN_SEQUENCE } from '@/data/domains';
import { getNode } from '@/data/content';
import { useProgress } from '@/hooks/useProgress';
import { domainCoverage, markBridgeCrossed } from '@/lib/progress';
import { ProgressBar, ReadDot } from '@/components/progress';
import { PersonalityTheory, CognitionTheory, MotivationTheory, RelationshipsTheory, EmotionTheory, SelfTheory } from '@/domains';

type TheoryViewProps = {
  domain: DomainId;
  inspectorKey: string | null;
  onInspect: (key: string) => void;
  onCloseInspector: () => void;
  onNavigateNode: (nodeId: string) => void;
  onBack: () => void;
  onOpenDomain: (domain: DomainId) => void;
};

export default function TheoryView({ domain, inspectorKey, onInspect, onCloseInspector, onNavigateNode, onBack, onOpenDomain }: TheoryViewProps) {
  const meta = DOMAIN_SEQUENCE.find(item => item.id === domain);
  const nextDomain = DOMAIN_SEQUENCE[DOMAIN_SEQUENCE.findIndex(item => item.id === domain) + 1];

  return (
    <div className="flex flex-col h-full relative">
      <InspectorPanel inspectorKey={inspectorKey} onClose={onCloseInspector} onNavigateNode={onNavigateNode} />

      <header className="mb-8 sm:mb-10 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="panel-tag text-primary mb-2 text-xs sm:text-sm">Domain {meta?.order} of 06 · {meta?.subtitle}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-on-surface mb-2 sm:mb-3">{meta?.name}</h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">{meta?.summary}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <button onClick={onBack} className="rounded-full border border-outline-variant bg-surface-bright/40 px-3 sm:px-4 py-2 panel-tag text-xs text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors">
            All domains
          </button>
          <DomainCoverageTag domain={domain} />
        </div>
      </header>

      {domain === 'personality' && <PersonalityTheory onInspect={onInspect} />}
      {domain === 'cognition' && <CognitionTheory onInspect={onInspect} />}
      {domain === 'motivation' && <MotivationTheory onInspect={onInspect} />}
      {domain === 'relationships' && <RelationshipsTheory onInspect={onInspect} />}
      {domain === 'emotion' && <EmotionTheory onInspect={onInspect} />}
      {domain === 'self' && <SelfTheory onInspect={onInspect} />}

      <footer className="mt-10 pt-6 border-t border-outline-variant/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="mono-label text-[11px] text-on-surface-variant">
          Reading order is a suggestion — every bridge is a door.
        </p>
        {nextDomain ? (
          <button
            onClick={() => onOpenDomain(nextDomain.id)}
            className="group flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-bright/40 px-5 py-3 text-left hover:border-primary transition-colors"
          >
            <div>
              <p className="panel-tag text-on-surface-variant group-hover:text-primary transition-colors">Next in sequence · {nextDomain.order}</p>
              <p className="font-display text-lg text-on-surface leading-snug">{nextDomain.name}</p>
            </div>
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" aria-hidden="true">arrow_forward</span>
          </button>
        ) : (
          <p className="body-text !text-[14px] text-on-surface-variant max-w-md">
            End of the sequence. The threads from all five earlier domains converge here — follow the bridges back through them.
          </p>
        )}
      </footer>
    </div>
  );
}

/** Quiet per-domain coverage readout for the theory header. */
function DomainCoverageTag({ domain }: { domain: DomainId }) {
  const progress = useProgress();
  const summary = domainCoverage(progress, domain);
  if (summary.total === 0) return null;

  return (
    <div className="w-40">
      <p className="mono-label text-[10px] text-on-surface-variant mb-1.5 text-left md:text-right">
        {summary.complete ? 'Domain charted ✓' : `${summary.read} of ${summary.total} entries read`}
      </p>
      <ProgressBar pct={summary.pct} label={`${summary.read} of ${summary.total} entries read in this domain`} />
    </div>
  );
}

const TIER_LABEL: Record<Tier, string> = {
  cornerstone: 'Cornerstone',
  include: 'Include',
  revised: 'Popular / Revised',
};

function TierBadge({ tier }: { tier: Tier }) {
  const styles =
    tier === 'cornerstone'
      ? 'border-primary/40 bg-primary-container/30 text-primary'
      : tier === 'include'
        ? 'border-outline-variant text-on-surface-variant'
        : 'border-outline-variant bg-surface-dim text-on-surface-variant';
  return <span className={`panel-tag text-[9px] px-2 py-0.5 rounded-full border ${styles}`}>{TIER_LABEL[tier]}</span>;
}

function InspectorPanel({ inspectorKey, onClose, onNavigateNode }: { inspectorKey: string | null; onClose: () => void; onNavigateNode: (nodeId: string) => void }) {
  const node = inspectorKey ? getNode(inspectorKey) : undefined;

  if (!node) {
    return null;
  }

  const bridgeTargets = node.bridges
    .map(bridge => ({ bridge, target: getNode(bridge.target) }))
    .filter((entry): entry is { bridge: (typeof node.bridges)[number]; target: ContentNode } => entry.target !== undefined);

  return (
    <>
      <div className="fixed inset-0 bg-on-surface/10 backdrop-blur-sm z-[70] transition-opacity duration-300 opacity-100" onClick={onClose} />

      <aside className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-surface-bright z-[80] border-l border-outline-variant elevation-soft flex flex-col transform transition-transform duration-300 md:rounded-l-[28px] translate-x-0">
        <div className="w-full flex justify-between items-center py-4 px-4 sm:px-6 border-b border-outline-variant/50">
          <div className="flex items-center gap-3 min-w-0">
            <p className="panel-tag text-primary text-xs sm:text-sm truncate">{node.grammar}</p>
            <TierBadge tier={node.tier} />
          </div>
          <button className="p-2 rounded-full hover:bg-surface-dim transition-colors text-on-surface-variant flex items-center justify-center w-10 h-10 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" onClick={onClose} aria-label="Close inspector">
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex-1 overflow-y-auto w-full">
          <div className="mb-6 sm:mb-8 border-b border-outline-variant/40 pb-4 sm:pb-6">
            <p className="mono-label text-[10px] text-on-surface-variant mb-2">{node.theory}</p>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-on-surface">{node.title}</h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <p className="text-base sm:text-lg text-on-surface leading-relaxed">{node.summary}</p>

            {node.evidence ? (
              <EvidenceDetailBlock node={node} />
            ) : (
              node.bullets.length > 0 && (
                <div className="bg-surface-dim/50 p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-outline-variant/40">
                  <h4 className="panel-tag text-on-surface mb-4 text-xs sm:text-sm">Key structure</h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {node.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-3 sm:gap-4">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm mt-2 shrink-0" />
                        <span className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}

            {node.note && (
              <div className="border-l-2 border-primary/50 pl-4 sm:pl-5">
                <p className="panel-tag text-primary mb-2 text-xs sm:text-sm">Worth knowing</p>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{node.note}</p>
              </div>
            )}

            {bridgeTargets.length > 0 && (
              <div>
                <h4 className="panel-tag text-on-surface mb-4 text-xs sm:text-sm">Connects to</h4>
                <ul className="space-y-2.5">
                  {bridgeTargets.map(({ bridge, target }) => (
                    <li key={bridge.target}>
                      <button
                        onClick={() => {
                          markBridgeCrossed(node.id, target.id);
                          onNavigateNode(target.id);
                        }}
                        className="w-full text-left rounded-xl border border-outline-variant bg-surface-bright/60 px-4 py-3 hover:border-primary transition-colors group"
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-display text-[15px] text-on-surface group-hover:text-primary transition-colors inline-flex items-center gap-2">
                            {target.title}
                            <ReadDot nodeId={target.id} />
                          </span>
                          {target.domain !== node.domain && (
                            <span className="mono-label text-[9px] text-on-surface-variant shrink-0">
                              {DOMAIN_SEQUENCE.find(d => d.id === target.domain)?.order} · {target.domain}
                            </span>
                          )}
                        </span>
                        <span className="block body-text !text-[13px] text-on-surface-variant mt-1">{bridge.description}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {node.sources.length > 0 && (
              <details className="group border-t border-outline-variant/40 pt-4">
                <summary className="cursor-pointer list-none flex items-center gap-2 panel-tag text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-[16px] transition-transform group-open:rotate-90" aria-hidden="true">chevron_right</span>
                  Sources
                </summary>
                <ul className="mt-3 space-y-2 pl-1">
                  {node.sources.map(source => (
                    <li key={source} className="mono-label text-[11px] normal-case tracking-normal text-on-surface-variant leading-relaxed">{source}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

const STATUS_LABEL: Record<NonNullable<ContentNode['evidence']>['status'], string> = {
  superseded: 'Largely superseded',
  revised: 'Partially revised',
  contested: 'Actively contested',
};

function EvidenceDetailBlock({ node }: { node: ContentNode }) {
  const evidence = node.evidence;
  if (!evidence) return null;
  return (
    <div className="bg-surface-dim/50 p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-outline-variant/40 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="panel-tag text-on-surface text-xs sm:text-sm">Evidence status</h4>
        <span className="shrink-0 px-2.5 py-1 rounded-full border border-outline-variant bg-surface-bright panel-tag text-on-surface-variant text-[10px]">
          {STATUS_LABEL[evidence.status]}{evidence.year ? ` · ${evidence.year}` : ''}
        </span>
      </div>
      <div>
        <p className="panel-tag text-on-surface-variant mb-1">What people know</p>
        <p className="body-text !text-[14px] text-on-surface">{evidence.knownFor}</p>
      </div>
      {evidence.survives && (
        <div>
          <p className="panel-tag text-on-surface-variant mb-1">What survives</p>
          <p className="body-text !text-[14px] text-on-surface">{evidence.survives}</p>
        </div>
      )}
      <div>
        <p className="panel-tag text-on-surface-variant mb-1">What the evidence shows</p>
        <p className="body-text !text-[14px] text-on-surface">{evidence.shows}</p>
      </div>
      <div className="pt-2 border-t border-outline-variant/50">
        <p className="panel-tag text-primary mb-1">Use instead</p>
        <p className="body-text !text-[14px] text-on-surface">{evidence.instead}</p>
      </div>
    </div>
  );
}
