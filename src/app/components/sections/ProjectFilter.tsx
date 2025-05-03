// src/app/components/sections/EnhancedProjectFilter.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface FilterProps {
    categories: string[];
    onFilterChange: (category: string) => void;
    activeCategory: string;
    animate?: boolean;
}

export const ProjectFilter: React.FC<FilterProps> = ({
    categories,
    onFilterChange,
    activeCategory,
    animate = true,
}) => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    return (
        <motion.div
            className="flex flex-wrap gap-3 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {categories.map((category, index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                    <FilterButton
                        active={category === activeCategory}
                        onClick={() => onFilterChange(category)}
                        onHoverStart={() => setHoveredCategory(category)}
                        onHoverEnd={() => setHoveredCategory(null)}
                        animate={animate}
                        hovered={hoveredCategory === category}
                    >
                        {category}
                    </FilterButton>
                </motion.div>
            ))}
        </motion.div>
    );
};

interface FilterButtonProps {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    animate: boolean;
    hovered: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    children,
    active,
    onClick,
    onHoverStart,
    onHoverEnd,
    animate,
    hovered
}) => {
    return (
        <motion.button
            onClick={onClick}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className={`relative px-6 py-2 rounded-full ${active ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
            whileHover={animate ? { scale: 1.05 } : {}}
            whileTap={animate ? { scale: 0.95 } : {}}
        >
            <AnimatePresence>
                {active && (
                    <motion.span
                        layoutId="filterBackground"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            {/* Hover effect */}
            {!active && hovered && (
                <motion.span
                    className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            )}

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};