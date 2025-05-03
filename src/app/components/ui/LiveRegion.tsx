// src/app/components/ui/EnhancedLiveRegion.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface LiveRegionProps {
    messages: Array<{
        id: string;
        content: string;
        type?: 'status' | 'alert';
        clearAfter?: number; // In milliseconds, 0 means never clear
        announced?: boolean;
    }>;
    className?: string;
    busy?: boolean;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
    messages,
    className = '',
    busy = false,
}) => {
    const [announcements, setAnnouncements] = useState<Array<{
        id: string;
        content: string;
        type: 'status' | 'alert';
        announced: boolean;
    }>>([]);

    // Update announcements when messages change
    useEffect(() => {
        // Filter out messages that haven't been announced
        const newMessages = messages.filter(
            (message) => !announcements.some((a) => a.id === message.id && a.announced)
        );

        if (newMessages.length > 0) {
            setAnnouncements((prev) => [
                ...prev,
                ...newMessages.map((message) => ({
                    id: message.id,
                    content: message.content,
                    type: message.type || 'status',
                    announced: false,
                })),
            ]);
        }
    }, [messages, announcements]);

    // Mark messages as announced after they've been rendered
    useEffect(() => {
        const unannounced = announcements.filter((a) => !a.announced);

        if (unannounced.length > 0) {
            // Small delay to ensure screen readers pick up the content
            const timer = setTimeout(() => {
                setAnnouncements((prev) =>
                    prev.map((a) => ({
                        ...a,
                        announced: true,
                    }))
                );
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [announcements]);

    // Clear announcements after specified time
    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        messages.forEach((message) => {
            if (message.clearAfter && message.clearAfter > 0) {
                const timer = setTimeout(() => {
                    setAnnouncements((prev) =>
                        prev.filter((a) => a.id !== message.id)
                    );
                }, message.clearAfter);

                timers.push(timer);
            }
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
                aria-relevant="additions"
                aria-busy={busy}
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
                aria-relevant="additions"
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