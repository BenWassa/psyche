import React from 'react';

export default function EncyclopediaView({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="bg-transparent text-on-surface min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8">
      <main className="w-full max-w-[1200px] min-h-screen sm:min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row bg-surface-bright rounded-lg sm:rounded-xl md:rounded-[28px] overflow-hidden elevation-soft border border-outline-variant">
        <div
          className="flex-1 border-b md:border-b-0 md:border-r border-outline-variant relative overflow-hidden min-h-[240px] sm:min-h-[300px] md:min-h-full bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(249,248,246,0.08), rgba(240,239,233,0.32)), url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2400&auto=format&fit=crop')" }}
          title="Human figure study"
        />
        
        <div className="flex-1 md:flex-[1.2] flex flex-col justify-between p-4 sm:p-6 md:p-12 lg:p-16">
          <header className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 md:mb-16 gap-3 sm:gap-6">
            <div className="panel-tag text-on-surface text-xs sm:text-sm">Psyche Map</div>
            <div className="panel-tag text-on-surface-variant flex gap-2 text-right text-xs">
              <span>Vol. 1</span>
              <span>—</span>
              <span>Index</span>
            </div>
          </header>

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-light text-on-surface mb-4 sm:mb-6 md:mb-8 leading-[1.15] tracking-tight">
              The Encyclopedia<br className="hidden sm:block" /> of Mind.
            </h1>
            <div className="w-10 sm:w-12 md:w-16 h-[1px] bg-primary mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-full sm:max-w-sm md:max-w-lg leading-relaxed">
              A structured, objective exploration of human cognition, emotion, and behavior. Designed for the analytical mind.
            </p>
          </div>

          <footer className="mt-8 sm:mt-10 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-outline-variant/40 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div className="text-xs sm:text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Establish an ongoing dialogue with the architecture of thought.
            </div>
            <button
              onClick={onEnter}
              className="group inline-flex items-center justify-center bg-primary text-surface rounded-lg px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 hover:bg-primary/90 active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-black/15 min-h-[44px] font-medium text-sm sm:text-base"
            >
              <span className="panel-tag !text-inherit mr-2">Enter Archive</span>
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}
