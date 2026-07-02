import React from 'react';
import TheorySection, { NodeChip, FlowArrow } from '@/components/ui/TheorySection';
import { EvidenceStrip } from '@/components';

const CONTINUUM = ['Amotivation', 'External', 'Introjected', 'Identified', 'Intrinsic'];

export default function MotivationTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="sdt"
        title="Self-Determination Theory"
        subtitle="Needs grammar: three co-equal, concurrent conditions — plus a quality continuum underneath."
        tier="cornerstone"
        icon="favorite"
        onInspect={onInspect}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          <NodeChip nodeId="sdt-autonomy" tag="Need" label="Autonomy" detail="Volition and self-endorsed action" onInspect={onInspect} />
          <NodeChip nodeId="sdt-competence" tag="Need" label="Competence" detail="Effectance and mastery" onInspect={onInspect} />
          <NodeChip nodeId="sdt-relatedness" tag="Need" label="Relatedness" detail="Belonging and care" onInspect={onInspect} />
        </div>
        <button onClick={() => onInspect('sdt-continuum')} className="w-full mt-4 rounded-xl border border-outline-variant bg-surface-bright/60 p-4 hover:border-primary transition-colors group/cont text-left">
          <div className="flex items-center justify-between gap-3 mb-3">
            <p className="panel-tag text-on-surface-variant group-hover/cont:text-primary transition-colors">Motivation continuum · controlled → autonomous</p>
            <span className="material-symbols-outlined text-outline group-hover/cont:text-primary transition-colors text-[18px]" aria-hidden="true">north_east</span>
          </div>
          <div className="flex items-center gap-1.5">
            {CONTINUUM.map((stage, index) => (
              <React.Fragment key={stage}>
                <span className={`flex-1 rounded-full px-2 py-1.5 text-center mono-label text-[9px] border ${index >= 3 ? 'border-primary/40 bg-primary-container/20 text-on-surface' : 'border-outline-variant bg-surface-dim/40 text-on-surface-variant'}`}>
                  {stage}
                </span>
                {index < CONTINUUM.length - 1 && <span className="text-outline text-[10px]" aria-hidden="true">→</span>}
              </React.Fragment>
            ))}
          </div>
        </button>
      </TheorySection>

      <TheorySection
        index="02"
        nodeId="goal-setting"
        title="Goal-Setting Theory"
        subtitle="Process grammar: characteristics flow into mediators, moderated by context. Effect sizes 0.4–0.8."
        tier="cornerstone"
        icon="flag"
        onInspect={onInspect}
      >
        <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
          <NodeChip
            nodeId="goal-characteristics"
            tag="1 · Characteristics"
            label="Specific · Difficult · Committed"
            detail="What the goal must be"
            onInspect={onInspect}
            className="flex-1"
          />
          <FlowArrow />
          <NodeChip
            nodeId="goal-mediators"
            tag="2 · Mediators"
            label="Direction · Effort · Persistence · Strategy"
            detail="How goals change performance"
            onInspect={onInspect}
            className="flex-1"
          />
          <FlowArrow />
          <NodeChip
            nodeId="goal-moderators"
            tag="3 · Moderators"
            label="Efficacy · Feedback · Complexity"
            detail="When goals work at all"
            onInspect={onInspect}
            className="flex-1"
          />
        </div>
      </TheorySection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TheorySection
          index="03"
          nodeId="regulatory-focus"
          title="Regulatory Focus"
          subtitle="Dimension grammar: one bipolar axis, two strategic styles."
          tier="include"
          icon="linear_scale"
          onInspect={onInspect}
        >
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <span className="mono-label text-[10px] text-on-surface">Promotion</span>
              <span className="mono-label text-[10px] text-on-surface">Prevention</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-dim border border-outline-variant/50 relative" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="body-text !text-[12px] text-on-surface-variant">gains · eagerness · dejection when failing</span>
              <span className="body-text !text-[12px] text-on-surface-variant text-right">security · vigilance · agitation when failing</span>
            </div>
          </div>
        </TheorySection>

        <TheorySection
          index="04"
          nodeId="expectancy-theory"
          title="Expectancy Theory"
          subtitle="Formula grammar: multiplicative — the weakest factor is the binding constraint."
          tier="include"
          icon="calculate"
          onInspect={onInspect}
        >
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap rounded-xl border border-outline-variant bg-surface-dim/40 p-4">
            <span className="mono-label text-[11px] text-on-surface">Motivation</span>
            <span className="text-outline" aria-hidden="true">=</span>
            <span className="mono-label text-[11px] text-on-surface-variant">Expectancy</span>
            <span className="text-outline" aria-hidden="true">×</span>
            <span className="mono-label text-[11px] text-on-surface-variant">Instrumentality</span>
            <span className="text-outline" aria-hidden="true">×</span>
            <span className="mono-label text-[11px] text-on-surface-variant">Valence</span>
          </div>
        </TheorySection>
      </div>

      <EvidenceStrip domain="motivation" onInspect={onInspect} />
    </div>
  );
}
