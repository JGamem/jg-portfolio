import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
                    {/* Hard Skills */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            {t('skills.hardSkills')}
                        </h3>

                        <motion.ul
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {t('skills.hard', { returnObjects: true }).map((skill, index) => (
                                <motion.li
                                    key={index}
                                    variants={item}
                                    className="flex items-start"
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Soft Skills and Languages */}
                    <div className="space-y-12">
                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.softSkills')}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {t('skills.soft', { returnObjects: true }).map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                {t('skills.languages')}
                            </h3>

                            <div className="space-y-4">
                                {t('skills.languagesList', { returnObjects: true }).map((language, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: '100%' }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {language.name}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                {language.level}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                                                style={{
                                                    width: language.level.includes('Native') ? '100%' :
                                                        language.level.includes('Advanced') ? '80%' :
                                                            language.level.includes('Basic') ? '30%' : '50%'
                                                }}
                                            ></div>
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