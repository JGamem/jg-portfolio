// src/components/sections/SkillsChart.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
}

interface SkillsChartProps {
    skills: Skill[];
    className?: string;
}

export const SkillsChart: React.FC<SkillsChartProps> = ({
    skills,
    className = '',
}) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(skills.map((skill) => skill.category)));

    const filteredSkills = activeCategory
        ? skills.filter((skill) => skill.category === activeCategory)
        : skills;

    return (
        <div className={className}>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === null
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                >
                    All
                </button>

                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="space-y-6">
                {filteredSkills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                {skill.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                {skill.level}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                                className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};