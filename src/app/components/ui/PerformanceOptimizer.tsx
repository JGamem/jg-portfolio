// src/app/components/ui/PerformanceOptimizer.tsx
'use client';

import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
    useEffect(() => {
        // Defer non-critical resources
        const deferLoadingOfNonCriticalResources = () => {
            setTimeout(() => {
                // Load any deferred scripts or styles here
            }, 2000);
        };

        // Register performance observer
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    console.log(`[Performance] ${entry.name}: ${entry.startTime.toFixed(0)}ms`);
                });
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] });
        }

        if (document.readyState === 'complete') {
            deferLoadingOfNonCriticalResources();
        } else {
            window.addEventListener('load', deferLoadingOfNonCriticalResources);
        }

        return () => {
            window.removeEventListener('load', deferLoadingOfNonCriticalResources);
        };
    }, []);

    return null; // This component doesn't render anything
};