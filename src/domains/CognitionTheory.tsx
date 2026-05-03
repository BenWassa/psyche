import React from 'react';
import { TheoryTileHeader } from '@/components/ui';

export default function CognitionTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-[minmax(190px,auto)]">
        <button onClick={() => onInspect('dual-process')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Dual Process Theory" tier="cornerstone" subtitle="Paired duality: fast intuition vs deliberate reasoning" icon="compare_arrows" />
          <div className="grid grid-cols-2 gap-4 mt-6 border-t border-outline-variant/40 pt-4">
            <div className="flex flex-col gap-1.5">
              <p className="panel-tag text-primary">System 1</p>
              <p className="body-text text-on-surface-variant">Fast, automatic, associative, low effort.</p>
            </div>
            <div className="flex flex-col gap-1.5 border-l border-outline-variant/50 pl-4">
              <p className="panel-tag text-primary">System 2</p>
              <p className="body-text text-on-surface-variant">Slow, deliberate, effortful, rule-based.</p>
            </div>
          </div>
        </button>

        <button onClick={() => onInspect('heuristics')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="02" title="Heuristics & Biases" tier="cornerstone" subtitle="Catalog of shortcuts and predictable errors" icon="grid_view" />
          <div className="grid grid-cols-2 gap-2 mt-5">
            {['Anchoring', 'Availability', 'Framing', 'Confirmation', 'Loss aversion', 'Base-rate neglect'].map(bias => (
              <span key={bias} className="rounded-full border border-outline-variant bg-surface-dim/40 px-3 py-2 text-[12px] mono-label text-on-surface-variant text-center">
                {bias}
              </span>
            ))}
          </div>
        </button>

        <button onClick={() => onInspect('cbt')} className="interactive-node p-6 text-left group lg:col-span-3">
          <TheoryTileHeader index="03" title="Cognitive Behavioral Model" tier="cornerstone" subtitle="Loop / cycle with interrupt points" icon="sync" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-6 rounded-xl overflow-hidden border border-outline-variant/50 bg-outline-variant/30">
            {['Situation', 'Thought', 'Emotion', 'Behavior'].map((step, index) => (
              <div key={step} className="bg-surface-bright/80 p-4 flex flex-col gap-1.5">
                <p className="panel-tag text-primary">0{index + 1}</p>
                <p className="body-text text-on-surface">{step}</p>
              </div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}
