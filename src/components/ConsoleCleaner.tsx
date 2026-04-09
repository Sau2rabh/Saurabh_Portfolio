'use client';

import { useEffect } from 'react';

export default function ConsoleCleaner() {
  useEffect(() => {
    // Save original console methods
    const originalWarn = console.warn;
    const originalLog = console.log;

    // Filter out specific unwanted warnings
    console.warn = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (
        msg.includes('THREE.Clock') ||
        msg.includes('Multiple instances of Three.js') ||
        msg.includes('This module has been deprecated') ||
        msg.includes('was preloaded using link preload')
      ) {
        return; // Suppress
      }
      originalWarn.apply(console, args);
    };

    // Filter out specific unwanted logs
    console.log = (...args) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (msg.includes('updating from')) {
        return; // Suppress the weird react-three-fiber updating log
      }
      originalLog.apply(console, args);
    };

    return () => {
      // Cleanup not strictly necessary for global patch, but good practice
      console.warn = originalWarn;
      console.log = originalLog;
    };
  }, []);

  return null;
}
