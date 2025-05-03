// src/components/sections/CaseStudy.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Building, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
    title: string;
    client: string;
    duration: string;
    challenge: string;
    approach: string;
    outcome: string;
    technologies: string[];
    imageUrl: string;
    className?: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
    title,
    client,
    duration,
    challenge,
    approach,
    outcome,
    technologies,
    imageUrl,
    className = '',
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ${className}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        {title}
                    </motion.h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Building className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                            <span>{client}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                            <span>{duration}</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-2 text-sm">1</span>
                                Challenge
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 pl-8">
                                {challenge}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-2 text-sm">2</span>
                                Approach
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 pl-8">
                                {approach}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-2 text-sm">3</span>
                                Outcome
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 pl-8">
                                {outcome}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            <span>Read Full Case Study</span>
                            <ArrowRight className="ml-1 w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="relative h-64 lg:h-auto">
                    <Image
                        src={imageUrl}
                        alt={`${title} project screenshot`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 lg:hidden">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};