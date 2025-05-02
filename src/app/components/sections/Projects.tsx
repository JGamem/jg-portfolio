'use client';

import React, { useState } from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [visibleProjects, setVisibleProjects] = useState(3);

    // TypeScript type
    type Project = {
        title: string;
        description: string;
        technologies: string[];
    };

    const projects = t<Project[]>('projects.items', { returnObjects: true });

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between">

                                    href="#"
                                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                    onClick={(e) => e.preventDefault()}
                  >
                                    <Github className="w-4 h-4 mr-1" />
                                    <span>Code</span>
                                </a>

                                href="#"
                                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                onClick={(e) => e.preventDefault()}
                  >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                <span>Demo</span>
                            </a>
                        </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {
        visibleProjects < projects.length && (
            <div className="text-center mt-12">
                <button
                    onClick={showMoreProjects}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                    {t('projects.viewAll')}
                </button>
            </div>
        )
    }
      </div >
    </section >
  );
};