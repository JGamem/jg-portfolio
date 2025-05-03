// src/app/components/sections/InteractiveSkillsChart.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
    years: number;
    description?: string;
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
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const categories = Array.from(new Set(skills.map((skill) => skill.category)));

    const filteredSkills = activeCategory
        ? skills.filter((skill) => skill.category === activeCategory)
        : skills;

    const getColorForCategory = (category: string): string => {
        switch (category) {
            case 'Frontend':
                return 'from-blue-500 to-indigo-500';
            case 'Backend':
                return 'from-green-500 to-emerald-500';
            case 'Database':
                return 'from-amber-500 to-orange-500';
            case 'DevOps':
                return 'from-red-500 to-rose-500';
            case 'Mobile':
                return 'from-purple-500 to-violet-500';
            default:
                return 'from-gray-500 to-slate-500';
        }
    };

    return (
        <div className={className}>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
                <motion.button
                    onClick={() => {
                        setActiveCategory(null);
                        setSelectedSkill(null);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === null
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    All
                </motion.button>

                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setSelectedSkill(null);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <div className="space-y-6">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedSkill(skill)}
                                className="cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                                            {skill.years} {skill.years === 1 ? 'year' : 'years'}
                                        </span>
                                    </div>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                    <motion.div
                                        className={`h-2.5 rounded-full bg-gradient-to-r ${getColorForCategory(skill.category)}`}
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${skill.level}%`,
                                            scale: selectedSkill?.name === skill.name ? [1, 1.05, 1] : 1
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.2,
                                            scale: {
                                                duration: 0.5,
                                                repeat: selectedSkill?.name === skill.name ? Infinity : 0,
                                                repeatType: "reverse"
                                            }
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-1">
                    {selectedSkill ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {selectedSkill.name}
                            </h4>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs mr-2">
                                    {selectedSkill.category}
                                </span>
                                <span>{selectedSkill.years} {selectedSkill.years === 1 ? 'year' : 'years'} experience</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {selectedSkill.description || `Advanced knowledge and practical experience with ${selectedSkill.name}, used in various professional projects.`}
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-full flex items-center justify-center"
                        >
                            <p className="text-gray-500 dark:text-gray-400 text-center">
                                Select a skill to see detailed information
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};