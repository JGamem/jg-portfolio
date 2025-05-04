// src/app/components/ui/CustomCursor.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <style jsx global>{`
                @media (hover: hover) {
                    /* Only apply custom cursor on devices with hover capabilities */
                    html, body, a, button {
                        cursor: none !important;
                    }
                }
            `}</style>

            <motion.div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                {/* Outer circle */}
                <motion.div
                    className="absolute w-8 h-8 -ml-4 -mt-4 border border-blue-500 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                {/* Inner dot */}
                <motion.div
                    className="absolute w-2 h-2 -ml-1 -mt-1 bg-blue-500 rounded-full"
                />
            </motion.div>
        </>
    );
};