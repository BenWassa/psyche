import React from 'react';
import { TheoryTileHeader } from '@/components/ui';
import { EvidenceCard } from '@/components';

export default function MotivationTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <button onClick={() => onInspect('sdt')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Self-Determination Theory" tier="cornerstone" subtitle="Three co-equal needs: autonomy, competence, relatedness" icon="favorite" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-6 rounded-xl overflow-hidden border border-outline-variant/50 bg-outline-variant/30">
            {[
              ['Autonomy', 'Volition and self-endorsed action'],
              ['Competence', 'Effectance and mastery'],
              ['Relatedness', 'Belonging and care'],
            ].map(([name, desc]) => (
              <div key={name} className="bg-surface-bright/80 p-4 flex flex-col gap-1.5">
                <p className="panel-tag text-primary">{name}</p>
                <p className="body-text text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </button>

        <button onClick={() => onInspect('goal-setting')} className="interactive-node p-6 text-left group lg:col-span-1">
          <TheoryTileHeader index="02" title="Goal-Setting Theory" tier="cornerstone" subtitle="Process flow with feedback loops" icon="flag" />
          <div className="mt-5 space-y-3">
            {['Specific goal', 'Commitment', 'Feedback', 'Persistence'].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-dim/40 px-3 py-2">
                <span className="mono-label text-[11px] text-primary">0{index + 1}</span>
                <span className="body-text text-on-surface-variant text-[15px]">{step}</span>
              </div>
            ))}
          </div>
        </button>
      </div>

      <div className="space-y-4">
        <p className="panel-tag text-on-surface-variant">Popular but revised</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <EvidenceCard
            title="Maslow's Hierarchy of Needs"
            year="1943"
            status="revised"
            whatPeopleKnow="A five-level pyramid: physiological needs must be met before safety, then love, esteem, and self-actualisation."
            whatSurvives="The content of the needs as a useful list. Humans do care about belonging, esteem, and meaning."
            whatIsWrong="Tay and Diener (2011) Gallup data (123 countries) shows needs operate in parallel, not sequentially. Cross-cultural tests reject the ordering."
            useInstead="Self-Determination Theory — autonomy, competence, relatedness — is more parsimonious and cross-culturally replicated."
          />
          <EvidenceCard
            title="Grit"
            year="2007"
            status="revised"
            whatPeopleKnow="Passion plus perseverance predicts long-term success beyond talent and IQ."
            whatSurvives="Perseverance (the persistence facet) does predict outcomes — but that is already measured by Conscientiousness."
            whatIsWrong="Crede et al. (2017) meta-analysis of 88 studies: grit is statistically indistinguishable from the perseverance facet of Conscientiousness. Incremental validity is small."
            useInstead="Conscientiousness in the Big Five — a well-validated trait with 60 years of research."
          />
        </div>
      </div>
    </div>
  );
}
