// src/app/components/sections/Hero.tsx (update existing file)
'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { ThreeJsBackground } from '@/app/components/ui/ThreeJsBackground';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { ArrowDown, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative h-screen flex items-center">
            {/* Background */}
            <ThreeJsBackground
                particleCount={1500}
                particleSize={1.5}
                color="#3b82f6"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20"></div>

            {/* Hero content */}
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
                        >
                            {t('hero.greeting')}
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {t('hero.name')}
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                {t('hero.title')}
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <GradientButton
                                size="lg"
                                icon={<ExternalLink className="w-5 h-5" />}
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {t('hero.cta')}
                            </GradientButton>

                            <GradientButton
                                size="lg"
                                variant="secondary"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {t('hero.contact')}
                            </GradientButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full border-2 border-blue-500 dark:border-blue-400 flex justify-center items-center cursor-pointer"
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <ArrowDown className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};