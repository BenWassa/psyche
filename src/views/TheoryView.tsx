import React, { useState } from 'react';
import type { DomainId, InspectorKey } from '@/types';
import { DOMAIN_SEQUENCE } from '@/data/domains';
import INSPECTOR_COPY from '@/data/inspectorCopy';
import { PersonalityTheory, CognitionTheory, MotivationTheory, RelationshipsTheory, EmotionTheory, SelfTheory } from '@/domains';

export default function TheoryView({ domain, onBack, onOpenDomain }: { domain: DomainId; onBack: () => void; onOpenDomain: (domain: DomainId) => void }) {
  const [inspectorKey, setInspectorKey] = useState<InspectorKey | null>(null);

  const openInspector = (key: InspectorKey) => setInspectorKey(key);

  return (
    <div className="flex flex-col h-full relative pb-20">
      <InspectorPanel inspectorKey={inspectorKey} onClose={() => setInspectorKey(null)} />

      <header className="mb-8 sm:mb-10 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="panel-tag text-primary mb-2 text-xs sm:text-sm">Theory view / {DOMAIN_SEQUENCE.find(item => item.id === domain)?.order}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-on-surface mb-2 sm:mb-3">{DOMAIN_SEQUENCE.find(item => item.id === domain)?.name}</h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">{DOMAIN_SEQUENCE.find(item => item.id === domain)?.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button onClick={onBack} className="rounded-full border border-outline-variant bg-surface-bright/40 px-3 sm:px-4 py-2 panel-tag text-xs text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors">
            Back
          </button>
          <button onClick={() => onOpenDomain(domain)} className="rounded-full border border-outline-variant bg-surface-bright/40 px-3 sm:px-4 py-2 panel-tag text-xs text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors">
            Refresh
          </button>
        </div>
      </header>

      {domain === 'personality' && <PersonalityTheory onInspect={openInspector} />}
      {domain === 'cognition' && <CognitionTheory onInspect={openInspector} />}
      {domain === 'motivation' && <MotivationTheory onInspect={openInspector} />}
      {domain === 'relationships' && <RelationshipsTheory onInspect={openInspector} />}
      {domain === 'emotion' && <EmotionTheory onInspect={openInspector} />}
      {domain === 'self' && <SelfTheory onInspect={openInspector} />}
    </div>
  );
}

function InspectorPanel({ inspectorKey, onClose }: { inspectorKey: InspectorKey | null; onClose: () => void }) {
  const data = inspectorKey ? INSPECTOR_COPY[inspectorKey] : null;

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-on-surface/10 backdrop-blur-sm z-[70] transition-opacity duration-300 opacity-100" onClick={onClose} />

      <aside className="fixed top-0 right-0 w-full md:w-[420px] h-full bg-surface-bright z-[80] border-l border-outline-variant elevation-soft flex flex-col transform transition-transform duration-300 md:rounded-l-[28px] translate-x-0">
        <div className="w-full flex justify-between items-center py-4 px-4 sm:px-6 border-b border-outline-variant/50">
          <p className="panel-tag text-primary text-xs sm:text-sm">{data.eyebrow}</p>
          <button className="p-2 rounded-full hover:bg-surface-dim transition-colors text-on-surface-variant flex items-center justify-center w-10 h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" onClick={onClose} aria-label="Close inspector">
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex-1 overflow-y-auto w-full">
          <div className="mb-6 sm:mb-8 border-b border-outline-variant/40 pb-4 sm:pb-6">
            <h2 className="text-3xl sm:text-4xl font-display font-light text-on-surface">{data.title}</h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-10">
            <div>
              <p className="text-base sm:text-lg text-on-surface mb-4 leading-relaxed">{data.summary}</p>
            </div>

            <div className="bg-surface-dim/50 p-4 sm:p-6 rounded-lg sm:rounded-2xl border border-outline-variant/40">
              <h4 className="panel-tag text-on-surface mb-4 text-xs sm:text-sm">Key structure</h4>
              <ul className="space-y-3 sm:space-y-4">
                {data.bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {data.note && (
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-outline-variant/30">
                  <p className="panel-tag text-primary mb-2 text-xs sm:text-sm">Continuity note</p>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{data.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
