// src/components/layout/ThemeToggle.tsx (enhance the existing file)
'use client';

import React from 'react';
import { Moon, Sun, Contrast } from 'lucide-react';
import { useThemeStore } from '@/app/store/theme';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useThemeStore();
    const { t } = useTranslation();

    const getNextTheme = () => {
        if (theme === 'light') return 'dark';
        if (theme === 'dark') return 'high-contrast';
        return 'light';
    };

    const getIcon = () => {
        if (theme === 'light') return <Sun className="w-5 h-5" />;
        if (theme === 'dark') return <Moon className="w-5 h-5" />;
        return <Contrast className="w-5 h-5" />;
    };

    const getTitle = () => {
        if (theme === 'light') return t<string>('theme.dark');
        if (theme === 'dark') return t<string>('theme.highContrast');
        return t<string>('theme.light');
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(getNextTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200 high-contrast:bg-black high-contrast:text-white"
            aria-label={getTitle()}
            title={getTitle()}
        >
            {getIcon()}
        </motion.button>
    );
};