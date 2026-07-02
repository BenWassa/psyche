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

export type Tier = 'cornerstone' | 'include' | 'revised';

export type EvidenceStatus = 'superseded' | 'revised' | 'contested';

export type Bridge = {
  target: string;
  description: string;
};

export type EvidenceDetail = {
  status: EvidenceStatus;
  year?: string;
  knownFor: string;
  survives?: string;
  shows: string;
  instead: string;
};

export type ContentNode = {
  id: string;
  domain: DomainId;
  theory: string;
  title: string;
  tier: Tier;
  grammar: string;
  summary: string;
  bullets: string[];
  note?: string;
  bridges: Bridge[];
  sources: string[];
  evidence?: EvidenceDetail;
};

export type InspectorKey = string;
