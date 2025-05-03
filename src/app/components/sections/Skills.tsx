// src/app/components/sections/EnhancedSkills.tsx
'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { SkillsChart } from './SkillsChart';

// Define types for better typing
interface Language {
    name: string;
    level: string;
}

interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
    years: number;
    description?: string;
}

export const Skills: React.FC = () => {
    const { t } = useTranslation();



    // Type-safe way to access translation arrays
    const softSkills = t<string[]>('skills.soft', { returnObjects: true });
    const languagesList = t<Language[]>('skills.languagesList', { returnObjects: true });

    // Technical skills with additional metadata
    const technicalSkills: Skill[] = [
        { name: 'JavaScript', level: 95, category: 'Frontend', years: 18, description: 'Expert-level JavaScript development with extensive experience in modern ES6+ features, functional programming, and asynchronous patterns.' },
        { name: 'TypeScript', level: 90, category: 'Frontend', years: 6, description: 'Advanced TypeScript development with focus on strict typing, generics, and type inference for robust application architecture.' },
        { name: 'React', level: 92, category: 'Frontend', years: 8, description: 'Extensive experience with React, including hooks, context API, custom hooks, and performance optimization techniques.' },
        { name: 'Next.js', level: 88, category: 'Frontend', years: 5, description: 'Expert in Next.js with server and client components, file-based routing, and advanced optimization strategies.' },
        { name: 'HTML/CSS', level: 95, category: 'Frontend', years: 20, description: 'Comprehensive knowledge of semantic HTML and CSS, including modern flexbox, grid layouts, and CSS animations.' },
        { name: 'Tailwind CSS', level: 88, category: 'Frontend', years: 4, description: 'Proficient in utility-first CSS frameworks with a focus on responsive design and component-based styling.' },
        { name: 'Node.js', level: 85, category: 'Backend', years: 10, description: 'Extensive experience building scalable backend services with Node.js, including REST APIs and microservices.' },
        { name: 'Express', level: 88, category: 'Backend', years: 10, description: 'Advanced implementation of Express.js backends with middleware, authentication, and security best practices.' },
        { name: '.NET', level: 80, category: 'Backend', years: 7, description: 'Solid experience with .NET Framework and C# for enterprise application development.' },
        { name: 'Python', level: 75, category: 'Backend', years: 5, description: 'Proficient in Python development for data processing, API integrations, and automation scripts.' },
        { name: 'SQL', level: 90, category: 'Database', years: 15, description: 'Expert in SQL database design, optimization, and complex query construction across multiple database systems.' },
        { name: 'MongoDB', level: 85, category: 'Database', years: 8, description: 'Extensive experience with document databases, aggregation pipelines, and data modeling.' },
        { name: 'PostgreSQL', level: 82, category: 'Database', years: 7, description: 'Advanced knowledge of relational database design, indexing strategies, and query optimization.' },
        { name: 'AWS', level: 80, category: 'DevOps', years: 6, description: 'Experienced with core AWS services including Lambda, EC2, S3, DynamoDB, and API Gateway.' },
        { name: 'Docker', level: 78, category: 'DevOps', years: 5, description: 'Proficient in containerization, Docker Compose, and multi-stage builds for efficient deployments.' },
        { name: 'Git/GitHub', level: 92, category: 'DevOps', years: 12, description: 'Expert in version control strategies, branching models, and collaborative development workflows.' },
        { name: 'React Native', level: 75, category: 'Mobile', years: 4, description: 'Solid experience building cross-platform mobile applications with React Native and native modules.' },
        { name: 'GraphQL', level: 78, category: 'Backend', years: 5, description: 'Advanced implementation of GraphQL APIs with Apollo Server and client integrations.' },
    ];

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

                        <SkillsChart skills={technicalSkills} />
                    </div>

                    {/* Soft Skills and Languages */}
                    <div className="space-y-12">
                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.softSkills')}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {softSkills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                                    >
                                        <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full mr-3 transition-all duration-300 group-hover:h-10"></div>
                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.languages')}
                            </h3>

                            <div className="space-y-6">
                                {languagesList.map((language, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: '100%' }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                                                {language.name}
                                            </span>
                                            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                                                {language.level}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 h-3 rounded-full relative"
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
                                            >
                                                <span className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-400"></span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};