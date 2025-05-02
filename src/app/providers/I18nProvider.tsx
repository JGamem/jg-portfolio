'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import i18n from '@/app/lib/i18n';

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        // Extract locale from pathname (/en/... or /es/...)
        const locale = pathname.split('/')[1];

        if (locale && (locale === 'en' || locale === 'es')) {
            i18n.changeLanguage(locale);
        }
    }, [pathname]);

    return <>{children}</>;
};