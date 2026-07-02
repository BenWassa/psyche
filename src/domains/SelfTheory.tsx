import React from 'react';
import TheorySection, { NodeChip, FlowArrow } from '@/components/ui/TheorySection';
import { EvidenceStrip } from '@/components';

const EFFICACY_SOURCES = [
  { id: 'efficacy-mastery', label: 'Mastery', detail: 'Earned success — strongest' },
  { id: 'efficacy-vicarious', label: 'Vicarious', detail: 'Similar others succeeding' },
  { id: 'efficacy-persuasion', label: 'Persuasion', detail: 'Credible encouragement' },
  { id: 'efficacy-physiological', label: 'Body states', detail: 'How you read arousal' },
];

const COMPASSION_AXES = [
  { id: 'sc-kindness', positive: 'Self-Kindness', negative: 'Self-Judgment' },
  { id: 'sc-humanity', positive: 'Common Humanity', negative: 'Isolation' },
  { id: 'sc-mindfulness', positive: 'Mindfulness', negative: 'Over-Identification' },
];

export default function SelfTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="self-efficacy"
        title="Self-Efficacy"
        subtitle="Network grammar: four sources feed one belief, and the belief drives action."
        tier="cornerstone"
        icon="hub"
        onInspect={onInspect}
      >
        <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
          <div className="grid grid-cols-2 gap-3 flex-1">
            {EFFICACY_SOURCES.map(source => (
              <NodeChip key={source.id} nodeId={source.id} tag="Source" label={source.label} detail={source.detail} onInspect={onInspect} />
            ))}
          </div>
          <FlowArrow />
          <button
            onClick={() => onInspect('self-efficacy')}
            className="rounded-xl border border-primary/40 bg-primary-container/15 p-5 flex flex-col justify-center items-center text-center hover:border-primary transition-colors lg:w-44 shrink-0 group/belief"
          >
            <p className="panel-tag text-primary mb-2">Belief</p>
            <p className="body-text !text-[15px] text-on-surface group-hover/belief:text-primary transition-colors">"I can execute what this requires"</p>
          </button>
          <FlowArrow />
          <NodeChip
            nodeId="efficacy-consequences"
            tag="Consequences"
            label="Goal choice · Effort · Persistence · Recovery"
            detail="What the belief does once built"
            onInspect={onInspect}
            className="flex-1 lg:max-w-[240px] self-stretch flex flex-col justify-center"
          />
        </div>
      </TheorySection>

      <TheorySection
        index="02"
        nodeId="self-compassion"
        title="Self-Compassion"
        subtitle="Three-axis grammar: each component is a continuum against its opposite — not a checklist."
        tier="cornerstone"
        icon="psychology"
        onInspect={onInspect}
      >
        <div className="mt-6 space-y-3">
          {COMPASSION_AXES.map(axis => (
            <button
              key={axis.id}
              onClick={() => onInspect(axis.id)}
              className="w-full rounded-xl border border-outline-variant bg-surface-bright/80 p-4 hover:border-primary transition-colors group/axis"
            >
              <div className="flex items-center gap-4">
                <span className="mono-label text-[10px] text-on-surface w-40 text-left shrink-0 group-hover/axis:text-primary transition-colors">{axis.positive}</span>
                <span className="flex-1 h-px bg-outline-variant relative" aria-hidden="true">
                  <span className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
                </span>
                <span className="mono-label text-[10px] text-on-surface-variant w-40 text-right shrink-0">{axis.negative}</span>
              </div>
            </button>
          ))}
        </div>
      </TheorySection>

      <TheorySection
        index="03"
        nodeId="self-concept"
        title="Self-Concept & Self-Schemas"
        subtitle="Scaffolding: actual, ideal, and ought selves — and the emotions their gaps produce."
        tier="include"
        icon="frame_person"
        onInspect={onInspect}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          {[
            ['Actual Self', 'who you think you are'],
            ['Ideal Self', 'gap → dejection'],
            ['Ought Self', 'gap → agitation, guilt'],
          ].map(([label, detail]) => (
            <div key={label} className="rounded-xl border border-outline-variant bg-surface-dim/40 p-4">
              <p className="body-text !text-[15px] text-on-surface">{label}</p>
              <p className="mono-label text-[9px] text-on-surface-variant mt-1.5">{detail}</p>
            </div>
          ))}
        </div>
      </TheorySection>

      <EvidenceStrip domain="self" onInspect={onInspect} />
    </div>
  );
}
