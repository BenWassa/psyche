import {useState} from 'react';

type ViewMode = 'encyclopedia' | 'domains' | 'theory' | 'settings';
type DomainId = 'personality' | 'cognition' | 'motivation' | 'relationships' | 'emotion' | 'self';
type InspectorKey = keyof typeof INSPECTOR_COPY;

type DomainMeta = {
  id: DomainId;
  order: string;
  name: string;
  subtitle: string;
  summary: string;
  accent: string;
  structure: string;
};

const DOMAIN_SEQUENCE: DomainMeta[] = [
  {
    id: 'personality',
    order: '01',
    name: 'Personality & Individual Differences',
    subtitle: 'Hierarchical trait structure',
    summary: 'Who people are: stable traits, character structure, and individual differences.',
    accent: 'text-domain-self',
    structure: '5 traits -> 10 facets',
  },
  {
    id: 'cognition',
    order: '02',
    name: 'Cognition & Judgment',
    subtitle: 'Dual process, catalog, loop',
    summary: 'How people think: biases, heuristics, reasoning errors, judgment, and the cognitive loop.',
    accent: 'text-domain-cognition',
    structure: 'paired duality + catalog + loop',
  },
  {
    id: 'motivation',
    order: '03',
    name: 'Motivation & Behavioral Regulation',
    subtitle: 'Needs and process flow',
    summary: 'Why people act: needs, goals, drive, self-regulation, and behavior change.',
    accent: 'text-domain-motivation',
    structure: '3 needs + process logic',
  },
  {
    id: 'relationships',
    order: '04',
    name: 'Relationships & Attachment',
    subtitle: 'Dimensional field',
    summary: 'How people bond: attachment patterns, relational security, intimacy, and trust.',
    accent: 'text-domain-relationships',
    structure: '2D anxiety / avoidance plane',
  },
  {
    id: 'emotion',
    order: '05',
    name: 'Emotion & Emotion Regulation',
    subtitle: 'Timeline and appraisal',
    summary: 'How people feel: emotion generation, experience, regulation strategies, and affective patterns.',
    accent: 'text-primary',
    structure: 'timeline + branching flow',
  },
  {
    id: 'self',
    order: '06',
    name: 'Self & Identity',
    subtitle: 'Networked beliefs',
    summary: 'How people understand themselves: capability beliefs, self-relationship, identity coherence, and resilience.',
    accent: 'text-domain-self',
    structure: 'sources -> belief -> outcome',
  },
];

const TRAIT_FACETS = {
  openness: ['Intellect', 'Aesthetic Openness'],
  conscientiousness: ['Industriousness', 'Orderliness'],
  extraversion: ['Enthusiasm', 'Assertiveness'],
  agreeableness: ['Compassion', 'Politeness'],
  neuroticism: ['Withdrawal', 'Volatility'],
} as const;

const INSPECTOR_COPY: Record<
  string,
  {
    eyebrow: string;
    title: string;
    summary: string;
    bullets: string[];
    note?: string;
  }
> = {
  openness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Openness',
    summary: 'Appreciation for ideas, aesthetics, curiosity, and breadth of experience.',
    bullets: ['Facet pair: Intellect, Aesthetic Openness', 'Best treated as a high-level trait with stable substructure', 'Drill-down should emphasize curiosity and pattern-seeking'],
  },
  conscientiousness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Conscientiousness',
    summary: 'Tendency to be organized, dependable, and persistent in goal pursuit.',
    bullets: ['Facet pair: Industriousness, Orderliness', 'Useful bridge into goal setting and behavior change', 'Displays the strongest practical overlap with persistence'],
  },
  extraversion: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Extraversion',
    summary: 'Energy, positive affect, sociability, and drive toward the external world.',
    bullets: ['Facet pair: Enthusiasm, Assertiveness', 'Facet labels are corrected to DeYoung / Big Five facet vocabulary', 'Warmth and dominance should read as separate subcomponents'],
  },
  agreeableness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Agreeableness',
    summary: 'Compassionate, cooperative, and conflict-sensitive interpersonal style.',
    bullets: ['Facet pair: Compassion, Politeness', 'Useful for distinguishing care from norm-respect', 'Low agreeableness often maps to friction and antagonism'],
  },
  neuroticism: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Neuroticism',
    summary: 'Sensitivity to threat, stress, and negative emotion.',
    bullets: ['Facet pair: Withdrawal, Volatility', 'Works well as a bridge into emotion regulation', 'High values do not imply dysfunction, only reactivity'],
  },
  'dual-process': {
    eyebrow: 'Paired Duality',
    title: 'Dual Process Theory',
    summary: 'System 1 is fast and automatic; System 2 is slower, effortful, and deliberative.',
    bullets: ['Render as two side-by-side systems with interaction arrows', 'Use this as the organizing frame for judgment and intervention', 'Keep the systems in dialogue rather than isolated'],
  },
  heuristics: {
    eyebrow: 'Catalog / Grid',
    title: 'Heuristics & Biases',
    summary: 'A catalog of common shortcuts and predictable judgment errors.',
    bullets: ['Anchoring, availability, framing, confirmation, loss aversion', 'Each item should be browsable as an independent card', 'Catalog layouts beat trying to force a single hierarchy'],
  },
  cbt: {
    eyebrow: 'Loop / Process',
    title: 'Cognitive Behavioral Model',
    summary: 'Thoughts, feelings, and behavior form a loop that can be interrupted and revised.',
    bullets: ['Show the loop explicitly', 'Emphasize the intervention point of restructuring', 'This is a process view, not a static trait map'],
  },
  sdt: {
    eyebrow: 'Needs / Bento',
    title: 'Self-Determination Theory',
    summary: 'Autonomy, competence, and relatedness are the three core needs behind motivation.',
    bullets: ['Three equal-weight needs should read as co-anchors', 'Use a 3-part bento layout', 'Needs are not steps; they are concurrent conditions'],
  },
  'goal-setting': {
    eyebrow: 'Process / Flow',
    title: 'Goal-Setting Theory',
    summary: 'Specific, challenging goals with feedback produce sustained performance change.',
    bullets: ['Use a stepwise flow with feedback loops', 'Connect commitment, specificity, feedback, and persistence', 'This is the process half of the motivation domain'],
  },
  attachment: {
    eyebrow: 'Field / Plane',
    title: 'Adult Attachment Theory',
    summary: 'Attachment is best understood as a 2D field: anxiety and avoidance are continuous dimensions.',
    bullets: ['Render the field as a Cartesian plane with quadrant labels', 'Use styles as accessibility shortcuts, not the core ontology', 'The continuity note belongs in the inspector'],
    note: 'Most users sit between regions. Styles are helpful labels, but the underlying model is dimensional.',
  },
  'emotion-regulation': {
    eyebrow: 'Timeline / Strategy',
    title: 'Emotion Regulation Process Model',
    summary: 'Emotion unfolds over time, with multiple intervention points available along the timeline.',
    bullets: ['Use a horizontal stepper with numbered stages', 'Show where reappraisal and suppression fit', 'The sequence should feel chronological and actionable'],
  },
  appraisal: {
    eyebrow: 'Branching / Flow',
    title: 'Appraisal Theory',
    summary: 'Emotion changes as the mind evaluates meaning, relevance, and control.',
    bullets: ['Render as a branching decision tree', 'Show how interpretation changes emotion', 'Use it as the bridge between cognition and emotion'],
  },
  'self-efficacy': {
    eyebrow: 'Network / Sources',
    title: 'Self-Efficacy',
    summary: 'Capability beliefs emerge from mastery, modeling, persuasion, and physiological cues.',
    bullets: ['Render sources feeding a central belief node', 'Link the belief node to action and persistence', 'This is the clearest network grammar in the app'],
  },
  'self-compassion': {
    eyebrow: 'Field / Triad',
    title: 'Self-Compassion',
    summary: 'Self-kindness, common humanity, and mindfulness work together as a three-part system.',
    bullets: ['Use a three-axis or triad layout', 'The grammar should feel dimensional, not categorical', 'This content bridges attachment, emotion, and identity'],
  },
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('encyclopedia');
  const [selectedDomain, setSelectedDomain] = useState<DomainId>('personality');

  const openDomain = (domain: DomainId) => {
    setSelectedDomain(domain);
    setCurrentView('theory');
  };

  return (
    <div className="min-h-screen text-on-surface selection:bg-primary/30 selection:text-on-surface relative">
      {currentView === 'encyclopedia' && <EncyclopediaView onEnter={() => setCurrentView('domains')} />}

      {currentView !== 'encyclopedia' && (
        <div className="h-screen w-full flex overflow-hidden bg-transparent">
          <aside className="hidden md:flex h-full w-[288px] border-r border-outline-variant bg-surface/70 backdrop-blur-xl flex-col z-[60] shrink-0">
            <div className="px-6 py-8 border-b border-outline-variant/70">
              <h1 className="text-xl font-medium text-on-surface tracking-[0.22em] font-display uppercase">Psyche Map</h1>
              <p className="panel-tag text-on-surface-variant mt-3">Editorial atlas</p>
            </div>
            <div className="px-6 pb-2 text-[11px] font-bold uppercase text-on-surface-variant tracking-[0.18em] mono-label">Domains</div>
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-2 pb-6">
              {DOMAIN_SEQUENCE.map(domain => (
                <SidebarItem
                  key={domain.id}
                  order={domain.order}
                  label={domain.name}
                  subtitle={domain.subtitle}
                  active={selectedDomain === domain.id && currentView !== 'settings'}
                  accent={domain.accent}
                  onClick={() => openDomain(domain.id)}
                />
              ))}
            </nav>
          </aside>

          <div className="flex-1 relative flex flex-col h-full overflow-hidden bg-transparent">
            <header className="md:hidden w-full flex justify-between items-center px-6 h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant z-50 shrink-0">
              <div className="flex items-center gap-4 min-w-0">
                <button className="text-on-surface hover:opacity-80 transition-opacity" onClick={() => setCurrentView('domains')}>
                  <span className="material-symbols-outlined">menu</span>
                </button>
                <span className="font-display text-lg font-medium tracking-widest text-on-surface whitespace-nowrap truncate uppercase">
                  {currentView === 'settings' ? 'Settings' : currentView === 'theory' ? DOMAIN_SEQUENCE.find(domain => domain.id === selectedDomain)?.name ?? 'Psyche Map' : 'Psyche Map'}
                </span>
              </div>
              <button className="text-on-surface hover:bg-surface-dim transition-colors p-2 rounded-lg flex items-center justify-center" onClick={() => setCurrentView('settings')}>
                <span className="material-symbols-outlined">search</span>
              </button>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-12 lg:p-16">
              <div className={`${currentView === 'settings' ? 'max-w-4xl' : 'max-w-6xl'} mx-auto h-full`}>
                {currentView === 'domains' && <DomainIndexView onOpenDomain={openDomain} selectedDomain={selectedDomain} />}
                {currentView === 'theory' && <TheoryView domain={selectedDomain} onBack={() => setCurrentView('domains')} onOpenDomain={openDomain} />}
                {currentView === 'settings' && <SettingsView />}
              </div>
            </main>
          </div>

          <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-surface/85 backdrop-blur-xl border-t border-outline-variant elevation-soft">
            <BottomNavItem icon="auto_stories" label="Archive" active={false} onClick={() => setCurrentView('encyclopedia')} />
            <BottomNavItem icon="map" label="Domains" active={currentView === 'domains'} onClick={() => setCurrentView('domains')} />
            <BottomNavItem icon="schema" label="Theory" active={currentView === 'theory'} onClick={() => setCurrentView('theory')} />
            <BottomNavItem icon="person" label="Settings" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
          </nav>
        </div>
      )}
    </div>
  );
}

function SidebarItem({ order, label, subtitle, active, accent, onClick }: { order: string; label: string; subtitle: string; active: boolean; accent: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left transition-all border ${
        active ? 'bg-primary-container/20 border-primary/40 shadow-lg shadow-black/15' : 'bg-surface-bright/40 border-outline-variant/60 hover:border-primary/40 hover:bg-surface-bright/65'
      }`}
    >
      <span className={`mono-label text-[11px] pt-0.5 ${active ? 'text-primary' : 'text-on-surface-variant'}`}>{order}</span>
      <span className="flex-1 min-w-0">
        <span className={`block text-[14px] leading-5 ${active ? 'text-on-surface' : 'text-on-surface-variant'}`}>{label}</span>
        <span className={`block text-[11px] mt-1 mono-label ${accent} ${active ? 'opacity-100' : 'opacity-75'}`}>{subtitle}</span>
      </span>
    </button>
  );
}

function BottomNavItem({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center p-2 transition-all relative ${active ? '-translate-y-1 text-primary' : 'hover:text-primary text-on-surface-variant'}`}>
      <span className="material-symbols-outlined mb-1 text-[24px]">{icon}</span>
      <span className="mono-label font-medium text-[10px] tracking-widest uppercase">{label}</span>
      {active && <span className="absolute bottom-[-4px] w-1 h-1 rounded-full bg-primary" />}
    </button>
  );
}

function EncyclopediaView({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="bg-transparent text-on-surface min-h-screen flex items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-[1200px] min-h-[700px] flex flex-col md:flex-row star-surface rounded-[28px] overflow-hidden elevation-soft border border-outline-variant/70">
        <div
          className="flex-1 border-b md:border-b-0 md:border-r border-outline-variant/50 relative overflow-hidden min-h-[300px] md:min-h-full bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(10,15,30,0.15), rgba(10,15,30,0.55)), url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2400&auto=format&fit=crop')" }}
          title="Deep-space atlas texture"
        />
        <div className="flex-[1.2] flex flex-col justify-between p-8 md:p-12 lg:p-16">
          <header className="flex justify-between items-start mb-16 gap-6">
            <div className="panel-tag text-on-surface">Psyche Map</div>
            <div className="panel-tag text-on-surface-variant flex gap-2 text-right">
              <span>Vol. 1</span>
              <span>—</span>
              <span>Index</span>
            </div>
          </header>

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="domain-hero-title mb-8 leading-[1.05] text-on-surface">
              The Encyclopedia<br />
              of Mind.
            </h1>
            <div className="w-16 h-[1px] bg-primary mb-8"></div>
            <p className="body-text text-on-surface-variant text-[18px] max-w-lg">
              A structured, objective exploration of human cognition, emotion, and behavior. Designed as a definitive archive for the analytical mind, stripping away the superfluous to present psychological phenomena with architectural clarity.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t border-outline-variant/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="body-text !text-[14px] text-on-surface-variant max-w-[280px]">Establish an ongoing dialogue with the architecture of thought.</div>
            <button
              onClick={onEnter}
              className="group inline-flex items-center justify-center bg-primary text-on-secondary rounded-lg px-8 py-4 hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto shadow-lg shadow-black/20"
            >
              <span className="panel-tag !text-inherit mr-3">Enter the Archive</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}

function DomainIndexView({ selectedDomain, onOpenDomain }: { selectedDomain: DomainId; onOpenDomain: (domain: DomainId) => void }) {
  return (
    <div className="flex flex-col gap-8 h-full pb-20">
      <div className="mb-4 border-b border-outline-variant/50 pb-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
        <div>
          <p className="panel-tag text-primary mb-3">Domain index</p>
          <h1 className="domain-hero-title mb-3 text-on-surface">Six Domains</h1>
          <p className="body-text text-on-surface-variant max-w-2xl">The app now follows the real six-domain sequence. Each card opens a live theory view instead of a dead placeholder.</p>
        </div>
        <div className="rounded-2xl border border-outline-variant/70 bg-surface-bright/40 px-4 py-3 max-w-sm">
          <p className="mono-label text-[11px] text-on-surface-variant">Pedagogical sequence</p>
          <p className="body-text text-[15px] text-on-surface mt-1">Personality → Cognition → Motivation → Relationships → Emotion → Self</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {DOMAIN_SEQUENCE.map((domain, index) => (
          <DomainCard
            key={domain.id}
            order={domain.order}
            title={domain.name}
            subtitle={domain.subtitle}
            summary={domain.summary}
            structure={domain.structure}
            active={selectedDomain === domain.id}
            accent={domain.accent}
            onClick={() => onOpenDomain(domain.id)}
            span={index === 2 || index === 5 ? 'lg:col-span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
}

function DomainCard({ order, title, subtitle, summary, structure, accent, active, onClick, span = '' }: { order: string; title: string; subtitle: string; summary: string; structure: string; accent: string; active: boolean; onClick: () => void; span?: string }) {
  return (
    <button
      onClick={onClick}
      className={`text-left interactive-node flex flex-col p-8 group min-h-[230px] ${span} ${active ? 'border-primary shadow-lg shadow-black/20' : ''}`}
    >
      <div className="flex justify-between items-start w-full opacity-80 group-hover:opacity-100 transition-opacity gap-6">
        <span className="panel-tag text-on-surface-variant">Domain {order}</span>
        <span className="material-symbols-outlined text-primary transition-colors">{iconForDomain(title)}</span>
      </div>
      <div className="pt-8 mt-auto flex flex-col gap-3">
        <h2 className="node-title !text-3xl text-on-surface group-hover:text-primary transition-colors leading-tight">{title}</h2>
        <p className={`mono-label text-[11px] ${accent}`}>{subtitle}</p>
        <p className="body-text text-on-surface-variant max-w-2xl">{summary}</p>
        <p className="mono-label text-[11px] text-primary mt-2">{structure}</p>
      </div>
    </button>
  );
}

function TheoryView({ domain, onBack, onOpenDomain }: { domain: DomainId; onBack: () => void; onOpenDomain: (domain: DomainId) => void }) {
  const [inspectorKey, setInspectorKey] = useState<InspectorKey | null>(null);

  const openInspector = (key: InspectorKey) => setInspectorKey(key);

  return (
    <div className="flex flex-col h-full relative pb-20">
      <InspectorPanel inspectorKey={inspectorKey} onClose={() => setInspectorKey(null)} />

      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="panel-tag text-primary mb-3">Theory view / {DOMAIN_SEQUENCE.find(item => item.id === domain)?.order}</p>
          <h2 className="domain-hero-title text-on-surface">{DOMAIN_SEQUENCE.find(item => item.id === domain)?.name}</h2>
          <p className="body-text text-on-surface-variant max-w-2xl mt-4">{DOMAIN_SEQUENCE.find(item => item.id === domain)?.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={onBack} className="rounded-full border border-outline-variant bg-surface-bright/40 px-4 py-2 mono-label text-[11px] text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors">
            Back to domains
          </button>
          <button onClick={() => onOpenDomain(domain)} className="rounded-full border border-outline-variant bg-surface-bright/40 px-4 py-2 mono-label text-[11px] text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors">
            Reopen current domain
          </button>
        </div>
      </header>

      {domain === 'personality' && <PersonalityTheory onInspect={openInspector} />}
      {domain === 'cognition' && <CognitionTheory onInspect={openInspector} />}
      {domain === 'motivation' && <MotivationTheory onInspect={openInspector} />}
      {domain === 'relationships' && <RelationshipsTheory onInspect={openInspector} />}
      {domain === 'emotion' && <EmotionTheory onInspect={openInspector} />}
      {domain === 'self' && <SelfTheory onInspect={openInspector} />}
    </div>
  );
}

function PersonalityTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-outline-variant bg-surface-bright/35 p-5 md:p-6">
        <div className="flex items-center justify-between gap-6 mb-3">
          <p className="panel-tag text-primary">Hierarchical structure</p>
          <p className="mono-label text-[11px] text-on-surface-variant">5 traits → 10 facets</p>
        </div>
        <p className="body-text text-on-surface-variant max-w-3xl">The Big Five should read as a trait hierarchy, not five identical tiles. The preview below varies span, density, and emphasis to reflect actual structure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(180px,auto)]">
        <button onClick={() => onInspect('openness')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Openness" subtitle="Breadth, curiosity, aesthetic sensitivity" icon="lightbulb" />
          <FacetPills facets={TRAIT_FACETS.openness} />
        </button>

        <button onClick={() => onInspect('conscientiousness')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="02" title="Conscientiousness" subtitle="Order, persistence, dependability" icon="rule" />
          <FacetPills facets={TRAIT_FACETS.conscientiousness} compact />
        </button>

        <button onClick={() => onInspect('extraversion')} className="interactive-node p-6 text-left group lg:col-span-2 bg-gradient-to-br from-surface-bright to-surface-dim/60 border-primary/50">
          <TheoryTileHeader index="03" title="Extraversion" subtitle="Energy, positive affect, assertiveness" icon="group" tone="primary" />
          <div className="grid grid-cols-2 gap-3 mt-5">
            <FacetPill label="Enthusiasm" tone="primary" />
            <FacetPill label="Assertiveness" tone="primary" />
          </div>
        </button>

        <button onClick={() => onInspect('agreeableness')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="04" title="Agreeableness" subtitle="Compassion, cooperation, politeness" icon="handshake" />
          <FacetPills facets={TRAIT_FACETS.agreeableness} compact />
        </button>

        <button onClick={() => onInspect('neuroticism')} className="interactive-node p-6 text-left group lg:col-span-1">
          <TheoryTileHeader index="05" title="Neuroticism" subtitle="Threat sensitivity and emotional volatility" icon="storm" />
          <div className="mt-5 space-y-3">
            <FacetPill label="Withdrawal" />
            <FacetPill label="Volatility" />
          </div>
        </button>
      </div>
    </div>
  );
}

function CognitionTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-[minmax(190px,auto)]">
        <button onClick={() => onInspect('dual-process')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Dual Process Theory" subtitle="Paired duality: fast intuition vs deliberate reasoning" icon="compare_arrows" />
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="rounded-2xl border border-outline-variant bg-surface-dim/50 p-4">
              <p className="panel-tag text-primary mb-2">System 1</p>
              <p className="body-text text-on-surface-variant">Fast, automatic, associative, low effort.</p>
            </div>
            <div className="rounded-2xl border border-outline-variant bg-surface-dim/50 p-4">
              <p className="panel-tag text-primary mb-2">System 2</p>
              <p className="body-text text-on-surface-variant">Slow, deliberate, effortful, rule-based.</p>
            </div>
          </div>
        </button>

        <button onClick={() => onInspect('heuristics')} className="interactive-node p-6 text-left group">
          <TheoryTileHeader index="02" title="Heuristics & Biases" subtitle="Catalog of shortcuts and predictable errors" icon="grid_view" />
          <div className="grid grid-cols-2 gap-2 mt-5">
            {['Anchoring', 'Availability', 'Framing', 'Confirmation', 'Loss aversion', 'Base-rate neglect'].map(bias => (
              <span key={bias} className="rounded-full border border-outline-variant bg-surface-dim/40 px-3 py-2 text-[12px] mono-label text-on-surface-variant text-center">
                {bias}
              </span>
            ))}
          </div>
        </button>

        <button onClick={() => onInspect('cbt')} className="interactive-node p-6 text-left group lg:col-span-3">
          <TheoryTileHeader index="03" title="Cognitive Behavioral Model" subtitle="Loop / cycle with interrupt points" icon="sync" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
            {['Situation', 'Thought', 'Emotion', 'Behavior'].map((step, index) => (
              <div key={step} className="rounded-2xl border border-outline-variant bg-surface-dim/50 p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="panel-tag text-primary mb-1">0{index + 1}</p>
                  <p className="body-text text-on-surface">{step}</p>
                </div>
                {index < 3 && <span className="material-symbols-outlined text-primary">arrow_forward</span>}
              </div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}

function MotivationTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <button onClick={() => onInspect('sdt')} className="interactive-node p-6 text-left group lg:col-span-2">
          <TheoryTileHeader index="01" title="Self-Determination Theory" subtitle="Three co-equal needs: autonomy, competence, relatedness" icon="favorite" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            {[
              ['Autonomy', 'Volition and self-endorsed action'],
              ['Competence', 'Effectance and mastery'],
              ['Relatedness', 'Belonging and care'],
            ].map(([name, desc]) => (
              <div key={name} className="rounded-2xl border border-outline-variant bg-surface-dim/50 p-4">
                <p className="panel-tag text-primary mb-2">{name}</p>
                <p className="body-text text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </button>

        <button onClick={() => onInspect('goal-setting')} className="interactive-node p-6 text-left group lg:col-span-1">
          <TheoryTileHeader index="02" title="Goal-Setting Theory" subtitle="Process flow with feedback loops" icon="flag" />
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
    </div>
  );
}

function RelationshipsTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('attachment')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="01" title="Adult Attachment Theory" subtitle="2D continuous space: anxiety x avoidance" icon="square_foot" />
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
    </div>
  );
}

function EmotionTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('emotion-regulation')} className="interactive-node p-6 text-left group w-full lg:col-span-3">
        <TheoryTileHeader index="01" title="Emotion Regulation Process Model" subtitle="Timeline grammar with intervention points" icon="timeline" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-6">
          {['Situation', 'Attention', 'Appraisal', 'Response', 'Outcome'].map((step, index) => (
            <div key={step} className="rounded-2xl border border-outline-variant bg-surface-dim/50 p-4">
              <p className="panel-tag text-primary mb-2">0{index + 1}</p>
              <p className="body-text text-on-surface-variant">{step}</p>
            </div>
          ))}
        </div>
      </button>

      <button onClick={() => onInspect('appraisal')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="02" title="Appraisal Theory" subtitle="Branching flow: meaning drives emotion" icon="account_tree" />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          {['Is it relevant?', 'Can I cope?', 'What action fits?'].map((branch, index) => (
            <div key={branch} className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4 flex items-center justify-between gap-4">
              <div>
                <p className="panel-tag text-primary mb-1">Branch 0{index + 1}</p>
                <p className="body-text text-on-surface-variant">{branch}</p>
              </div>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
          ))}
        </div>
      </button>
    </div>
  );
}

function SelfTheory({ onInspect }: { onInspect: (key: InspectorKey) => void }) {
  return (
    <div className="space-y-6">
      <button onClick={() => onInspect('self-efficacy')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="01" title="Self-Efficacy" subtitle="Network grammar: sources feed belief feed action" icon="hub" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
          {['Mastery', 'Vicarious', 'Persuasion', 'States'].map(source => (
            <div key={source} className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4">
              <p className="panel-tag text-primary mb-2">Source</p>
              <p className="body-text text-on-surface-variant">{source}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-primary/40 bg-primary-container/15 p-4 md:col-span-1">
            <p className="panel-tag text-primary mb-2">Belief</p>
            <p className="body-text text-on-surface-variant">Capability judgment</p>
          </div>
          <div className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4">
            <p className="panel-tag text-primary mb-2">Outcome</p>
            <p className="body-text text-on-surface-variant">Action and persistence</p>
          </div>
        </div>
      </button>

      <button onClick={() => onInspect('self-compassion')} className="interactive-node p-6 text-left group w-full">
        <TheoryTileHeader index="02" title="Self-Compassion" subtitle="Three-axis field: kindness, humanity, mindfulness" icon="psychology" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {['Self-kindness', 'Common humanity', 'Mindfulness'].map(axis => (
            <div key={axis} className="rounded-2xl border border-outline-variant bg-surface-dim/45 p-4">
              <p className="panel-tag text-primary mb-2">Axis</p>
              <p className="body-text text-on-surface-variant">{axis}</p>
            </div>
          ))}
        </div>
      </button>
    </div>
  );
}

function InspectorPanel({ inspectorKey, onClose }: { inspectorKey: InspectorKey | null; onClose: () => void }) {
  const data = inspectorKey ? INSPECTOR_COPY[inspectorKey] : null;

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-on-surface/10 backdrop-blur-sm z-[70] transition-opacity duration-300 opacity-100" onClick={onClose} />

      <aside className="fixed top-0 right-0 w-full md:w-[420px] h-full bg-surface-bright z-[80] border-l border-outline-variant elevation-soft flex flex-col transform transition-transform duration-300 md:rounded-l-[28px] translate-x-0">
        <div className="w-full flex justify-between items-center py-4 px-6 border-b border-outline-variant/50">
          <p className="panel-tag text-primary">{data.eyebrow}</p>
          <button className="p-2 rounded-full hover:bg-surface-dim transition-colors text-on-surface-variant flex items-center justify-center w-10 h-10" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-8 py-8 flex-1 overflow-y-auto w-full">
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant/40 pb-6 gap-4">
            <h2 className="domain-hero-title !text-4xl text-primary">{data.title}</h2>
            <span className="material-symbols-outlined text-primary text-3xl">explore</span>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="body-text text-on-surface mb-5 text-[16px]">{data.summary}</p>
            </div>

            <div className="bg-surface-dim/50 p-6 rounded-2xl border border-outline-variant/40">
              <h4 className="panel-tag text-on-surface mb-5">Key structure</h4>
              <ul className="space-y-4">
                {data.bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm mt-2.5 shrink-0" />
                    <span className="body-text !text-[15px] text-on-surface-variant">{bullet}</span>
                  </li>
                ))}
              </ul>

              {data.note && (
                <div className="mt-8 pt-5 border-t border-outline-variant/30">
                  <p className="mono-label text-[11px] text-primary mb-3">Continuity note</p>
                  <p className="body-text text-on-surface-variant">{data.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function TheoryTileHeader({ index, title, subtitle, icon, tone = 'default' }: { index: string; title: string; subtitle: string; icon: string; tone?: 'default' | 'primary' }) {
  return (
    <div className="w-full flex justify-between items-start gap-6">
      <div className="min-w-0">
        <p className="panel-tag text-primary mb-2">{index}</p>
        <h3 className={`node-title ${tone === 'primary' ? 'text-primary' : 'text-on-surface'} text-2xl group-hover:text-primary transition-colors leading-tight`}>{title}</h3>
        <p className="body-text text-on-surface-variant mt-2 text-[15px]">{subtitle}</p>
      </div>
      <span className={`material-symbols-outlined ${tone === 'primary' ? 'text-primary' : 'text-outline'}`}>{icon}</span>
    </div>
  );
}

function FacetPills({ facets, compact = false }: { facets: readonly string[]; compact?: boolean }) {
  return (
    <div className={`grid ${compact ? 'grid-cols-1 gap-2 mt-5' : 'grid-cols-2 gap-3 mt-5'}`}>
      {facets.map(facet => (
        <FacetPill key={facet} label={facet} />
      ))}
    </div>
  );
}

function FacetPill({ label, tone = 'default' }: { label: string; tone?: 'default' | 'primary' }) {
  return (
    <span className={`rounded-full border px-3 py-2 text-[12px] mono-label text-center ${tone === 'primary' ? 'border-primary/40 bg-primary-container/20 text-on-surface' : 'border-outline-variant bg-surface-dim/35 text-on-surface-variant'}`}>
      {label}
    </span>
  );
}

function SettingsView() {
  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="mb-10">
        <h1 className="domain-hero-title mb-4 pb-4 border-b border-outline-variant/50 relative">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-surface-bright/35 p-8 rounded-2xl border border-outline-variant/60 shadow-sm lg:col-span-2">
          <h2 className="panel-tag text-primary mb-6">Appearance</h2>
          <div className="space-y-6">
            <ToggleRow title="Typography" desc="Select preferred reading font" options={['Serif', 'Sans']} active="Serif" />
            <ToggleRow title="Reading Mode" desc="Adjust contrast and background tone" options={['Paper', 'Ink']} active="Ink" noBorder />
          </div>
        </section>

        <section className="bg-surface-bright/35 p-8 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-6">Navigation</h2>
          <div className="space-y-6">
            <SwitchRow title="Sequential Flow" desc="Enable next/prev article links" active={true} />
            <SwitchRow title="Auto-Hide Inspector" desc="Dismiss panels on scroll" active={false} noBorder />
          </div>
        </section>

        <section className="bg-surface-bright/35 p-8 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-6">Account</h2>
          <div className="space-y-2">
            <ActionRow title="Manage Subscription" icon="arrow_forward" />
            <ActionRow title="Export Library" icon="download" />
            <ActionRow title="Sign Out" icon="logout" danger noBorder />
          </div>
        </section>
      </div>
    </div>
  );
}

function ToggleRow({ title, desc, options, active, noBorder }: { title: string; desc: string; options: string[]; active: string; noBorder?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <div>
        <p className="text-[15px] text-on-surface font-medium">{title}</p>
        <p className="body-text !text-[14px] text-on-surface-variant mt-1">{desc}</p>
      </div>
      <div className="flex bg-surface-dim rounded-lg p-1 border border-outline-variant/50 shrink-0">
        {options.map(opt => (
          <button
            key={opt}
            className={`px-4 py-2 mono-label text-[12px] font-medium rounded-md transition-all ${opt === active ? 'bg-surface-bright text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function SwitchRow({ title, desc, active, noBorder }: { title: string; desc: string; active: boolean; noBorder?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-4 gap-6 ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <div>
        <p className="text-[15px] text-on-surface font-medium">{title}</p>
        <p className="body-text !text-[14px] text-on-surface-variant mt-1">{desc}</p>
      </div>
      <button className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none ${active ? 'bg-primary' : 'bg-outline-variant'}`}>
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-surface-bright shadow-sm transition-all duration-300 ease-in-out ${active ? 'left-7' : 'left-1'}`}></div>
      </button>
    </div>
  );
}

function ActionRow({ title, icon, danger, noBorder }: { title: string; icon: string; danger?: boolean; noBorder?: boolean }) {
  return (
    <button className={`w-full flex items-center justify-between py-4 cursor-pointer group rounded-lg px-2 -mx-2 transition-colors hover:bg-surface-dim ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <p className={`font-body text-[15px] font-medium transition-colors ${danger ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>{title}</p>
      <span className={`material-symbols-outlined text-[20px] transition-colors ${danger ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{icon}</span>
    </button>
  );
}

function iconForDomain(title: string) {
  switch (title) {
    case 'Personality & Individual Differences':
      return 'fingerprint';
    case 'Cognition & Judgment':
      return 'psychology';
    case 'Motivation & Behavioral Regulation':
      return 'moving';
    case 'Relationships & Attachment':
      return 'diversity_3';
    case 'Emotion & Emotion Regulation':
      return 'mood';
    case 'Self & Identity':
      return 'face_retouching_natural';
    default:
      return 'explore';
  }
}