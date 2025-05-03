// src/components/sections/ProjectFilter.tsx
'use client';

//import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterProps {
    categories: string[];
    onFilterChange: (category: string) => void;
    activeCategory: string;
}

export const ProjectFilter: React.FC<FilterProps> = ({
    categories,
    onFilterChange,
    activeCategory,
}) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
                <FilterButton
                    key={category}
                    active={category === activeCategory}
                    onClick={() => onFilterChange(category)}
                >
                    {category}
                </FilterButton>
            ))}
        </div>
    );
};

interface FilterButtonProps {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`relative px-6 py-2 rounded-full ${active ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
        >
            <AnimatePresence>
                {active && (
                    <motion.span
                        layoutId="filterBackground"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10">{children}</span>
        </button>
    );
};