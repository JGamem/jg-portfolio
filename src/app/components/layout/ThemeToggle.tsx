'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/app/store/theme';
import { useTranslation } from '@/app/lib/i18n';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useThemeStore();
    const { t } = useTranslation();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200"
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
};