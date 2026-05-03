import React from 'react';
import { TheoryTileHeader } from '@/components/ui';
import { EvidenceCard } from '@/components';

export default function RelationshipsTheory({ onInspect }: { onInspect: (key: string) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('attachment')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="01" title="Adult Attachment Theory" tier="cornerstone" subtitle="2D continuous space: anxiety x avoidance" icon="square_foot" />
        <div className="mt-6 grid grid-cols-2 grid-rows-2 gap-2 rounded-2xl overflow-hidden border border-outline-variant bg-surface-dim/40 min-h-[320px]">
          {[
            ['Secure', 'low anxiety / low avoidance'],
            ['Anxious', 'high anxiety / low avoidance'],
            ['Dismissing', 'low anxiety / high avoidance'],
            ['Fearful', 'high anxiety / high avoidance'],
          ].map(([label, desc]) => (
            <div key={label} className="p-4 md:p-5 border border-outline-variant/60 flex flex-col justify-between hover:bg-surface-bright/40 transition-colors">
              <p className="panel-tag text-primary mb-3">{label}</p>
              <p className="body-text text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mono-label text-[11px] text-on-surface-variant mt-4">Quadrants are accessibility shortcuts. The model itself is dimensional.</p>
      </button>

      <div className="space-y-4">
        <p className="panel-tag text-on-surface-variant">Popular but revised</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <EvidenceCard
            title="Self-Esteem (global)"
            status="revised"
            whatPeopleKnow="High self-esteem — feeling good about yourself — is widely promoted as a goal in education, parenting, and self-help."
            whatSurvives="Domain-specific self-evaluations (academic self-concept, athletic self-concept) remain useful. Chronic low self-esteem is a real clinical concern."
            whatIsWrong="Global self-esteem programs in schools showed weak or no effects (Baumeister et al. 2003). Comparative self-esteem inflates narcissism. Contingent self-esteem collapses under failure."
            useInstead="Self-Efficacy for capability beliefs. Self-Compassion for a stable self-relationship that does not require feeling above others."
          />
          <EvidenceCard
            title="Terror Management Theory"
            year="1986"
            status="superseded"
            whatPeopleKnow="Humans manage existential terror of mortality by adopting cultural worldviews and pursuing self-esteem. Reminders of death (mortality salience) intensify these defences."
            whatSurvives="Existential concerns are real and shape behaviour. The broad idea that awareness of death influences motivation has intuitive support."
            whatIsWrong="Schimmack (2025) z-curve analysis of 800+ studies suggests the literature is heavily biased by selective reporting. Multi-lab replications (2023) and Schindler meta-analysis (2023) show much weaker effects than the original 1.0+ d's."
            useInstead="Self-Concept (for identity coherence), Self-Compassion (for existential reckoning), and Adult Attachment (for relational security that buffers existential anxiety)."
          />
        </div>
      </div>
    </div>
  );
}
