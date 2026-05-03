import React from 'react';

export function FacetPill({ label, tone = 'default' }: { label: string; tone?: 'default' | 'primary' }) {
  return (
    <span className={`rounded-full border px-3 py-2 text-[12px] mono-label text-center ${tone === 'primary' ? 'border-primary/40 bg-primary-container/20 text-on-surface' : 'border-outline-variant bg-surface-dim/35 text-on-surface-variant'}`}>
      {label}
    </span>
  );
}

export function FacetPills({ facets, compact = false }: { facets: readonly string[]; compact?: boolean }) {
  return (
    <div className={`grid ${compact ? 'grid-cols-1 gap-2 mt-5' : 'grid-cols-2 gap-3 mt-5'}`}>
      {facets.map(facet => (
        <FacetPill key={facet} label={facet} />
      ))}
    </div>
  );
}
