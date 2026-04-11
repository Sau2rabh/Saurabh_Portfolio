'use client';

import { useEffect } from 'react';

export default function ConsoleCleaner() {
  useEffect(() => {
    // Unregister any legacy service workers that might be causing 404s
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
          console.log('Legacy Service Worker unregistered');
        }
      });
    }

    // Save original console methods
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalLog = console.log;

    // Filter out specific unwanted warnings
    console.warn = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (
        msg.includes('THREE.Clock') ||
        msg.includes('Multiple instances of Three.js') ||
        msg.includes('This module has been deprecated') ||
        msg.includes('was preloaded using link preload') ||
        msg.includes('updating from') ||
        msg.includes('sw.js') // Suppress sw.js related warnings
      ) {
        return; // Suppress
      }
      originalWarn.apply(console, args);
    };

    // Filter out specific unwanted errors (like sw.js 404)
    console.error = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (msg.includes('sw.js') || msg.includes('404')) {
        // Only suppress if it's the sw.js 404 to avoid hiding real application errors
        if (msg.includes('sw.js')) return;
      }
      originalError.apply(console, args);
    };

    // Filter out specific unwanted logs
    console.log = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (msg.includes('updating from') || msg.includes('Legacy Service Worker unregistered')) {
        return; // Suppress
      }
      originalLog.apply(console, args);
    };

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
      console.log = originalLog;
    };
  }, []);

  return null;
}
