import React from 'react';
import type { Tier } from '@/types';

/**
 * Section wrapper for one theory's visual grammar.
 * The header row is the click target for the theory's root node;
 * the children render the grammar itself with individually inspectable parts
 * (kept as siblings, never nested buttons).
 */
export default function TheorySection({
  index,
  nodeId,
  title,
  subtitle,
  tier,
  icon,
  onInspect,
  children,
}: {
  index: string;
  nodeId: string;
  title: string;
  subtitle: string;
  tier?: Tier;
  icon: string;
  onInspect: (key: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-bright/35 p-5 md:p-6">
      <button onClick={() => onInspect(nodeId)} className="w-full text-left group flex justify-between items-start gap-6">
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
          <h3 className="node-title text-on-surface text-2xl group-hover:text-primary transition-colors leading-tight">{title}</h3>
          <p className="body-text text-on-surface-variant mt-2 text-[15px]">{subtitle}</p>
        </div>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" aria-hidden="true">{icon}</span>
      </button>
      {children}
    </section>
  );
}

/** Small inspectable card used inside grammar layouts. */
export function NodeChip({
  nodeId,
  label,
  detail,
  tag,
  onInspect,
  emphasis = false,
  className = '',
}: {
  nodeId: string;
  label: string;
  detail?: string;
  tag?: string;
  onInspect: (key: string) => void;
  emphasis?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={() => onInspect(nodeId)}
      className={`text-left rounded-xl border p-4 transition-colors group/chip ${
        emphasis
          ? 'border-primary/40 bg-primary-container/15 hover:border-primary'
          : 'border-outline-variant bg-surface-bright/80 hover:border-primary'
      } ${className}`}
    >
      {tag && <p className={`panel-tag mb-1.5 ${emphasis ? 'text-primary' : 'text-on-surface-variant'}`}>{tag}</p>}
      <p className="body-text !text-[15px] text-on-surface group-hover/chip:text-primary transition-colors">{label}</p>
      {detail && <p className="body-text !text-[13px] text-on-surface-variant mt-1">{detail}</p>}
    </button>
  );
}

/** Directional connector between grammar stages. */
export function FlowArrow({ direction = 'right', label }: { direction?: 'right' | 'down' | 'both'; label?: string }) {
  const icon = direction === 'down' ? 'arrow_downward' : direction === 'both' ? 'sync_alt' : 'arrow_forward';
  return (
    <div className="flex items-center justify-center gap-1.5 text-outline shrink-0 self-center" aria-hidden="true">
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      {label && <span className="mono-label text-[9px]">{label}</span>}
    </div>
  );
}
