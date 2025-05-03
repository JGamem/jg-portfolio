// src/components/ui/PageTransition.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
    children,
    className = '',
}) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full ${className}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};