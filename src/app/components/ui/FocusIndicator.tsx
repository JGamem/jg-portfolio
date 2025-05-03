// src/app/components/ui/FocusIndicator.tsx
'use client';

import React, { useEffect } from 'react';

export const FocusIndicator: React.FC = () => {
    useEffect(() => {
        const handleMouseDown = () => {
            document.body.classList.remove('using-keyboard');
        };

        const handleKeyDown = (event: KeyboardEvent) => {
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
      body:not(.using-keyboard) *:focus {
        outline: none !important;
      }

      body.using-keyboard a:focus,
      body.using-keyboard button:focus,
      body.using-keyboard input:focus,
      body.using-keyboard select:focus,
      body.using-keyboard textarea:focus,
      body.using-keyboard [tabindex="0"]:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 3px !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
      }
    `}</style>
    );
};