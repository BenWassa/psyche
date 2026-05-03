import React from 'react';

export function FacetPill({ label, tone = 'default' }: { label: string; tone?: 'default' | 'primary' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-[11px] mono-label ${tone === 'primary' ? 'border-primary/40 bg-primary-container/20 text-on-surface' : 'border-outline-variant bg-surface-dim/35 text-on-surface-variant'}`}>
      {label}
    </span>
  );
}

export function FacetPills({ facets, compact = false, tone = 'default' }: { facets: readonly string[]; compact?: boolean; tone?: 'default' | 'primary' }) {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {facets.map(facet => (
        <FacetPill key={facet} label={facet} tone={tone} />
      ))}
    </div>
  );
}
