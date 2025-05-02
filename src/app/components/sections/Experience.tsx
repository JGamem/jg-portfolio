'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
    const { t } = useTranslation();

    // TypeScript type for roles
    type Role = {
        title: string;
        company: string;
        period: string;
        description: string;
    };

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('experience.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 space-y-12">
                        {t<Role[]>('experience.roles', { returnObjects: true }).map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[41px] w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full"></div>
                                </div>

                                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {role.title}
                                        </h3>
                                        <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {role.period}
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="font-medium">{role.company}</span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};