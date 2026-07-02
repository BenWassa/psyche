import React from 'react';
import TheorySection, { NodeChip, FlowArrow } from '@/components/ui/TheorySection';
import { EvidenceStrip } from '@/components';

const ER_STAGES = [
  { id: 'er-situation-selection', index: '01', label: 'Situation Selection', detail: 'Choose the situation' },
  { id: 'er-situation-modification', index: '02', label: 'Situation Modification', detail: 'Reshape the situation' },
  { id: 'er-attentional-deployment', index: '03', label: 'Attentional Deployment', detail: 'Steer attention' },
  { id: 'reappraisal', index: '04', label: 'Cognitive Reappraisal', detail: 'Reinterpret the meaning', emphasis: true },
  { id: 'suppression', index: '05', label: 'Suppression', detail: 'Inhibit the expression' },
];

export default function EmotionTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="emotion-regulation"
        title="Emotion Regulation Process Model"
        subtitle="Timeline grammar: five intervention points along the emotion's unfolding — earlier beats later."
        tier="cornerstone"
        icon="timeline"
        onInspect={onInspect}
      >
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 px-1" aria-hidden="true">
            <span className="mono-label text-[9px] text-on-surface-variant">before the emotion</span>
            <span className="mono-label text-[9px] text-on-surface-variant">after it has emerged</span>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-0 h-px bg-outline-variant hidden lg:block" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:pt-4">
              {ER_STAGES.map(stage => (
                <NodeChip
                  key={stage.id}
                  nodeId={stage.id}
                  tag={`Stage ${stage.index}`}
                  label={stage.label}
                  detail={stage.detail}
                  emphasis={stage.emphasis}
                  onInspect={onInspect}
                />
              ))}
            </div>
          </div>
          <p className="body-text !text-[13px] text-on-surface-variant mt-4">
            The key finding: earlier interventions are systematically more effective. Reappraisal is the best-supported strategy; suppression carries physiological, cognitive, and relational costs.
          </p>
        </div>
      </TheorySection>

      <TheorySection
        index="02"
        nodeId="appraisal"
        title="Appraisal Theory"
        subtitle="Branching grammar: the event is evaluated twice, and the emotion follows the evaluation."
        tier="cornerstone"
        icon="account_tree"
        onInspect={onInspect}
      >
        <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
          <div className="rounded-xl border border-outline-variant bg-surface-dim/40 p-4 flex items-center justify-center lg:w-32 shrink-0">
            <p className="mono-label text-[10px] text-on-surface-variant text-center">Event</p>
          </div>
          <FlowArrow />
          <NodeChip
            nodeId="appraisal-primary"
            tag="Primary appraisal"
            label="Is this relevant? Good or bad?"
            detail="irrelevant → no emotion · benign → positive · stressful → continue"
            onInspect={onInspect}
            className="flex-1"
          />
          <FlowArrow />
          <NodeChip
            nodeId="appraisal-secondary"
            tag="Secondary appraisal"
            label="Can I cope?"
            detail="threat → fear · challenge → drive · loss → sadness · benefit → gratitude"
            onInspect={onInspect}
            className="flex-1"
            emphasis
          />
        </div>
        <div className="mt-3">
          <NodeChip
            nodeId="appraisal-themes"
            tag="Catalog"
            label="Core relational themes"
            detail="Anger, anxiety, guilt, shame, pride — each emotion has a signature appraisal"
            onInspect={onInspect}
            className="w-full"
          />
        </div>
      </TheorySection>

      <TheorySection
        index="03"
        nodeId="constructed-emotion"
        title="Constructed Emotion Theory"
        subtitle="Perspective grammar: one live-debate claim and its implications — presented as a perspective, not settled science."
        tier="include"
        icon="psychology_alt"
        onInspect={onInspect}
      >
        <div className="mt-5 rounded-xl border border-outline-variant bg-surface-dim/40 p-4 flex flex-wrap items-center gap-2">
          {['Interoception', 'Past experience', 'Cultural concepts', 'Context'].map((ingredient, index) => (
            <React.Fragment key={ingredient}>
              <span className="mono-label text-[10px] text-on-surface-variant">{ingredient}</span>
              {index < 3 && <span className="text-outline" aria-hidden="true">+</span>}
            </React.Fragment>
          ))}
          <span className="text-outline" aria-hidden="true">=</span>
          <span className="mono-label text-[10px] text-on-surface">the emotion you feel</span>
        </div>
      </TheorySection>

      <EvidenceStrip domain="emotion" onInspect={onInspect} />
    </div>
  );
}
