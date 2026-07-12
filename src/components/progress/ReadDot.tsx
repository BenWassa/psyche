import { useIsRead } from '@/hooks/useProgress';

/**
 * Small terracotta dot shown once a node has been read (inspector opened).
 * Renders nothing for unread nodes — absence is the quiet default.
 */
export function ReadDot({ nodeId, className = '' }: { nodeId: string; className?: string }) {
  const read = useIsRead(nodeId);
  if (!read) return null;
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0 ${className}`} title="Read">
      <span className="sr-only">Read</span>
    </span>
  );
}
