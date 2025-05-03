// src/components/ui/LiveRegion.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface LiveRegionProps {
    message: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
    clearAfter?: number; // Time in milliseconds
    className?: string;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
    message,
    ariaLive = 'polite',
    clearAfter = 5000,
    className = '',
}) => {
    const [currentMessage, setCurrentMessage] = useState(message);

    useEffect(() => {
        setCurrentMessage(message);

        if (clearAfter > 0 && message) {
            const timer = setTimeout(() => {
                setCurrentMessage('');
            }, clearAfter);

            return () => clearTimeout(timer);
        }
    }, [message, clearAfter]);

    return (
        <div
            className={`sr-only ${className}`}
            aria-live={ariaLive}
            aria-atomic="true"
        >
            {currentMessage}
        </div>
    );
};