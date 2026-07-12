import { useState } from 'react';
import type { DomainId } from '@/types';
import { DOMAIN_SEQUENCE } from '@/data/domains';
import { useProgress } from '@/hooks/useProgress';
import { domainCoverage, overallCoverage, progressStats, waypoints, clearProgress, hasProgress } from '@/lib/progress';
import { ProgressRing, ProgressBar } from '@/components/progress';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ProgressView({ onOpenDomain }: { onOpenDomain: (domain: DomainId) => void }) {
  const progress = useProgress();
  const overall = overallCoverage(progress);
  const stats = progressStats(progress);
  const marks = waypoints(progress);
  const reached = marks.filter(mark => mark.achievedOn !== undefined).length;

  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="mb-8 pb-6 border-b border-outline-variant/50">
        <p className="panel-tag text-primary mb-3">Field notes</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-on-surface mb-4">Your Progress</h1>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Coverage, not compulsion. This page records which entries you have opened, which bridges you have crossed —
          and nothing else. It lives in this browser only.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Overall coverage */}
        <section className="bg-surface-bright/35 p-5 sm:p-6 md:p-8 rounded-2xl border border-outline-variant/60 shadow-sm flex flex-col">
          <h2 className="panel-tag text-primary mb-6">Atlas coverage</h2>
          <div className="flex items-center gap-6 sm:gap-8">
            <ProgressRing pct={overall.pct} size={104} stroke={6} />
            <div className="min-w-0">
              <p className="font-display text-3xl sm:text-4xl font-light text-on-surface leading-tight">
                {overall.read}<span className="text-on-surface-variant text-xl sm:text-2xl"> of {overall.total}</span>
              </p>
              <p className="body-text !text-[14px] text-on-surface-variant mt-1">entries read across six domains</p>
              {overall.read === 0 && (
                <p className="body-text !text-[13px] text-on-surface-variant mt-2 italic">
                  Nothing recorded yet — open any entry to begin.
                </p>
              )}
            </div>
          </div>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-outline-variant/40">
            {[
              { label: 'Bridges crossed', value: stats.bridgesCrossed },
              { label: 'Domains touched', value: `${stats.domainsTouched} / 6` },
              { label: 'Domains charted', value: `${stats.domainsCharted} / 6` },
              { label: 'Days visited', value: stats.daysVisited },
            ].map(item => (
              <div key={item.label}>
                <dt className="mono-label text-[10px] text-on-surface-variant mb-1.5">{item.label}</dt>
                <dd className="font-display text-2xl font-light text-on-surface m-0">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Per-domain coverage */}
        <section className="bg-surface-bright/35 p-5 sm:p-6 md:p-8 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-6">By domain</h2>
          <ul className="space-y-2">
            {DOMAIN_SEQUENCE.map(domain => {
              const summary = domainCoverage(progress, domain.id);
              return (
                <li key={domain.id}>
                  <button
                    onClick={() => onOpenDomain(domain.id)}
                    className="w-full text-left rounded-xl border border-outline-variant/60 bg-surface-bright/50 px-4 py-3 hover:border-primary transition-colors group"
                  >
                    <span className="flex items-center justify-between gap-3 mb-2">
                      <span className="flex items-baseline gap-3 min-w-0">
                        <span className="mono-label text-[10px] text-on-surface-variant">{domain.order}</span>
                        <span className="font-display text-[15px] text-on-surface group-hover:text-primary transition-colors truncate">{domain.name}</span>
                      </span>
                      {summary.complete ? (
                        <span className="panel-tag text-[9px] px-2 py-0.5 rounded-full border border-primary/40 bg-primary-container/30 text-primary shrink-0">Charted</span>
                      ) : (
                        <span className="mono-label text-[10px] text-on-surface-variant shrink-0">{summary.read} / {summary.total}</span>
                      )}
                    </span>
                    <ProgressBar pct={summary.pct} label={`${domain.name}: ${summary.read} of ${summary.total} entries read`} />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {/* Waypoints */}
      <section className="bg-surface-bright/35 p-5 sm:p-6 md:p-8 rounded-2xl border border-outline-variant/60 shadow-sm mt-4 sm:mt-6">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="panel-tag text-primary">Waypoints</h2>
          <span className="mono-label text-[10px] text-on-surface-variant">{reached} of {marks.length} reached</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {marks.map(mark => {
            const achieved = mark.achievedOn !== undefined;
            return (
              <li key={mark.id} className="flex items-start gap-4 py-3 border-b border-outline-variant/30 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                <span
                  className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${achieved ? 'bg-primary' : 'border border-outline-variant bg-transparent'}`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className={`font-display text-[16px] leading-snug ${achieved ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                    {mark.title}
                    {achieved && (
                      <span className="mono-label text-[9px] text-primary ml-2 align-middle">{formatDate(mark.achievedOn!)}</span>
                    )}
                  </p>
                  <p className="body-text !text-[13px] text-on-surface-variant mt-0.5">{mark.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <FieldNotesFooter recorded={hasProgress(progress)} />
    </div>
  );
}

function FieldNotesFooter({ recorded }: { recorded: boolean }) {
  const [arming, setArming] = useState(false);

  const handleClear = () => {
    if (!arming) {
      setArming(true);
      return;
    }
    clearProgress();
    setArming(false);
  };

  return (
    <footer className="mt-6 pt-5 border-t border-outline-variant/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="mono-label text-[11px] text-on-surface-variant">
        Stored in this browser only — nothing leaves your device.
      </p>
      <button
        type="button"
        onClick={handleClear}
        onBlur={() => setArming(false)}
        disabled={!recorded}
        className={`rounded-full border px-4 py-2 panel-tag text-xs transition-colors disabled:opacity-50 shrink-0 ${
          arming
            ? 'border-primary text-primary bg-primary-container/20'
            : 'border-outline-variant bg-surface-bright/40 text-on-surface-variant hover:border-primary hover:text-on-surface disabled:hover:border-outline-variant disabled:hover:text-on-surface-variant'
        }`}
      >
        {!recorded ? 'No notes recorded' : arming ? 'Click again to confirm' : 'Clear field notes'}
      </button>
    </footer>
  );
}
