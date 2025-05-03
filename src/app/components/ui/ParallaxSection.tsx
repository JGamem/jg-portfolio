// src/components/ui/ParallaxSection.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.5,
    direction = 'up',
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Creamos todas las transformaciones posibles, pero solo usamos la que necesitamos
    const yUp = useTransform(scrollYProgress, [0, 1], ['0%', `-${100 * speed}%`]);
    const yDown = useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);
    const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', `-${100 * speed}%`]);
    const xRight = useTransform(scrollYProgress, [0, 1], ['0%', `${100 * speed}%`]);

    // Función para determinar qué transformación usar
    const getTransformStyle = () => {
        switch (direction) {
            case 'up':
                return { y: yUp };
            case 'down':
                return { y: yDown };
            case 'left':
                return { x: xLeft };
            case 'right':
                return { x: xRight };
            default:
                return { y: yUp };
        }
    };

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={getTransformStyle()} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
};