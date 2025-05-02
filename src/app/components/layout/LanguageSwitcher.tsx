'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const { currentLanguage, changeLanguage, t } = useTranslation();

    const toggleLanguage = () => {
        changeLanguage(currentLanguage === 'en' ? 'es' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200 flex items-center space-x-1"
            aria-label={t(`language.${currentLanguage === 'en' ? 'es' : 'en'}`)}
            title={t(`language.${currentLanguage === 'en' ? 'es' : 'en'}`)}
        >
            <Globe className="w-5 h-5" />
            <span className="text-sm">{currentLanguage === 'en' ? 'ES' : 'EN'}</span>
        </button>
    );
};