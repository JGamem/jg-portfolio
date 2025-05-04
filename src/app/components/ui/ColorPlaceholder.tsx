// src/app/components/ui/ColorPlaceholder.tsx
'use client';

import React from 'react';

interface ColorPlaceholderProps {
    width?: number;
    height?: number;
    color: string;
    text?: string;
    className?: string;
}

export const ColorPlaceholder: React.FC<ColorPlaceholderProps> = ({
    width = 800,
    height = 600,
    color,
    text,
    className = '',
}) => {
    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: color,
            }}
        >
            {text && (
                <span className="text-white font-bold text-lg md:text-2xl px-4 text-center">
                    {text}
                </span>
            )}
        </div>
    );
};