'use client';

import React, { useRef, useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Verificar si el elemento es clickeable
            const isClickable: boolean =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            // Ahora isClickable es explícitamente un boolean
            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Handle breathing animation
    useEffect(() => {
        if (!cursorRef.current) return;

        // Animation for breathing effect
        const animateCursor = () => {
            const time = Date.now() * 0.003; // Convert to seconds for smoother animation
            const scale = 1 + Math.sin(time) * 0.1; // Scale between 0.9 and 1.1

            if (cursorRef.current) {
                // Apply breathing effect unless it's expanded
                if (!isPointer) {
                    cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px) scale(${scale})`;
                } else {
                    cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
                }
            }

            requestAnimationFrame(animateCursor);
        };

        const animationFrame = requestAnimationFrame(animateCursor);
        return () => cancelAnimationFrame(animationFrame);
    }, [position, isPointer]);

    // Handle dot position
    useEffect(() => {
        if (!cursorDotRef.current) return;

        // Dot follows cursor exactly
        cursorDotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }, [position]);

    // Handle pointer and hidden states
    useEffect(() => {
        if (!cursorRef.current || !cursorDotRef.current) return;

        if (isPointer) {
            cursorRef.current.classList.add('cursor-expanded');
            cursorDotRef.current.classList.add('cursor-dot-expanded');
        } else {
            cursorRef.current.classList.remove('cursor-expanded');
            cursorDotRef.current.classList.remove('cursor-dot-expanded');
        }

        if (isHidden) {
            cursorRef.current.classList.add('cursor-hidden');
            cursorDotRef.current.classList.add('cursor-hidden');
        } else {
            cursorRef.current.classList.remove('cursor-hidden');
            cursorDotRef.current.classList.remove('cursor-hidden');
        }
    }, [isPointer, isHidden]);

    return (
        <>
            <style jsx global>{`
                body {
                    cursor: none !important;
                }
                
                a, button, [role="button"] {
                    cursor: none !important;
                }
                
                .cursor {
                    pointer-events: none;
                    position: fixed;
                    top: -16px;
                    left: -16px;
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(59, 130, 246, 0.6);
                    border-radius: 50%;
                    z-index: 9999;
                    transition: width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s;
                    opacity: 0.8;
                }
                
                .cursor-dot {
                    pointer-events: none;
                    position: fixed;
                    top: -3px;
                    left: -3px;
                    width: 6px;
                    height: 6px;
                    background-color: rgba(59, 130, 246, 0.8);
                    border-radius: 50%;
                    z-index: 10000;
                    transform: translate(10px, 10px);
                }
                
                .cursor-expanded {
                    width: 50px;
                    height: 50px;
                    top: -25px;
                    left: -25px;
                    opacity: 0.3;
                    border-color: rgba(99, 102, 241, 0.6);
                    border-width: 2px;
                }
                
                .cursor-dot-expanded {
                    transform: scale(0.5);
                    opacity: 0.6;
                }
                
                .cursor-hidden {
                    opacity: 0;
                }
                
                /* For mobile devices */
                @media (pointer: coarse) {
                    .cursor, .cursor-dot {
                        display: none;
                    }
                }
            `}</style>
            <div ref={cursorRef} className="cursor" />
            <div ref={cursorDotRef} className="cursor-dot" />
        </>
    );
};