// src/app/components/sections/Skills.tsx
'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    // Get soft skills and languages
    const softSkills = t<string[]>('skills.soft', { returnObjects: true });
    const languagesList = t<{ name: string; level: string }[]>('skills.languagesList', { returnObjects: true });

    // Technical skills by category
    const technicalSkills = {
        Frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
        Backend: ['Node.js', 'Express', '.NET', 'Python', 'GraphQL', 'REST APIs'],
        Database: ['SQL', 'MongoDB', 'PostgreSQL', 'MariaDB', 'Redis'],
        DevOps: ['AWS', 'Docker', 'Git/GitHub', 'CI/CD', 'Serverless'],
        Mobile: ['React Native']
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            {t('skills.hardSkills')}
                        </h3>

                        <div className="space-y-8">
                            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                                >
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                viewport={{ once: true }}
                                                whileHover={{ y: -2, scale: 1.05 }}
                                                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 
                                                           text-blue-700 dark:text-blue-300 rounded-full 
                                                           text-sm font-medium"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills and Languages */}
                    <div className="space-y-12">
                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.softSkills')}
                            </h3>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {softSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="flex items-center"
                                        >
                                            <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full mr-3"></div>
                                            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.languages')}
                            </h3>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
                            >
                                <div className="space-y-4">
                                    {languagesList.map((language, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                    {language.name}
                                                </span>
                                                <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                                                    {language.level}
                                                </span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full"
                                                    style={{
                                                        width: language.level.includes('Native') ? '100%' :
                                                            language.level.includes('Advanced') ? '80%' :
                                                                language.level.includes('Basic') ? '30%' : '50%'
                                                    }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: language.level.includes('Native') ? '100%' :
                                                            language.level.includes('Advanced') ? '80%' :
                                                                language.level.includes('Basic') ? '30%' : '50%'
                                                    }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};