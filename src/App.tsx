import { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useServiceWorker();

  const [selectedDomain, setSelectedDomain] = useState<DomainId>('personality');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  // Apply theme to DOM
  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const openDomain = (domain: DomainId) => {
    setSelectedDomain(domain);
    setCurrentView('theory');
  };

  return (
    <div className="min-h-screen text-on-surface selection:bg-primary/30 selection:text-on-surface relative">
      <div id="a11y-live" aria-live="polite" className="sr-only" />
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
                <button type="button" className="text-on-surface hover:opacity-80 transition-opacity p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded" onClick={() => setCurrentView('domains')} aria-label="Go to domains">
                  <span className="material-symbols-outlined" aria-hidden="true">menu</span>
                </button>
                <span className="font-display text-lg font-medium tracking-widest text-on-surface whitespace-nowrap truncate uppercase">
                  {currentView === 'settings' ? 'Settings' : currentView === 'theory' ? DOMAIN_SEQUENCE.find(domain => domain.id === selectedDomain)?.name ?? 'Psyche Map' : 'Psyche Map'}
                </span>
              </div>
              <button type="button" className="text-on-surface hover:bg-surface-dim transition-colors p-2 rounded-lg flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" onClick={() => setCurrentView('settings')} aria-label="Open settings">
                <span className="material-symbols-outlined" aria-hidden="true">settings</span>
              </button>
            </header>

            <main className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 lg:p-12">
              <div className={`${currentView === 'settings' ? 'max-w-4xl' : 'max-w-6xl'} mx-auto h-full`}>
                {currentView === 'domains' && <DomainIndexView onOpenDomain={openDomain} selectedDomain={selectedDomain} />}
                {currentView === 'theory' && <TheoryView domain={selectedDomain} onBack={() => setCurrentView('domains')} onOpenDomain={openDomain} />}
                {currentView === 'settings' && <SettingsView theme={theme} onThemeChange={toggleTheme} />}
              </div>
            </main>
          </div>

          <nav aria-label="Main navigation" className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 bg-surface/85 backdrop-blur-xl border-t border-outline-variant elevation-soft" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)', minHeight: '4rem' }}>
            <BottomNavItem icon="auto_stories" label="About" active={false} onClick={() => setCurrentView('encyclopedia')} />
            <BottomNavItem icon="map" label="Domains" active={currentView === 'domains'} onClick={() => setCurrentView('domains')} />
            <BottomNavItem icon="schema" label="Theory" active={currentView === 'theory'} onClick={() => { if (currentView !== 'theory') openDomain(selectedDomain); }} />
            <BottomNavItem icon="settings" label="Settings" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
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

function SettingsView({ theme, onThemeChange }: { theme: 'light' | 'dark'; onThemeChange: (t: 'light' | 'dark') => void }) {
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
            <ToggleRow title="Dark vs Light Mode" desc="Adjust contrast and background tone" options={['Light', 'Dark']} icons={['light_mode', 'dark_mode']} active={theme === 'light' ? 'Light' : 'Dark'} onSelect={(opt) => onThemeChange(opt === 'Light' ? 'light' : 'dark')} noBorder />
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

function ToggleRow({ title, desc, options, icons, active, onSelect, noBorder }: { title: string; desc: string; options: string[]; icons?: string[]; active: string; onSelect?: (opt: string) => void; noBorder?: boolean }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 py-5 sm:py-6 ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <div className="flex-1">
        <p className="text-[15px] text-on-surface font-medium leading-tight">{title}</p>
        <p className="body-text !text-[14px] text-on-surface-variant mt-2">{desc}</p>
      </div>
      <div className="flex w-full sm:w-auto bg-surface-dim rounded-lg p-1.5 border border-outline-variant/50 shrink-0 sm:min-w-max gap-1.5 justify-between sm:justify-normal">
        {options.map((opt, idx) => (
          <button
            key={opt}
            type="button"
            aria-pressed={opt === active}
            aria-label={`${title}: ${opt}`}
            onClick={() => onSelect?.(opt)}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-md transition-all flex-1 sm:flex-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary ${opt === active ? 'bg-surface-bright text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {icons && icons[idx] && <span className="material-symbols-outlined text-[20px]">{icons[idx]}</span>}
            {!icons && <span className="mono-label text-[12px] font-medium">{opt}</span>}
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
      <button
        role="switch"
        aria-checked={active}
        className={`w-12 h-6 rounded-full relative transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? 'bg-primary' : 'bg-outline-variant'}`}
      >
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-surface-bright shadow-sm transition-all duration-300 ease-in-out ${active ? 'left-7' : 'left-1'}`} aria-hidden="true" />
      </button>
    </div>
  );
}

function ActionRow({ title, icon, danger, noBorder }: { title: string; icon: string; danger?: boolean; noBorder?: boolean }) {
  return (
    <button type="button" className={`w-full flex items-center justify-between py-4 cursor-pointer group rounded-lg px-2 -mx-2 transition-colors hover:bg-surface-dim ${noBorder ? '' : 'border-b border-outline-variant/30'}`}>
      <p className={`font-body text-[15px] font-medium transition-colors ${danger ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>{title}</p>
      <span className={`material-symbols-outlined text-[20px] transition-colors ${danger ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>{icon}</span>
    </button>
  );
}

