export type ViewMode = 'encyclopedia' | 'domains' | 'theory' | 'settings';

export type DomainId = 'personality' | 'cognition' | 'motivation' | 'relationships' | 'emotion' | 'self';

export type DomainMeta = {
  id: DomainId;
  order: string;
  name: string;
  subtitle: string;
  summary: string;
  accent: string;
  structure: string;
};

export type { InspectorKey } from '@/data/inspectorCopy';
