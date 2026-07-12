import { useSyncExternalStore } from 'react';
import { subscribeProgress, getProgressSnapshot, getEmptyProgress, type ProgressState } from '@/lib/progress';

/**
 * Live view of the local reading-progress store. Every component using this
 * hook re-renders when a node is marked read, a bridge is crossed, or the
 * store is cleared — including writes from other tabs.
 */
export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribeProgress, getProgressSnapshot, getEmptyProgress);
}

/** Whether a single node has been read. */
export function useIsRead(nodeId: string): boolean {
  return useProgress().read[nodeId] !== undefined;
}
