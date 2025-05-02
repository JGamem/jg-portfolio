'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative h-screen flex items-center">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-blue-900/30 dark:to-indigo-900/30"></div>

            {/* Hero content */}
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {t('hero.greeting')}
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('hero.name')}
                        </h1>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                            {t('hero.title')}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                {t('hero.cta')}
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                {t('hero.contact')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};