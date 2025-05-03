// src/components/ui/FocusIndicator.tsx
'use client';

import React, { useEffect } from 'react';

export const FocusIndicator: React.FC = () => {
    useEffect(() => {
        // Function to determine if input is from keyboard or mouse
        const handleMouseDown = () => {
            document.body.classList.remove('using-keyboard');
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            // Tab key indicates keyboard navigation
            if (event.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <style jsx global>{`
      /* Only show focus styles when using keyboard */
      body:not(.using-keyboard) *:focus {
        outline: none !important;
    }

      /* Enhanced focus styles for keyboard users */
    body.using-keyboard a:focus,
    body.using-keyboard button:focus,
    body.using-keyboard [tabindex="0"]:focus {
        outline: 2px solid var(--color-brand-primary) !important;
        outline-offset: 3px !important;
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4) !important;
    }
    `}</style>
    );
};