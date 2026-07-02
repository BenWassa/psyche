import { useEffect, useState } from 'react';

export const SELF_LOCATION_STORAGE_KEY = 'psyche.bigfive.v1';

const TRAITS = [
  { id: 'openness', label: 'Openness' },
  { id: 'conscientiousness', label: 'Conscientiousness' },
  { id: 'extraversion', label: 'Extraversion' },
  { id: 'agreeableness', label: 'Agreeableness' },
  { id: 'neuroticism', label: 'Neuroticism' },
] as const;

type TraitId = (typeof TRAITS)[number]['id'];
type Scores = Partial<Record<TraitId, number>>;

const MAX = 120;
const HIGH = 78; // ~65% of scale
const LOW = 42; // ~35% of scale

function loadScores(): Scores {
  try {
    const raw = localStorage.getItem(SELF_LOCATION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Scores;
    const clean: Scores = {};
    for (const trait of TRAITS) {
      const value = parsed[trait.id];
      if (typeof value === 'number' && value >= 0 && value <= MAX) clean[trait.id] = Math.round(value);
    }
    return clean;
  } catch {
    return {};
  }
}

function band(value: number): 'low' | 'mid' | 'high' {
  return value <= LOW ? 'low' : value >= HIGH ? 'high' : 'mid';
}

/**
 * Bring-your-own-scores panel. Scores stay in this browser (localStorage) —
 * nothing is collected or sent anywhere. Scale is 0–120 per trait, matching
 * 24-item-per-trait inventories such as the IPIP-NEO-120.
 */
export function SelfLocation({ onInspect }: { onInspect: (key: string) => void }) {
  const [scores, setScores] = useState<Scores>({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const setScore = (trait: TraitId, value: number) => {
    const next = { ...scores, [trait]: value };
    setScores(next);
    localStorage.setItem(SELF_LOCATION_STORAGE_KEY, JSON.stringify(next));
  };

  const clear = () => {
    localStorage.removeItem(SELF_LOCATION_STORAGE_KEY);
    setScores({});
  };

  const pointers: { nodeId: string; text: string }[] = [];
  const n = scores.neuroticism;
  if (n !== undefined && band(n) === 'high') {
    pointers.push({ nodeId: 'emotion-regulation', text: 'High Neuroticism predicts reliance on late, costly regulation strategies — the process model shows the earlier entry points.' });
    pointers.push({ nodeId: 'appraisal', text: 'High Neuroticism produces more frequent threat appraisals — appraisal theory shows what reappraisal can change.' });
  }
  const c = scores.conscientiousness;
  if (c !== undefined && band(c) === 'high') {
    pointers.push({ nodeId: 'goal-setting', text: 'High Conscientiousness is the trait engine of persistence — goal-setting shows the process it powers.' });
  } else if (c !== undefined && band(c) === 'low') {
    pointers.push({ nodeId: 'goal-setting', text: 'Lower Conscientiousness makes goal structure matter more, not less — specificity and feedback substitute for trait pull.' });
  }
  const a = scores.agreeableness;
  if (a !== undefined && band(a) === 'high') {
    pointers.push({ nodeId: 'sc-kindness', text: 'Compassion that flows outward does not always flow inward — self-kindness is the same skill turned around.' });
  }

  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-bright/35 p-5 md:p-6">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 text-left group" aria-expanded={open}>
        <div>
          <p className="panel-tag text-primary mb-2">Optional · Local only</p>
          <h3 className="node-title text-on-surface text-2xl group-hover:text-primary transition-colors leading-tight">Bring your own scores</h3>
          <p className="body-text text-on-surface-variant mt-2 text-[15px]">
            If you have Big Five results (0–120 per trait), place yourself on the map. Stored in this browser only.
          </p>
        </div>
        <span className={`material-symbols-outlined text-outline group-hover:text-primary transition-transform ${open ? 'rotate-90' : ''}`} aria-hidden="true">chevron_right</span>
      </button>

      {open && (
        <div className="mt-6 space-y-5">
          {TRAITS.map(trait => {
            const value = scores[trait.id];
            return (
              <div key={trait.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <label htmlFor={`slider-${trait.id}`} className="mono-label text-[11px] text-on-surface w-44 shrink-0">
                  {trait.label}
                </label>
                <input
                  id={`slider-${trait.id}`}
                  type="range"
                  min={0}
                  max={MAX}
                  step={1}
                  value={value ?? 60}
                  onChange={event => setScore(trait.id, Number(event.target.value))}
                  className="trait-slider flex-1"
                  aria-valuetext={value === undefined ? 'not set' : `${value} of ${MAX}`}
                />
                <span className="mono-label text-[11px] text-on-surface-variant w-20 text-right shrink-0">
                  {value === undefined ? '— / 120' : `${value} / 120`}
                  {value !== undefined && <span className={band(value) !== 'mid' ? 'text-primary' : ''}> {band(value) === 'mid' ? '' : band(value)}</span>}
                </span>
              </div>
            );
          })}

          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="body-text !text-[13px] text-on-surface-variant">
              Scores are descriptions, not verdicts — traits set baselines; skills set ceilings.
            </p>
            <button onClick={clear} className="rounded-full border border-outline-variant px-3 py-1.5 panel-tag text-[10px] text-on-surface-variant hover:border-primary hover:text-on-surface transition-colors shrink-0">
              Clear
            </button>
          </div>

          {pointers.length > 0 && (
            <div className="border-t border-outline-variant/40 pt-5 space-y-2.5">
              <p className="panel-tag text-on-surface">Where your scores point</p>
              {pointers.map(pointer => (
                <button
                  key={pointer.nodeId + pointer.text}
                  onClick={() => onInspect(pointer.nodeId)}
                  className="w-full text-left rounded-xl border border-outline-variant bg-surface-bright/60 px-4 py-3 hover:border-primary transition-colors group/ptr"
                >
                  <span className="body-text !text-[13px] text-on-surface-variant group-hover/ptr:text-on-surface transition-colors">{pointer.text}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
