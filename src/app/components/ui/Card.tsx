// src/app/components/ui/Card.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    depth?: number;
    glareEnabled?: boolean;
    animationEnabled?: boolean;
}

type MousePosition = { x: number; y: number };

export const Card3D: React.FC<CardProps> = ({
    children,
    className = '',
    glareEnabled = true,
    animationEnabled = true,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0.5, y: 0.5 });
    const [hovered, setHovered] = useState(false);

    // Motion values for mouse position
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Motion values for glare effect
    const glareOpacity = useMotionValue(0);
    const glareX = useMotionValue(50);
    const glareY = useMotionValue(50);

    // Update mouseX and mouseY when mousePosition changes
    useEffect(() => {
        mouseX.set(mousePosition.x);
        mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    // Link glare position to mouse position
    useEffect(() => {
        const unsubscribeX = mouseX.onChange(value => {
            glareX.set(value * 100);
        });

        const unsubscribeY = mouseY.onChange(value => {
            glareY.set(value * 100);
        });

        return () => {
            unsubscribeX();
            unsubscribeY();
        };
    }, [mouseX, mouseY, glareX, glareY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !animationEnabled) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMousePosition({ x, y });

        if (glareEnabled) {
            glareOpacity.set(0.15);
        }
    };

    const handleMouseEnter = () => {
        if (!animationEnabled) return;
        setHovered(true);

        if (glareEnabled) {
            glareOpacity.set(0.15);
        }
    };

    const handleMouseLeave = () => {
        if (!animationEnabled) return;
        setHovered(false);
        setMousePosition({ x: 0.5, y: 0.5 });

        if (glareEnabled) {
            glareOpacity.set(0);
        }
    };

    const card3DEffect = {
        rest: {
            rotateY: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
        hover: (mousePos: MousePosition) => {
            const { x, y } = mousePos;
            const rotateX = -((y - 0.5) * 20);
            const rotateY = (x - 0.5) * 20;
            return {
                rotateX,
                rotateY,
                z: 50,
                transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                },
            };
        },
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial="rest"
            animate={hovered && animationEnabled ? "hover" : "rest"}
            variants={card3DEffect}
            custom={mousePosition}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
        >
            <div className="relative z-10">
                {children}
            </div>

            {glareEnabled && (
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
                    style={{
                        opacity: glareOpacity,
                        background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 80%)`,
                        mixBlendMode: 'overlay',
                    }}
                />
            )}
        </motion.div>
    );
};