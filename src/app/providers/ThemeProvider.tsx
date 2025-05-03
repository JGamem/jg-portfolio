// src/app/providers/ThemeProvider.tsx
'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/app/store/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        // Remove all theme classes first
        document.documentElement.classList.remove('light', 'dark', 'high-contrast');

        // Add the current theme class
        document.documentElement.classList.add(theme);

        // Also set a data attribute for additional styling hooks
        document.documentElement.setAttribute('data-theme', theme);

        // Set meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                theme === 'light' ? '#ffffff' : theme === 'dark' ? '#111827' : '#000000'
            );
        }
    }, [theme]);

    return <>{children}</>;
};