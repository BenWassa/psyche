import { useState } from 'react';
import { InstallPrompt, UpdateNotification } from '@/components';
import { useServiceWorker } from '@/hooks';
import type { ViewMode, DomainId } from '@/types';
import { DOMAIN_SEQUENCE } from '@/data/domains';
import { getNode } from '@/data/content';
import { SELF_LOCATION_STORAGE_KEY } from '@/components/SelfLocation';
import { EncyclopediaView, DomainIndexView, TheoryView } from '@/views';
import { SidebarItem, BottomNavItem } from '@/components/nav';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('encyclopedia');
  const [selectedDomain, setSelectedDomain] = useState<DomainId>('personality');
  const [inspectorKey, setInspectorKey] = useState<string | null>(null);
  useServiceWorker();

  const openDomain = (domain: DomainId) => {
    setSelectedDomain(domain);
    setInspectorKey(null);
    setCurrentView('theory');
  };

  // Bridge navigation: jump to any node's domain and open its inspector.
  const navigateToNode = (nodeId: string) => {
    const node = getNode(nodeId);
    if (!node) return;
    setSelectedDomain(node.domain);
    setCurrentView('theory');
    setInspectorKey(nodeId);
  };

  return (
    <div className="min-h-screen text-on-surface selection:bg-primary/30 selection:text-on-surface relative">
      <div id="a11y-live" aria-live="polite" className="sr-only" />
      {currentView === 'encyclopedia' && <EncyclopediaView onEnter={() => setCurrentView('domains')} />}

      {currentView !== 'encyclopedia' && (
        <div className="h-[100dvh] w-full flex overflow-hidden bg-transparent">
          <aside className="hidden md:flex h-full w-[288px] border-r border-outline-variant bg-surface/70 backdrop-blur-xl flex-col z-[60] shrink-0">
            <div className="px-6 py-8 border-b border-outline-variant/70">
              <h1 className="text-xl font-medium text-on-surface tracking-[0.22em] font-display uppercase">Psyche Map</h1>
              <p className="panel-tag text-on-surface-variant mt-3">Editorial atlas</p>
            </div>
            <div className="px-6 pt-5 pb-2 mono-label text-[11px] text-on-surface-variant tracking-[0.18em]">Domains · in sequence</div>
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

            <main className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 lg:p-12 pb-nav-safe">
              <div className={`${currentView === 'settings' ? 'max-w-4xl' : 'max-w-6xl'} mx-auto`}>
                {currentView === 'domains' && <DomainIndexView onOpenDomain={openDomain} selectedDomain={selectedDomain} />}
                {currentView === 'theory' && (
                  <TheoryView
                    domain={selectedDomain}
                    inspectorKey={inspectorKey}
                    onInspect={setInspectorKey}
                    onCloseInspector={() => setInspectorKey(null)}
                    onNavigateNode={navigateToNode}
                    onBack={() => setCurrentView('domains')}
                    onOpenDomain={openDomain}
                  />
                )}
                {currentView === 'settings' && <SettingsView />}
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

function SettingsView() {
  const [cleared, setCleared] = useState(false);
  const hasScores = typeof window !== 'undefined' && localStorage.getItem(SELF_LOCATION_STORAGE_KEY) !== null;

  const clearScores = () => {
    localStorage.removeItem(SELF_LOCATION_STORAGE_KEY);
    setCleared(true);
  };

  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="mb-8 pb-6 border-b border-outline-variant/50">
        <p className="panel-tag text-primary mb-3">Settings</p>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-on-surface">Preferences</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-surface-bright/35 p-6 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-4">Your data</h2>
          <p className="body-text !text-[14px] text-on-surface-variant mb-5">
            Psyche Map stores nothing on a server. If you entered Big Five scores on the Personality page, they live only in this browser.
          </p>
          <button
            type="button"
            onClick={clearScores}
            disabled={cleared || !hasScores}
            className="rounded-full border border-outline-variant bg-surface-bright/40 px-4 py-2 panel-tag text-xs text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors disabled:opacity-50 disabled:hover:border-outline-variant"
          >
            {cleared ? 'Scores cleared' : hasScores ? 'Clear saved trait scores' : 'No saved scores'}
          </button>
        </section>

        <section className="bg-surface-bright/35 p-6 rounded-2xl border border-outline-variant/60 shadow-sm">
          <h2 className="panel-tag text-primary mb-4">About</h2>
          <p className="body-text !text-[14px] text-on-surface-variant">
            A psychology literacy encyclopedia — six domains, deliberately thin. Theories are rendered in their honest structural form, evidence quality is always visible, and the recommended reading order runs Personality → Cognition → Motivation → Relationships → Emotion → Self &amp; Identity. It is a map, not a substitute for the territory.
          </p>
        </section>
      </div>
    </div>
  );
}
