// src/app/components/ui/ScrollButton.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface ScrollButtonProps {
    targetId?: string;
    direction?: 'up' | 'down';
    className?: string;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
    targetId,
    direction = 'up',
    className = '',
}) => {
    const handleClick = () => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            if (direction === 'up') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className={`w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg ${className}`}
            aria-label={direction === 'up' ? 'Scroll to top' : 'Scroll to bottom'}
        >
            <ChevronUp
                className={`w-6 h-6 ${direction === 'down' ? 'transform rotate-180' : ''}`}
            />
        </motion.button>
    );
};