import { useState } from 'react';
import { InstallPrompt, UpdateNotification, EvidenceCard } from '@/components';
import { useServiceWorker } from '@/hooks';
import type { ViewMode, DomainId, InspectorKey } from '@/types';
import { DOMAIN_SEQUENCE, TRAIT_FACETS } from '@/data/domains';
import INSPECTOR_COPY from '@/data/inspectorCopy';
import { PersonalityTheory, CognitionTheory, MotivationTheory, RelationshipsTheory, EmotionTheory, SelfTheory } from '@/domains';
import { EncyclopediaView, DomainIndexView, TheoryView } from '@/views';
import { TheoryTileHeader } from '@/components/ui';
import { FacetPill, FacetPills } from '@/components/ui';
import { SidebarItem, BottomNavItem } from '@/components/nav';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('encyclopedia');
  useServiceWorker();

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
            <div className="px-6 pt-5 pb-2 mono-label text-[11px] text-on-surface-variant tracking-[0.18em]">Domains</div>
            <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto pb-6">
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

            <main className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 lg:p-12">
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
          <InstallPrompt />
          <UpdateNotification />
        </div>
      )}
    </div>
  );
}

// Nav atoms moved to src/components/nav
// Views moved to src/views

// UI atoms moved to src/components/ui

function SettingsView() {
  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="mb-8 pb-6 border-b border-outline-variant/50">
        <p className="panel-tag text-primary mb-3">Settings</p>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-on-surface">Preferences</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-surface-bright/35 p-6 rounded-2xl border border-outline-variant/60 shadow-sm lg:col-span-2">
          <h2 className="panel-tag text-primary mb-5">Appearance</h2>
          <div className="space-y-5">
            <ToggleRow title="Typography" desc="Select preferred reading font" options={['Serif', 'Sans']} active="Serif" />
            <ToggleRow title="Reading Mode" desc="Adjust contrast and background tone" options={['Paper', 'Ink']} active="Ink" noBorder />
          </div>
        </section>

        <section className="bg-surface-bright/35 p-6 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-5">Navigation</h2>
          <div className="divide-y divide-outline-variant/30">
            <SwitchRow title="Sequential Flow" desc="Enable next/prev article links" active={true} noBorder />
            <SwitchRow title="Auto-Hide Inspector" desc="Dismiss panels on scroll" active={false} noBorder />
          </div>
        </section>

        <section className="bg-surface-bright/35 p-6 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-5">Account</h2>
          <div className="divide-y divide-outline-variant/30">
            <ActionRow title="Manage Subscription" icon="arrow_forward" noBorder />
            <ActionRow title="Export Library" icon="download" noBorder />
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