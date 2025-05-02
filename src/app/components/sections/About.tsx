import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

export const About: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        { label: t('about.yearsOfExperience'), value: '4+' },
        { label: t('about.completedProjects'), value: '20+' },
        { label: t('about.technologies'), value: '15+' },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('about.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t('about.description')}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                                >
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Frontend
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                React, TypeScript, Next.js, HTML5, CSS3, UnoCSS, Framer Motion
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Backend
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Node.js, Express, Python, C#, .NET, PHP, Laravel, Symfony
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Databases
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                SQL, MongoDB, MariaDB, PostgreSQL
                            </p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3335 12.0002C21.3335 17.1562 17.1562 21.3335 12.0002 21.3335C6.84416 21.3335 2.66687 17.1562 2.66687 12.0002C2.66687 6.84416 6.84416 2.66687 12.0002 2.66687C17.1562 2.66687 21.3335 6.84416 21.3335 12.0002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.0002 12.0002C16.0002 14.2095 14.2095 16.0002 12.0002 16.0002C9.79094 16.0002 8.00021 14.2095 8.00021 12.0002C8.00021 9.79094 9.79094 8.00021 12.0002 8.00021C14.2095 8.00021 16.0002 9.79094 16.0002 12.0002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                AWS
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Lambda, S3, API Gateway, EC2, RDS, DynamoDB
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};