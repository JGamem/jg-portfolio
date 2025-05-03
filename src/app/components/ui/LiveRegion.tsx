// src/app/components/ui/LiveRegion.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface LiveRegionProps {
    messages: Array<{
        id: string;
        content: string;
        type?: 'status' | 'alert';
        clearAfter?: number;
    }>;
    className?: string;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
    messages,
    className = '',
}) => {
    const [announcements, setAnnouncements] = useState<Array<{
        id: string;
        content: string;
        type: 'status' | 'alert';
    }>>([]);

    useEffect(() => {
        setAnnouncements(
            messages.map((message) => ({
                id: message.id,
                content: message.content,
                type: message.type || 'status',
            }))
        );

        const timers = messages
            .filter((message) => message.clearAfter)
            .map((message) => {
                return setTimeout(() => {
                    setAnnouncements((prev) =>
                        prev.filter((a) => a.id !== message.id)
                    );
                }, message.clearAfter);
            });

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [messages]);

    return (
        <>
            <div
                className={`sr-only ${className}`}
                aria-live="polite"
                aria-atomic="true"
            >
                {announcements
                    .filter((a) => a.type === 'status')
                    .map((a) => (
                        <div key={a.id}>{a.content}</div>
                    ))}
            </div>
            <div
                className={`sr-only ${className}`}
                aria-live="assertive"
                aria-atomic="true"
            >
                {announcements
                    .filter((a) => a.type === 'alert')
                    .map((a) => (
                        <div key={a.id}>{a.content}</div>
                    ))}
            </div>
        </>
    );
};