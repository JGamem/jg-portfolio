// src/app/components/ui/ThemeToggle.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Contrast } from 'lucide-react';
import { useThemeStore } from '@/app/store/theme';
import { useTranslation } from '@/app/lib/i18n';

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

    const getTitle = (): string => {
        if (theme === 'light') return t('theme.dark') || 'Switch to Dark Mode';
        if (theme === 'dark') return t('theme.highContrast') || 'Switch to High Contrast';
        return t('theme.light') || 'Switch to Light Mode';
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(getNextTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 
        high-contrast:bg-black high-contrast:text-white transition-colors duration-200"
            aria-label={getTitle()}
            title={getTitle()}
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                {getIcon()}
            </motion.div>
        </motion.button>
    );
};