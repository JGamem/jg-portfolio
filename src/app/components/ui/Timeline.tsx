// src/app/components/ui/Timeline.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export interface TimelineItem {
    id: string;
    title: string;
    company: string;
    location?: string;
    period: string;
    description: string;
    responsibilities?: string[];
    technologies?: string[];
    achievements?: string[];
    link?: string;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-400 hidden md:block"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col md:flex-row"
                    >
                        {/* Timeline dot for larger screens */}
                        <div className="absolute left-4 hidden md:flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center z-10">
                                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="md:w-32 md:mr-8 mb-2 md:mb-0 md:text-right md:pl-0 pl-10">
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                {item.period}
                            </div>
                        </div>

                        {/* Timeline dot for mobile */}
                        <div className="absolute left-0 top-0 md:hidden">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <motion.div
                            className={`flex-grow pl-10 md:pl-16 ${expandedId === item.id ? 'bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md' : 'p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md'}`}
                            layout
                            transition={{ duration: 0.3, type: 'spring' }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <button
                                    onClick={() => toggleExpand(item.id)}
                                    className="mt-2 md:mt-0 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium inline-flex items-center"
                                >
                                    {expandedId === item.id ? (
                                        <>
                                            <span>Show less</span>
                                            <ChevronUp className="ml-1 w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Show more</span>
                                            <ChevronDown className="ml-1 w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="font-medium">{item.company}</span>
                                {item.location && (
                                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                                        ({item.location})
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                {item.description}
                            </p>

                            <AnimatePresence>
                                {expandedId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        {item.responsibilities && item.responsibilities.length > 0 && (
                                            <div className="mt-4">
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                                    {item.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx}>{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {item.achievements && item.achievements.length > 0 && (
                                            <div className="mt-4">
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Key Achievements
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                                    {item.achievements.map((achievement, idx) => (
                                                        <li key={idx}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {item.technologies && item.technologies.length > 0 && (
                                            <div className="mt-4">
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {item.link && (
                                            <div className="mt-6">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
                                                >
                                                    <span>View Company</span>
                                                    <ExternalLink className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};