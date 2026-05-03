import React from 'react';

export default function TheoryTileHeader({ index, title, subtitle, icon, tone = 'default', tier }: { index: string; title: string; subtitle: string; icon: string; tone?: 'default' | 'primary'; tier?: 'cornerstone' | 'include' }) {
  return (
    <div className="w-full flex justify-between items-start gap-6">
      <div className="min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <p className="panel-tag text-primary">{index}</p>
          {tier === 'cornerstone' && (
            <span className="panel-tag text-[9px] px-2 py-0.5 rounded-full border border-primary/40 bg-primary-container/30 text-primary">Cornerstone</span>
          )}
          {tier === 'include' && (
            <span className="panel-tag text-[9px] px-2 py-0.5 rounded-full border border-outline-variant text-on-surface-variant">Include</span>
          )}
        </div>
        <h3 className={`node-title ${tone === 'primary' ? 'text-primary' : 'text-on-surface'} text-2xl group-hover:text-primary transition-colors leading-tight`}>{title}</h3>
        <p className="body-text text-on-surface-variant mt-2 text-[15px]">{subtitle}</p>
      </div>
      <span className={`material-symbols-outlined ${tone === 'primary' ? 'text-primary' : 'text-outline'}`}>{icon}</span>
    </div>
  );
}
