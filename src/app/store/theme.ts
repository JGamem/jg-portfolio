// src/store/theme.ts (enhance the existing file)
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark' | 'high-contrast';

type ThemeState = {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
    prefersDark: boolean;
    setPrefersDark: (prefersDark: boolean) => void;
    systemTheme: ThemeMode;
    useSystemTheme: boolean;
    setUseSystemTheme: (useSystemTheme: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            setTheme: (theme) => set({ theme }),
            toggleTheme: () =>
                set((state) => {
                    if (state.theme === 'light') return { theme: 'dark' };
                    if (state.theme === 'dark') return { theme: 'high-contrast' };
                    return { theme: 'light' };
                }),
            prefersDark: false,
            setPrefersDark: (prefersDark) => set({ prefersDark }),
            systemTheme: 'light',
            useSystemTheme: false,
            setUseSystemTheme: (useSystemTheme) => set({ useSystemTheme }),
        }),
        {
            name: 'theme-storage',
        }
    )
);