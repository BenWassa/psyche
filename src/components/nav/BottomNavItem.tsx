import React from 'react';

export default function BottomNavItem({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center py-3 px-2 transition-all relative min-h-[60px] flex-1 ${active ? '-translate-y-0.5 text-primary' : 'hover:text-primary text-on-surface-variant'}`}>
      <span className="material-symbols-outlined mb-0.5 text-lg sm:text-2xl">{icon}</span>
      <span className="panel-tag font-medium text-[9px] sm:text-[10px] tracking-widest uppercase">{label}</span>
      {active && <span className="absolute bottom-[8px] w-1.5 h-1.5 rounded-full bg-primary" />}
    </button>
  );
}
