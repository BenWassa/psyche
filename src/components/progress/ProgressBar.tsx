/**
 * Thin horizontal coverage bar. Recessed track, terracotta fill.
 * Purely decorative — pair it with a visible text label and pass that
 * label via `label` for the accessible progressbar name.
 */
export function ProgressBar({ pct, label, className = '' }: { pct: number; label: string; className?: string }) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={`h-1 rounded-full bg-surface-dim overflow-hidden ${className}`}
    >
      <div
        className="h-full rounded-full bg-primary/75"
        style={{ width: `${clamped}%`, transition: 'width 0.5s ease' }}
      />
    </div>
  );
}
