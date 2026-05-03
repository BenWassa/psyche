import React from 'react';
import { TheoryTileHeader } from '@/components/ui';
import { EvidenceCard } from '@/components';

export default function EmotionTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('emotion-regulation')} className="interactive-node p-6 text-left group w-full lg:col-span-3">
        <TheoryTileHeader index="01" title="Emotion Regulation Process Model" tier="cornerstone" subtitle="Timeline grammar with intervention points" icon="timeline" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px mt-6 rounded-xl overflow-hidden border border-outline-variant/50 bg-outline-variant/30">
          {['Situation', 'Attention', 'Appraisal', 'Response', 'Outcome'].map((step, index) => (
            <div key={step} className="bg-surface-bright/80 p-4 flex flex-col gap-1.5">
              <p className="panel-tag text-primary">0{index + 1}</p>
              <p className="body-text text-on-surface-variant">{step}</p>
            </div>
          ))}
        </div>
      </button>

      <button onClick={() => onInspect('appraisal')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="02" title="Appraisal Theory" tier="cornerstone" subtitle="Branching flow: meaning drives emotion" icon="account_tree" />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border border-outline-variant/50 bg-outline-variant/30">
          {['Is it relevant?', 'Can I cope?', 'What action fits?'].map((branch, index) => (
            <div key={branch} className="bg-surface-bright/80 p-4 flex flex-col gap-1.5">
              <p className="panel-tag text-primary">Branch 0{index + 1}</p>
              <p className="body-text text-on-surface-variant">{branch}</p>
            </div>
          ))}
        </div>
      </button>

      <div className="space-y-4">
        <p className="panel-tag text-on-surface-variant">Popular but revised</p>
        <EvidenceCard
          title="Broaden-and-Build Theory"
          year="1998"
          status="revised"
          whatPeopleKnow="Positive emotions broaden cognition and build psychological, social, and physical resources over time."
          whatSurvives="Positive emotions correlate with wellbeing. Some experimental support for cognitive broadening exists."
          whatIsWrong="The positivity ratio (3:1) was mathematically refuted (Brown et al. 2013, partially retracted). Roth et al. (2024) network analysis shows the broadening mechanism does not operate as hypothesised. Build hypothesis replicates inconsistently."
          useInstead="Appraisal Theory plus the Gross Process Model plus Self-Compassion give a more robust framework for cultivating wellbeing."
        />
      </div>
    </div>
  );
}
