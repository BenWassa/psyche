import React from 'react';
import TheorySection from '@/components/ui/TheorySection';
import { EvidenceStrip, SelfLocation } from '@/components';
import { TRAIT_FACETS } from '@/data/domains';

const TRAITS = [
  { id: 'openness', index: '01', title: 'Openness', subtitle: 'Breadth, curiosity, aesthetic sensitivity', span: 'lg:col-span-2' },
  { id: 'conscientiousness', index: '02', title: 'Conscientiousness', subtitle: 'Order, persistence, dependability', span: '' },
  { id: 'extraversion', index: '03', title: 'Extraversion', subtitle: 'Energy, positive affect, assertiveness', span: 'lg:col-span-2' },
  { id: 'agreeableness', index: '04', title: 'Agreeableness', subtitle: 'Compassion, cooperation, politeness', span: '' },
  { id: 'neuroticism', index: '05', title: 'Neuroticism', subtitle: 'Threat sensitivity and emotional volatility', span: 'lg:col-span-1' },
] as const;

export default function PersonalityTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="big-five"
        title="Big Five (OCEAN)"
        subtitle="Hierarchical grammar: 5 traits → 10 facets. Open a trait for depth, a facet pill for its own entry."
        tier="cornerstone"
        icon="account_tree"
        onInspect={onInspect}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 auto-rows-[minmax(170px,auto)]">
          {TRAITS.map(trait => (
            <div key={trait.id} className={`interactive-node p-6 group relative ${trait.span}`}>
              <button onClick={() => onInspect(trait.id)} className="w-full text-left">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <p className="panel-tag text-primary">{trait.index}</p>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]" aria-hidden="true">north_east</span>
                </div>
                <h3 className="node-title text-on-surface text-2xl group-hover:text-primary transition-colors leading-tight">{trait.title}</h3>
                <p className="body-text text-on-surface-variant mt-2 text-[15px]">{trait.subtitle}</p>
              </button>
              <div className="flex flex-wrap gap-2 mt-4">
                {TRAIT_FACETS[trait.id].map(facet => (
                  <button
                    key={facet.id}
                    onClick={() => onInspect(facet.id)}
                    className="inline-flex items-center justify-center rounded-full border border-outline-variant bg-surface-dim/35 px-2.5 py-1 text-[11px] mono-label text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors"
                  >
                    {facet.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TheorySection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TheorySection
          index="02"
          nodeId="hexaco"
          title="HEXACO"
          subtitle="The sixth dimension: Honesty-Humility — sincerity, fairness, greed-avoidance. An extension of the Big Five, not a rival."
          tier="include"
          icon="hexagon"
          onInspect={onInspect}
        />
        <TheorySection
          index="03"
          nodeId="dark-triad"
          title="Dark Triad"
          subtitle="Machiavellianism, narcissism, psychopathy — low ends of normal traits, not a separate species."
          tier="include"
          icon="theater_comedy"
          onInspect={onInspect}
        >
          <div className="grid grid-cols-3 gap-3 mt-5">
            {['Machiavellianism', 'Narcissism', 'Psychopathy'].map(trait => (
              <span key={trait} className="rounded-full border border-outline-variant bg-surface-dim/40 px-3 py-2 text-[11px] mono-label text-on-surface-variant text-center truncate">
                {trait}
              </span>
            ))}
          </div>
        </TheorySection>
      </div>

      <SelfLocation onInspect={onInspect} />

      <EvidenceStrip domain="personality" onInspect={onInspect} />
    </div>
  );
}
