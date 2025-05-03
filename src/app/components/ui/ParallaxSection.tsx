// src/app/components/ui/EnhancedParallaxSection.tsx
'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, MotionValue, useScroll, useTransform} from 'framer-motion';

interface EnhancedParallaxSectionProps {
    children: ReactNode;
    depth?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    easing?: [number, number, number, number];
    targetScale?: number;
    targetOpacity?: number;
    offset?: [string, string];
}

export const EnhancedParallaxSection: React.FC<EnhancedParallaxSectionProps> = ({
    children,
    depth = 0.5,
    direction = 'up',
    className = '',
    easing = [0.22, 1, 0.36, 1],
    targetScale = 1,
    targetOpacity = 1
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // En lugar de tratar de arreglar el tipo, simplemente declaramos el `useScroll` sin pasar el offset
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    // Create transform values for different properties
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        direction === 'up' ? ['0%', `-${100 * depth}%`] :
            direction === 'down' ? ['0%', `${100 * depth}%`] :
                ['0%', '0%']
    );

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === 'left' ? ['0%', `-${100 * depth}%`] :
            direction === 'right' ? ['0%', `${100 * depth}%`] :
                ['0%', '0%']
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, targetScale]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.3, targetOpacity, targetOpacity]
    );

    // Get appropriate transform style based on direction
    const getMotionStyle = () => {
        // Usamos un tipo más genérico para evitar problemas
        const style: { [key: string]: MotionValue<number> | MotionValue<string> } = { 
            opacity: opacity 
        };

        if (direction === 'up' || direction === 'down') {
            style.y = y;
        } else {
            style.x = x;
        }

        if (targetScale !== 1) {
            style.scale = scale;
        }

        return style;
    };

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                style={getMotionStyle()}
                className="w-full h-full"
                transition={{
                    duration: 0.6,
                    ease: easing
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default EnhancedParallaxSection;