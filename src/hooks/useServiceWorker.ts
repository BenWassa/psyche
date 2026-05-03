import { useEffect, useState } from 'react';

export interface UseServiceWorkerReturn {
  isReady: boolean;
  isUpdateAvailable: boolean;
  updateServiceWorker: () => void;
}

export function useServiceWorker(): UseServiceWorkerReturn {
  const [isReady, setIsReady] = useState(false);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    const handleSWInstalled = () => {
      setIsReady(true);
    };

    const handleSWControlling = () => {
      setIsReady(true);
    };

    const handleSWWaitingRegistration = () => {
      setIsUpdateAvailable(true);
    };

    const registration = navigator.serviceWorker.ready;

    registration
      .then(() => {
        setIsReady(true);
        
        if (navigator.serviceWorker.controller) {
          handleSWControlling();
        }
      })
      .catch(() => {
        // SW registration failed
      });

    navigator.serviceWorker.addEventListener('installed', handleSWInstalled);
    navigator.serviceWorker.addEventListener('controllerchange', handleSWControlling);

    // Listen for a new service worker waiting
    let registration_ref: ServiceWorkerRegistration | null = null;

    navigator.serviceWorker.ready.then((registration) => {
      registration_ref = registration;
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              handleSWWaitingRegistration();
            }
          });
        }
      });

      // Check for updates periodically
      setInterval(() => {
        registration.update();
      }, 60000); // Check every minute
    });

    return () => {
      if (registration_ref) {
        registration_ref.removeEventListener('updatefound', () => {});
      }
      navigator.serviceWorker.removeEventListener('installed', handleSWInstalled);
      navigator.serviceWorker.removeEventListener('controllerchange', handleSWControlling);
    };
  }, []);

  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  return {
    isReady,
    isUpdateAvailable,
    updateServiceWorker,
  };
}
