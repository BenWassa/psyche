import type { DomainMeta } from '@/types';

export const DOMAIN_SEQUENCE: DomainMeta[] = [
  {
    id: 'personality',
    order: '01',
    name: 'Personality & Individual Differences',
    subtitle: 'Hierarchical trait structure',
    summary: 'Who people are: stable traits, character structure, and individual differences.',
    accent: 'text-domain-self',
    structure: '5 traits -> 10 facets',
  },
  {
    id: 'cognition',
    order: '02',
    name: 'Cognition & Judgment',
    subtitle: 'Dual process, catalog, loop',
    summary: 'How people think: biases, heuristics, reasoning errors, judgment, and the cognitive loop.',
    accent: 'text-domain-cognition',
    structure: 'paired duality + catalog + loop',
  },
  {
    id: 'motivation',
    order: '03',
    name: 'Motivation & Behavioral Regulation',
    subtitle: 'Needs and process flow',
    summary: 'Why people act: needs, goals, drive, self-regulation, and behavior change.',
    accent: 'text-domain-motivation',
    structure: '3 needs + process logic',
  },
  {
    id: 'relationships',
    order: '04',
    name: 'Relationships & Attachment',
    subtitle: 'Dimensional field',
    summary: 'How people bond: attachment patterns, relational security, intimacy, and trust.',
    accent: 'text-domain-relationships',
    structure: '2D anxiety / avoidance plane',
  },
  {
    id: 'emotion',
    order: '05',
    name: 'Emotion & Emotion Regulation',
    subtitle: 'Timeline and appraisal',
    summary: 'How people feel: emotion generation, experience, regulation strategies, and affective patterns.',
    accent: 'text-primary',
    structure: 'timeline + branching flow',
  },
  {
    id: 'self',
    order: '06',
    name: 'Self & Identity',
    subtitle: 'Networked beliefs',
    summary: 'How people understand themselves: capability beliefs, self-relationship, identity coherence, and resilience.',
    accent: 'text-domain-self',
    structure: 'sources -> belief -> outcome',
  },
];

export const TRAIT_FACETS = {
  openness: ['Intellect', 'Aesthetic Openness'],
  conscientiousness: ['Industriousness', 'Orderliness'],
  extraversion: ['Enthusiasm', 'Assertiveness'],
  agreeableness: ['Compassion', 'Politeness'],
  neuroticism: ['Withdrawal', 'Volatility'],
} as const;
