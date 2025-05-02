'use client';

import { useTranslation as useReactI18nTranslation } from 'react-i18next';
import i18n from './i18n';

export const useTranslation = () => {
    const { t } = useReactI18nTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return {
        t,
        currentLanguage: i18n.language,
        changeLanguage,
    };
};