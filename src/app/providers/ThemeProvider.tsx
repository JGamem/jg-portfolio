'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/app/store/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={theme}>
            {children}
        </div>
    );
};