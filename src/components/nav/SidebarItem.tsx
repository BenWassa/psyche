import React from 'react';

export default function SidebarItem({ order, label, subtitle, active, accent, onClick }: { order: string; label: string; subtitle: string; active: boolean; accent: string; onClick: () => void }) {
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
