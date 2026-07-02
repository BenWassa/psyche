import { EvidenceCard } from './EvidenceCard';
import { evidenceNodesForDomain } from '@/data/content';
import type { DomainId } from '@/types';

/** Renders every popular-but-revised entry for a domain as evidence cards. */
export function EvidenceStrip({ domain, onInspect }: { domain: DomainId; onInspect: (key: string) => void }) {
  const nodes = evidenceNodesForDomain(domain);
  if (nodes.length === 0) return null;

  return (
    <div className="space-y-4">
      <p className="panel-tag text-on-surface-variant">Popular but revised</p>
      <div className={`grid grid-cols-1 gap-5 ${nodes.length > 1 ? 'lg:grid-cols-2' : ''}`}>
        {nodes.map(node => {
          const evidence = node.evidence;
          if (!evidence) return null;
          return (
            <EvidenceCard
              key={node.id}
              title={node.title}
              year={evidence.year}
              status={evidence.status}
              whatPeopleKnow={evidence.knownFor}
              whatSurvives={evidence.survives}
              whatIsWrong={evidence.shows}
              useInstead={evidence.instead}
              onClick={() => onInspect(node.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
