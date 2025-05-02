'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
    const { t } = useTranslation();

    // TypeScript type
    type Degree = {
        title: string;
        institution: string;
        period: string;
        status: string;
    };

    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('education.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Formal Education */}
                    <div>
                        <div className="flex items-center mb-8">
                            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {t('education.title')}
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {t<Degree[]>('education.degrees', { returnObjects: true }).map((degree, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md"
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {degree.title}
                                        </h4>
                                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                                            {degree.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center mb-2">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {degree.institution}
                                        </span>
                                    </div>

                                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                                        {degree.status}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="flex items-center mb-8">
                            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {t('education.certifications.title')}
                            </h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md"
                        >
                            <ul className="space-y-4">
                                {t<string[]>('education.certifications.list', { returnObjects: true }).map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center"
                                    >
                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600 dark:text-gray-400">{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};