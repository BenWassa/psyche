import React from 'react';
import TheorySection, { NodeChip, FlowArrow } from '@/components/ui/TheorySection';
import { EvidenceStrip } from '@/components';

const BIASES = [
  { id: 'anchoring', label: 'Anchoring', detail: 'The first number wins' },
  { id: 'availability', label: 'Availability', detail: 'Memorable feels frequent' },
  { id: 'representativeness', label: 'Representativeness', detail: 'Resemblance beats base rates' },
  { id: 'base-rate-neglect', label: 'Base-rate neglect', detail: 'Vivid evidence swamps priors' },
  { id: 'framing', label: 'Framing', detail: 'Same fact, different feel' },
  { id: 'confirmation-bias', label: 'Confirmation bias', detail: 'Seeking what we already believe' },
  { id: 'loss-aversion', label: 'Loss aversion', detail: 'Losses loom twice as large' },
  { id: 'hindsight-bias', label: 'Hindsight bias', detail: '"I knew it all along"' },
];

export default function CognitionTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="dual-process"
        title="Dual Process Theory"
        subtitle="Paired duality: two systems in dialogue, not two brains. The organizing frame for this whole domain."
        tier="cornerstone"
        icon="compare_arrows"
        onInspect={onInspect}
      >
        <div className="mt-6 flex flex-col md:flex-row items-stretch gap-3">
          <button onClick={() => onInspect('dual-process-system1')} className="flex-1 text-left rounded-xl border border-outline-variant bg-surface-bright/80 p-5 hover:border-primary transition-colors group/s1">
            <p className="panel-tag text-primary mb-2">System 1 · Default</p>
            <p className="node-title !text-[20px] text-on-surface group-hover/s1:text-primary transition-colors">Fast · Automatic</p>
            <p className="body-text !text-[14px] text-on-surface-variant mt-2">Parallel, effortless, pattern-matching. Source of intuition — and of the bias catalog below.</p>
          </button>
          <div className="flex md:flex-col items-center justify-center gap-1 px-2" aria-hidden="true">
            <span className="material-symbols-outlined text-outline">sync_alt</span>
            <span className="mono-label text-[9px] text-on-surface-variant text-center">generates ↔ audits</span>
          </div>
          <button onClick={() => onInspect('dual-process-system2')} className="flex-1 text-left rounded-xl border border-outline-variant bg-surface-bright/80 p-5 hover:border-primary transition-colors group/s2">
            <p className="panel-tag text-primary mb-2">System 2 · On demand</p>
            <p className="node-title !text-[20px] text-on-surface group-hover/s2:text-primary transition-colors">Slow · Deliberate</p>
            <p className="body-text !text-[14px] text-on-surface-variant mt-2">Sequential, effortful, capacity-limited. Engages when stakes are high — or when you make it.</p>
          </button>
        </div>
      </TheorySection>

      <TheorySection
        index="02"
        nodeId="heuristics"
        title="Heuristics & Biases"
        subtitle="Catalog grammar: each bias is a self-contained card. The core set — robustly replicated, high everyday relevance."
        tier="cornerstone"
        icon="grid_view"
        onInspect={onInspect}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {BIASES.map(bias => (
            <NodeChip key={bias.id} nodeId={bias.id} label={bias.label} detail={bias.detail} onInspect={onInspect} />
          ))}
        </div>
      </TheorySection>

      <TheorySection
        index="03"
        nodeId="cbt"
        title="Cognitive Behavioral Model"
        subtitle="Loop grammar: thoughts, feelings, and behaviors reinforce each other — and the loop has two entry points."
        tier="cornerstone"
        icon="sync"
        onInspect={onInspect}
      >
        <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
          {[
            { label: 'Thoughts', detail: 'Automatic evaluations of self, world, future' },
            { label: 'Feelings', detail: 'The emotional readout of the thought' },
            { label: 'Behaviors', detail: 'Action — which feeds back into thought' },
          ].map((corner, index, corners) => (
            <React.Fragment key={corner.label}>
              <div className="flex-1 rounded-xl border border-outline-variant bg-surface-bright/80 p-5">
                <p className="panel-tag text-primary mb-2">{`0${index + 1}`}</p>
                <p className="body-text !text-[16px] text-on-surface">{corner.label}</p>
                <p className="body-text !text-[13px] text-on-surface-variant mt-1">{corner.detail}</p>
              </div>
              {index < corners.length - 1 && <FlowArrow direction="both" />}
            </React.Fragment>
          ))}
        </div>
        <p className="mono-label text-[10px] text-on-surface-variant mt-3 text-center" aria-hidden="true">⟲ each corner feeds the others — the loop closes in both directions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 border-t border-outline-variant/40 pt-5">
          <NodeChip nodeId="cbt-automatic-thoughts" tag="Raw input" label="Automatic thoughts" onInspect={onInspect} />
          <NodeChip nodeId="cbt-distortions" tag="Failure modes" label="Cognitive distortions" onInspect={onInspect} />
          <NodeChip nodeId="cbt-restructuring" tag="Intervention · thought" label="Cognitive restructuring" onInspect={onInspect} emphasis />
          <NodeChip nodeId="cbt-behavioral-activation" tag="Intervention · action" label="Behavioral activation" onInspect={onInspect} emphasis />
        </div>
      </TheorySection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TheorySection
          index="04"
          nodeId="cognitive-dissonance"
          title="Cognitive Dissonance"
          subtitle="Conflicting cognitions create discomfort — usually resolved by rationalizing, not by changing."
          tier="include"
          icon="call_split"
          onInspect={onInspect}
        />
        <TheorySection
          index="05"
          nodeId="attribution-theory"
          title="Attribution Theory & the FAE"
          subtitle="Their lateness is character; mine is traffic. How we explain behavior — and how it goes wrong."
          tier="include"
          icon="person_search"
          onInspect={onInspect}
        />
      </div>

      <EvidenceStrip domain="cognition" onInspect={onInspect} />
    </div>
  );
}
