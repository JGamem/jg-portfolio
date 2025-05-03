// src/components/ui/BackgroundPattern.tsx
'use client';

import React, { useEffect, useRef } from 'react';

type PatternType = 'grid' | 'dots' | 'waves' | 'triangles';

interface BackgroundPatternProps {
    pattern?: PatternType;
    color?: string;
    opacity?: number;
    className?: string;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
    pattern = 'dots',
    color = 'currentColor',
    opacity = 0.05,
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions
        const updateCanvasSize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            const scale = window.devicePixelRatio;

            canvas.width = Math.floor(width * scale);
            canvas.height = Math.floor(height * scale);

            ctx.scale(scale, scale);

            drawPattern();
        };

        // Drawing functions
        const drawPattern = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;

            // Scale for high-density displays
            const scale = window.devicePixelRatio;
            const width = canvas.width / scale;
            const height = canvas.height / scale;

            switch (pattern) {
                case 'grid':
                    drawGrid(ctx, width, height);
                    break;
                case 'dots':
                    drawDots(ctx, width, height);
                    break;
                case 'waves':
                    drawWaves(ctx, width, height);
                    break;
                case 'triangles':
                    drawTriangles(ctx, width, height);
                    break;
            }
        };

        const drawGrid = (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
        ) => {
            const size = 20;
            ctx.lineWidth = 0.5;

            for (let x = 0; x < width; x += size) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            for (let y = 0; y < height; y += size) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const drawDots = (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
        ) => {
            const size = 30;
            const radius = 1;

            for (let x = 0; x < width; x += size) {
                for (let y = 0; y < height; y += size) {
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        const drawWaves = (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
        ) => {
            const amplitude = 20;
            const frequency = 0.02;
            const step = 5;
            ctx.lineWidth = 1;

            for (let y = 0; y < height; y += 50) {
                ctx.beginPath();

                for (let x = 0; x < width; x += step) {
                    const yOffset = amplitude * Math.sin(x * frequency);

                    if (x === 0) {
                        ctx.moveTo(x, y + yOffset);
                    } else {
                        ctx.lineTo(x, y + yOffset);
                    }
                }

                ctx.stroke();
            }
        };

        const drawTriangles = (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number
        ) => {
            const size = 30;

            for (let x = 0; x < width; x += size) {
                for (let y = 0; y < height; y += size) {
                    if ((x + y) % (size * 2) === 0) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + size, y);
                        ctx.lineTo(x, y + size);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
        };

        // Initialize
        updateCanvasSize();

        // Handle resize
        window.addEventListener('resize', updateCanvasSize);
        return () => window.removeEventListener('resize', updateCanvasSize);
    }, [pattern, color, opacity]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 -z-10 w-full h-full ${className}`}
            aria-hidden="true"
        />
    );
};