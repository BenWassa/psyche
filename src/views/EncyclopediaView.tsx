import React from 'react';

export default function EncyclopediaView({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center p-3 sm:p-6 md:p-10">
      <main className="w-full max-w-[1100px] flex flex-col md:flex-row bg-surface-bright rounded-2xl md:rounded-[28px] overflow-hidden elevation-soft border border-outline-variant" style={{ minHeight: 'min(700px, 92svh)' }}>

        {/* Image panel — narrower than content, not equal partners */}
        <div
          className="md:w-[38%] border-b md:border-b-0 md:border-r border-outline-variant relative overflow-hidden"
          style={{
            minHeight: 'clamp(200px, 30vw, 360px)',
            backgroundImage: "url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2400&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label="Human figure study"
        >
          {/* Subtle warm veil — lets image breathe without competing */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(249,248,246,0.04) 0%, rgba(240,239,233,0.22) 100%)' }} />
        </div>

        {/* Content panel */}
        <div className="flex-1 flex flex-col p-6 sm:p-8 md:p-12 lg:p-16">

          {/* Masthead — tight, metadata register */}
          <header className="flex items-baseline justify-between mb-12 md:mb-16">
            <span className="panel-tag text-on-surface tracking-widest">Psyche Map</span>
            <span className="panel-tag text-on-surface-variant">Vol. 1 · Index</span>
          </header>

          {/* Core identity — generous space around title, divider earns its position */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="font-display font-light text-on-surface leading-[1.1] tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              The Encyclopedia<br /> of Mind.
            </h1>

            {/* Divider: positioned directly under title, acts as period-pause before the body */}
            <div className="w-14 h-px bg-primary mb-8" />

            <p className="font-body text-on-surface-variant leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', maxWidth: '42ch' }}>
              A structured, evidence-based exploration of human cognition, emotion, and behavior — rendered in the visual grammar each theory actually requires.
            </p>
          </div>

          {/* Footer — generous top gap creates deliberate breathing room before action */}
          <footer className="mt-14 md:mt-20 pt-6 border-t border-outline-variant/40">
            <button
              onClick={onEnter}
              className="group inline-flex items-center gap-3 bg-primary text-surface rounded-xl px-7 py-3.5 hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm min-h-[48px]"
            >
              <span className="panel-tag !text-inherit">Enter Archive</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">arrow_forward</span>
            </button>
          </footer>

        </div>
      </main>
    </div>
  );
}
