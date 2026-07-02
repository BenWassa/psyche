import type { ContentNode, DomainId } from '@/types';
import { CONTENT_NODES } from './content.generated';

export { CONTENT_NODES };

export function getNode(id: string): ContentNode | undefined {
  return CONTENT_NODES[id];
}

export function nodesForDomain(domain: DomainId): ContentNode[] {
  return Object.values(CONTENT_NODES).filter(node => node.domain === domain);
}

/** Popular-but-revised entries for a domain, rendered as evidence cards. */
export function evidenceNodesForDomain(domain: DomainId): ContentNode[] {
  return nodesForDomain(domain).filter(node => node.evidence !== undefined);
}
