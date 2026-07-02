import React from 'react';
import TheorySection from '@/components/ui/TheorySection';
import { EvidenceStrip } from '@/components';

const REGIONS = [
  { id: 'attachment-dismissing', label: 'Dismissing', detail: 'low anxiety · high avoidance', position: 'top-left' },
  { id: 'attachment-fearful', label: 'Fearful', detail: 'high anxiety · high avoidance', position: 'top-right' },
  { id: 'attachment-secure', label: 'Secure', detail: 'low anxiety · low avoidance', position: 'bottom-left' },
  { id: 'attachment-anxious', label: 'Anxious', detail: 'high anxiety · low avoidance', position: 'bottom-right' },
];

export default function RelationshipsTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <TheorySection
        index="01"
        nodeId="attachment"
        title="Adult Attachment Theory"
        subtitle="Field grammar: two continuous axes. The four familiar styles are regions of this plane, not boxes."
        tier="cornerstone"
        icon="square_foot"
        onInspect={onInspect}
      >
        <div className="mt-6 flex gap-3">
          {/* Vertical axis: avoidance */}
          <div className="flex flex-col items-center justify-between py-2 shrink-0 w-8">
            <span className="mono-label text-[9px] text-on-surface-variant [writing-mode:vertical-rl] rotate-180" aria-hidden="true">high avoidance</span>
            <button
              onClick={() => onInspect('attachment-avoidance-axis')}
              className="mono-label text-[10px] text-on-surface-variant hover:text-primary transition-colors [writing-mode:vertical-rl] rotate-180 py-2"
            >
              Avoidance axis ↕
            </button>
            <span className="mono-label text-[9px] text-on-surface-variant [writing-mode:vertical-rl] rotate-180" aria-hidden="true">low avoidance</span>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-px rounded-2xl overflow-hidden border border-outline bg-outline min-h-[320px]">
              {REGIONS.map(region => (
                <button
                  key={region.id}
                  onClick={() => onInspect(region.id)}
                  className="bg-surface-bright p-4 md:p-5 flex flex-col justify-between text-left hover:bg-domain-relationships/10 transition-colors group/region"
                >
                  <p className="panel-tag text-primary mb-3">{region.label}</p>
                  <p className="body-text !text-[13px] text-on-surface-variant group-hover/region:text-on-surface transition-colors">{region.detail}</p>
                </button>
              ))}
            </div>
            {/* Horizontal axis: anxiety */}
            <div className="flex items-center justify-between px-1">
              <span className="mono-label text-[9px] text-on-surface-variant" aria-hidden="true">low anxiety</span>
              <button onClick={() => onInspect('attachment-anxiety-axis')} className="mono-label text-[10px] text-on-surface-variant hover:text-primary transition-colors">
                Anxiety axis ↔
              </button>
              <span className="mono-label text-[9px] text-on-surface-variant" aria-hidden="true">high anxiety</span>
            </div>
          </div>
        </div>
        <div className="mt-4 border-l-2 border-primary/50 pl-4">
          <p className="body-text !text-[13px] text-on-surface-variant">
            Continuity note: most people sit between regions. The quadrants are accessibility shortcuts — the model itself is dimensional, and position can shift with insight and experience.
          </p>
        </div>
      </TheorySection>

      <TheorySection
        index="02"
        nodeId="bowlby"
        title="Bowlby's Attachment Theory"
        subtitle="The origin story: caregiver bonds become internal working models — the 'why' behind the plane above."
        tier="include"
        icon="history_edu"
        onInspect={onInspect}
      />

      <EvidenceStrip domain="relationships" onInspect={onInspect} />
    </div>
  );
}
