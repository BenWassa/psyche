import React from 'react';

export default function BottomNavItem({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-current={active ? 'page' : undefined}
      aria-label={label}
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-3 px-2 transition-all relative min-h-[60px] flex-1 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${active ? 'text-primary' : 'hover:text-on-surface text-on-surface-variant'}`}
    >
      <span className="material-symbols-outlined mb-0.5 text-lg sm:text-2xl" aria-hidden="true">{icon}</span>
      <span className="panel-tag font-medium text-[9px] sm:text-[10px] tracking-widest uppercase">{label}</span>
    </button>
  );
}
