// src/app/components/ui/PortfolioFilter.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioFilterProps {
    categories: string[];
    activeCategory: string;
    onFilterChange: (category: string) => void;
}

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
    categories,
    activeCategory,
    onFilterChange
}) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
                <motion.button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
            ${activeCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};