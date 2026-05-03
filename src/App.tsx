import {useState} from 'react';

type ViewMode = 'encyclopedia' | 'domains' | 'dimensions' | 'settings';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('encyclopedia');

  if (currentView === 'encyclopedia') {
    return <EncyclopediaView onEnter={() => setCurrentView('domains')} />;
  }

  return (
    <div className="bg-surface text-on-surface font-body h-screen w-full flex overflow-hidden selection:bg-primary-container selection:text-on-primary-container relative">
      <aside className="hidden md:flex h-full w-[288px] border-r border-outline-variant bg-surface flex-col z-[60] shrink-0">
        <div className="px-6 py-8">
          <h1 className="text-xl font-medium text-on-surface tracking-widest font-display">PSYCHE MAP</h1>
        </div>
        <div className="px-6 pb-2 text-[11px] font-bold uppercase text-on-surface-variant tracking-[0.08em]">Domains</div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-2">
          <SidebarItem icon="psychology" label="Biological" />
          <SidebarItem icon="settings_accessibility" label="Cognitive" />
          <SidebarItem icon="account_tree" label="Developmental" />
          <SidebarItem icon="groups" label="Social" />
          <SidebarItem icon="fingerprint" label="Personality" active={currentView === 'domains' || currentView === 'dimensions'} onClick={() => setCurrentView('domains')} />
        </nav>
      </aside>

      <div className="flex-1 relative flex flex-col h-full overflow-hidden bg-surface">
        <header className="md:hidden w-full flex justify-between items-center px-6 h-16 bg-surface border-b border-outline-variant z-50 shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-on-surface hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-display text-lg font-medium tracking-widest text-on-surface whitespace-nowrap">
              {currentView === 'settings' ? 'SETTINGS' : 'PSYCHE MAP'}
            </span>
          </div>
          <button className="text-on-surface hover:bg-surface-dim transition-colors p-2 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-12 lg:p-16">
          <div className={`${currentView === 'settings' ? 'max-w-3xl' : 'max-w-5xl'} mx-auto h-full`}>
            {currentView === 'domains' && <DomainsView onViewDimensions={() => setCurrentView('dimensions')} />}
            {currentView === 'dimensions' && <DimensionsView />}
            {currentView === 'settings' && <SettingsView />}
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-surface border-t border-outline-variant elevation-soft">
        <BottomNavItem icon="map" label="Map" active={currentView === 'domains'} onClick={() => setCurrentView('domains')} filled />
        <BottomNavItem icon="menu_book" label="Index" active={currentView === 'dimensions'} onClick={() => setCurrentView('dimensions')} />
        <BottomNavItem icon="auto_stories" label="Library" active={false} onClick={() => setCurrentView('encyclopedia')} />
        <BottomNavItem icon="person" label="Profile" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} filled />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: string; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-left transition-colors text-[14px] ${
        active
          ? 'bg-primary-container text-on-primary-container font-medium'
          : 'text-on-surface hover:bg-surface-dim'
      }`}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      {label}
    </button>
  );
}

function BottomNavItem({ icon, label, active, onClick, filled = false }: { icon: string; label: string; active: boolean; onClick: () => void; filled?: boolean }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center p-2 transition-all relative ${active ? '-translate-y-1 text-primary' : 'hover:text-primary text-on-surface-variant'}`}>
      <span className={`material-symbols-outlined mb-1 text-[24px] ${filled && active ? 'fill' : ''}`}>{icon}</span>
      <span className="font-body font-medium text-[10px] tracking-widest uppercase">{label}</span>
      {active && <span className="absolute bottom-[-4px] w-1 h-1 rounded-full bg-primary" />}
    </button>
  );
}

function EncyclopediaView({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-[1200px] min-h-[700px] flex flex-col md:flex-row bg-surface-bright rounded-2xl overflow-hidden elevation-soft border border-outline-variant/50">
        <div
          className="flex-1 border-b md:border-b-0 md:border-r border-outline-variant/50 relative overflow-hidden min-h-[300px] md:min-h-full bg-surface-dim bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop')" }}
          title="Abstract textured paper and soft geometry"
        />
        <div className="flex-[1.2] flex flex-col justify-between p-8 md:p-12 lg:p-16">
          <header className="flex justify-between items-start mb-16">
            <div className="panel-tag text-on-surface">Psyche Map</div>
            <div className="panel-tag text-on-surface-variant flex gap-2">
              <span>Vol. 1</span>
              <span>—</span>
              <span>Index</span>
            </div>
          </header>

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="domain-hero-title mb-8 leading-[1.1]">
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
              className="group inline-flex items-center justify-center bg-primary text-surface-bright rounded-lg px-8 py-4 hover:bg-on-primary-container hover:text-primary transition-colors duration-300 w-full sm:w-auto shadow-sm"
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

function DomainsView({ onViewDimensions }: { onViewDimensions: () => void }) {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="mb-4 border-b border-outline-variant/50 pb-6 flex justify-between items-end">
        <div>
          <h1 className="domain-hero-title mb-3 text-on-surface">Map Index</h1>
          <p className="body-text text-on-surface-variant max-w-xl">Explore the six fundamental domains of psychological inquiry.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        <DomainCard
          num="01"
          icon="fingerprint"
          title="Personality"
          onClick={onViewDimensions}
          desc="The study of individual differences in characteristic patterns of thinking, feeling and behaving. Examining traits, dynamics, and the architecture of the self."
        />
        <DomainCard
          num="02"
          icon="psychology"
          title="Cognition"
          desc="Investigating internal mental processes such as problem solving, memory, language, and thought. The architecture of information processing."
        />
        <DomainCard
          num="03"
          icon="moving"
          title="Motivation"
          fullWidth
          desc="The forces that initiate, guide, and maintain goal-oriented behaviors. Understanding the biological, emotional, social, and cognitive forces that activate behavior."
        />
        <DomainCard
          num="04"
          icon="diversity_3"
          title="Relationships"
          desc="The science of human connection. Exploring interpersonal dynamics, attachment styles, social exchange, and the structural bonds between individuals."
        />
        <DomainCard
          num="05"
          icon="mood"
          title="Emotion"
          desc="Complex psychological states involving subjective experience, physiological response, and behavioral or expressive response."
        />
        <DomainCard
          num="06"
          icon="face_retouching_natural"
          title="Self & Identity"
          fullWidth
          desc="The construction of the ego. Examining self-concept, self-esteem, social identity, and the continuous internal narrative of the individual."
        />
      </div>
    </div>
  );
}

function DomainCard({ num, icon, title, desc, fullWidth, onClick }: any) {
  return (
    <button onClick={onClick} className={`text-left interactive-node flex flex-col p-8 group min-h-[220px] ${fullWidth ? 'lg:col-span-2' : ''}`}>
      <div className="flex justify-between items-start w-full opacity-60 group-hover:opacity-100 transition-opacity">
        <span className="panel-tag text-on-surface-variant">Domain {num}</span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">{icon}</span>
      </div>
      <div className="pt-8 mt-auto flex flex-col gap-3">
        <h2 className="node-title !text-3xl text-on-surface group-hover:text-primary transition-colors">{title}</h2>
        <p className="body-text text-on-surface-variant max-w-2xl">{desc}</p>
      </div>
    </button>
  );
}

function DimensionsView() {
  const [inspectorOpen, setInspectorOpen] = useState(false);

  return (
    <div className="flex flex-col h-full relative">
      <header className="mb-12">
        <p className="panel-tag text-outline mb-3">Theory View / Big Five</p>
        <h2 className="domain-hero-title">Personality Dimensions</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr] mb-20">
        <DimensionCard title="Openness" icon="lightbulb" cols="md:col-span-2 lg:col-span-2" desc="Appreciation for art, emotion, adventure, unusual ideas, curiosity, and variety of experience." />
        <DimensionCard title="Conscientiousness" icon="rule" cols="col-span-1" desc="A tendency to be organized and dependable." />

        <button onClick={() => setInspectorOpen(true)} className="text-left interactive-node p-6 flex flex-col group min-h-[160px] border-primary ring-1 ring-primary/20 bg-[#fdfaf9]">
          <div className="w-full flex justify-between items-start mb-4">
            <h3 className="node-title text-primary text-2xl">Extraversion</h3>
            <span className="material-symbols-outlined text-primary">group</span>
          </div>
          <p className="body-text text-primary">Energy, positive emotions, surgency, assertiveness.</p>
        </button>

        <DimensionCard title="Agreeableness" icon="handshake" cols="md:col-span-2 lg:col-span-1" desc="A tendency to be compassionate and cooperative." />
        <DimensionCard title="Neuroticism" icon="storm" cols="md:col-span-2 lg:col-span-1" desc="The tendency to experience unpleasant emotions easily." />
      </div>

      <div className={`fixed inset-0 bg-on-surface/10 backdrop-blur-sm z-[70] transition-opacity duration-300 ${inspectorOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setInspectorOpen(false)} />

      <div className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-surface-bright z-[80] border-l border-outline-variant elevation-soft flex flex-col transform transition-transform duration-300 md:rounded-l-2xl ${inspectorOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full flex justify-between items-center py-4 px-6 border-b border-outline-variant/30">
          <p className="panel-tag text-outline">Hierarchical Trait</p>
          <button className="p-2 rounded-full hover:bg-surface-dim transition-colors text-on-surface-variant flex items-center justify-center w-10 h-10" onClick={() => setInspectorOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-8 py-8 flex-1 overflow-y-auto w-full">
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant/40 pb-6">
            <h2 className="domain-hero-title !text-4xl text-primary">Extraversion</h2>
            <span className="material-symbols-outlined text-primary text-3xl">group</span>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="body-text text-on-surface mb-5 text-[16px]">Extraversion is characterized by breadth of activities (as opposed to depth), surgency from external activity/situations, and energy creation from external means.</p>
              <p className="body-text text-on-surface-variant">The trait is marked by pronounced engagement with the external world. Extraverts enjoy interacting with people, and are often perceived as full of energy. They tend to be enthusiastic, action-oriented individuals.</p>
            </div>

            <div className="bg-surface-dim/50 p-6 rounded-xl border border-outline-variant/30">
              <h4 className="panel-tag text-on-surface mb-5">Lower-Level Facets</h4>
              <ul className="space-y-4">
                {['Friendliness', 'Gregariousness', 'Assertiveness', 'Activity Level'].map(facet => (
                  <li key={facet} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm" />
                    <span className="body-text !text-[15px]">{facet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-5 border-t border-outline-variant/30">
                <button className="panel-tag text-primary hover:text-on-primary-container transition-colors inline-flex items-center gap-2 group">
                  View Sub-Traits <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DimensionCard({ title, icon, desc, cols = '' }: any) {
  return (
    <button className={`text-left interactive-node p-6 flex flex-col group min-h-[160px] ${cols}`}>
      <div className="w-full flex justify-between items-start mb-4">
        <h3 className="node-title group-hover:text-primary transition-colors text-2xl">{title}</h3>
        <span className="material-symbols-outlined text-outline">{icon}</span>
      </div>
      <p className="body-text text-on-surface-variant">{desc}</p>
    </button>
  );
}

function SettingsView() {
  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="mb-10">
        <h1 className="domain-hero-title mb-4 pb-4 border-b border-outline-variant/50 relative">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/60 shadow-sm lg:col-span-2">
          <h2 className="panel-tag text-outline mb-6">Appearance</h2>
          <div className="space-y-6">
            <ToggleRow title="Typography" desc="Select preferred reading font" options={['Serif', 'Sans']} active="Serif" />
            <ToggleRow title="Reading Mode" desc="Adjust contrast and background tone" options={['Paper', 'Ink']} active="Paper" noBorder />
          </div>
        </section>

        <section className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-outline mb-6">Navigation</h2>
          <div className="space-y-6">
            <SwitchRow title="Sequential Flow" desc="Enable next/prev article links" active={true} />
            <SwitchRow title="Auto-Hide Inspector" desc="Dismiss panels on scroll" active={false} noBorder />
          </div>
        </section>

        <section className="bg-surface-bright p-8 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-outline mb-6">Account</h2>
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

function ToggleRow({ title, desc, options, active, noBorder }: any) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <div>
        <p className="text-[15px] text-on-surface font-medium">{title}</p>
        <p className="body-text !text-[14px] text-on-surface-variant mt-1">{desc}</p>
      </div>
      <div className="flex bg-surface-dim rounded-lg p-1 border border-outline-variant/50 shrink-0">
        {options.map((opt: string) => (
          <button
            key={opt}
            className={`px-4 py-2 font-body text-[13px] font-medium rounded-md transition-all ${
              opt === active ? 'bg-surface-bright text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function SwitchRow({ title, desc, active, noBorder }: any) {
  return (
    <div className={`flex items-center justify-between py-4 ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
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

function ActionRow({ title, icon, danger, noBorder }: any) {
  return (
    <button className={`w-full flex items-center justify-between py-4 cursor-pointer group rounded-lg px-2 -mx-2 transition-colors hover:bg-surface-dim ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <p className={`font-body text-[15px] font-medium transition-colors ${danger ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>{title}</p>
      <span className={`material-symbols-outlined text-[20px] transition-colors ${danger ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{icon}</span>
    </button>
  );
}