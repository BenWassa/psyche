import { useServiceWorker } from '@/hooks';

export function UpdateNotification() {
  const { isUpdateAvailable, updateServiceWorker } = useServiceWorker();

  if (!isUpdateAvailable) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface-bright border-t border-outline-variant p-4 shadow-lg animate-in slide-in-from-bottom-2 z-50">
      <div className="max-w-md mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display text-sm font-semibold text-on-surface">
            Update Available
          </h3>
          <p className="text-xs text-on-surface-variant mt-1">
            A new version is ready to install
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={updateServiceWorker}
            className="px-3 py-2 text-xs font-mono bg-primary text-surface rounded font-semibold hover:opacity-90 transition-opacity"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
