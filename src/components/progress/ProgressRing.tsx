/**
 * Circular coverage indicator. Terracotta arc on a faint structural track —
 * progress is an active-state signal, so it takes the primary accent.
 */
export function ProgressRing({
  pct,
  size = 56,
  stroke = 4,
  showLabel = true,
  className = '',
}: {
  pct: number;
  size?: number;
  stroke?: number;
  showLabel?: boolean;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, pct));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <span className={`relative inline-flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-outline-variant)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      {showLabel && (
        <span className="absolute inset-0 flex items-center justify-center mono-label text-on-surface" style={{ fontSize: Math.max(9, Math.round(size / 5.2)) }}>
          {clamped}%
        </span>
      )}
    </span>
  );
}
