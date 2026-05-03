import React from 'react';
import { TheoryTileHeader } from '@/components/ui';

export default function SelfTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('self-efficacy')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="01" title="Self-Efficacy" tier="cornerstone" subtitle="Network grammar: sources feed belief feed action" icon="hub" />
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch">
          {['Mastery', 'Vicarious', 'Persuasion', 'States'].map(source => (
            <div key={source} className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4">
              <p className="panel-tag text-on-surface-variant mb-2">Source</p>
              <p className="body-text text-on-surface">{source}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-primary/40 bg-primary-container/15 p-4">
            <p className="panel-tag text-primary mb-2">Belief</p>
            <p className="body-text text-on-surface">Capability judgment</p>
          </div>
          <div className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4">
            <p className="panel-tag text-on-surface-variant mb-2">Outcome</p>
            <p className="body-text text-on-surface">Action and persistence</p>
          </div>
        </div>
      </button>

      <button onClick={() => onInspect('self-compassion')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="02" title="Self-Compassion" tier="cornerstone" subtitle="Three-axis field: kindness, humanity, mindfulness" icon="psychology" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border border-outline-variant/50 bg-outline-variant/30">
          {['Self-kindness', 'Common humanity', 'Mindfulness'].map(axis => (
            <div key={axis} className="bg-surface-bright/80 p-4 flex flex-col gap-1.5">
              <p className="panel-tag text-on-surface-variant">Axis</p>
              <p className="body-text text-on-surface">{axis}</p>
            </div>
          ))}
        </div>
      </button>
    </div>
  );
}
