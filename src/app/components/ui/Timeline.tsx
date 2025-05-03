// src/components/ui/Timeline.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
    return (
        <div className={`relative ${className}`}>
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-500 hidden md:block"></div>

            <div className="space-y-12">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col md:flex-row"
                    >
                        {/* Timeline dot for larger screens */}
                        <div className="absolute left-4 hidden md:flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center z-10">
                                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="md:w-32 md:mr-8 mb-2 md:mb-0 md:text-right md:pl-0 pl-10">
                            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                {item.date}
                            </div>
                        </div>

                        {/* Timeline dot for mobile */}
                        <div className="absolute left-0 top-0 md:hidden">
                            <div className="w-6 h-6 rounded-full border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow pl-10 md:pl-16">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};