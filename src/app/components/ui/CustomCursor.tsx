'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorVariant, cursorVariants } from '@/app/lib/animation';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if it's a touch device
        const detectTouchDevice = () => {
            setIsTouchDevice(
                ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                ((navigator as any).msMaxTouchPoints > 0)
            );
        };

        detectTouchDevice();

        // If it's a touch device, don't show the custom cursor
        if (isTouchDevice) return;

        // Make cursor visible after a short delay for a smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 300);

        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const updateCursorVariant = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Determine cursor variant based on element
            if (target.tagName === 'A' || target.closest('a') ||
                (target.tagName === 'BUTTON' || target.closest('button'))) {
                setCursorVariant('link');
            } else if (
                target.tagName === 'P' ||
                target.tagName === 'H1' ||
                target.tagName === 'H2' ||
                target.tagName === 'H3' ||
                target.tagName === 'H4' ||
                target.tagName === 'SPAN' ||
                target.tagName === 'LI'
            ) {
                setCursorVariant('text');
            } else if (target.closest('[data-cursor="project"]')) {
                setCursorVariant('project');
            } else {
                setCursorVariant('default');
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousemove', updateCursorVariant);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousemove', updateCursorVariant);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isTouchDevice]);

    // Don't render custom cursor on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            <style jsx global>{`
                /* Hide default cursor only when custom cursor is active and visible */
                ${isVisible ? `
                    html, body, a, button {
                        cursor: none !important;
                    }
                    
                    /* Excluding form elements to keep their native cursors */
                    input, textarea, select {
                        cursor: auto !important;
                    }
                ` : ''}
                
                /* Show default cursor for touch devices */
                @media (pointer: coarse) {
                    html, body, * {
                        cursor: auto !important;
                    }
                }
            `}</style>

            <motion.div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full mix-blend-difference"
                variants={cursorVariants}
                animate={cursorVariant}
                initial="default"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full"
                    animate={{
                        scale: cursorVariant === 'default' ? 1 : 0.5
                    }}
                />
            </motion.div>
        </>
    );
};