import React from 'react';
import { TheoryTileHeader } from '@/components/ui';
import { FacetPill, FacetPills } from '@/components/ui';
import { TRAIT_FACETS } from '@/data/domains';

export default function PersonalityTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-outline-variant bg-surface-bright/35 p-5 md:p-6">
        <div className="flex items-center justify-between gap-6 mb-3">
          <p className="panel-tag text-primary">Hierarchical structure</p>
          <p className="mono-label text-[11px] text-on-surface-variant">5 traits → 10 facets</p>
        </div>
        <p className="body-text text-on-surface-variant max-w-3xl">The Big Five should read as a trait hierarchy, not five identical tiles. The preview below varies span, density, and emphasis to reflect actual structure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(180px,auto)]">
        <button onClick={() => onInspect('openness')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Openness" subtitle="Breadth, curiosity, aesthetic sensitivity" icon="lightbulb" />
          <FacetPills facets={TRAIT_FACETS.openness} />
        </button>

        <button onClick={() => onInspect('conscientiousness')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="02" title="Conscientiousness" subtitle="Order, persistence, dependability" icon="rule" />
          <FacetPills facets={TRAIT_FACETS.conscientiousness} compact />
        </button>

        <button onClick={() => onInspect('extraversion')} className="interactive-node p-6 text-left group lg:col-span-2 border-primary/50">
          <TheoryTileHeader index="03" title="Extraversion" subtitle="Energy, positive affect, assertiveness" icon="group" tone="primary" />
          <div className="grid grid-cols-2 gap-3 mt-5">
            <FacetPill label="Enthusiasm" tone="primary" />
            <FacetPill label="Assertiveness" tone="primary" />
          </div>
        </button>

        <button onClick={() => onInspect('agreeableness')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="04" title="Agreeableness" subtitle="Compassion, cooperation, politeness" icon="handshake" />
          <FacetPills facets={TRAIT_FACETS.agreeableness} compact />
        </button>

        <button onClick={() => onInspect('neuroticism')} className="interactive-node p-6 text-left group lg:col-span-1">
          <TheoryTileHeader index="05" title="Neuroticism" subtitle="Threat sensitivity and emotional volatility" icon="storm" />
          <div className="mt-5 space-y-3">
            <FacetPill label="Withdrawal" />
            <FacetPill label="Volatility" />
          </div>
        </button>
      </div>
    </div>
  );
}
