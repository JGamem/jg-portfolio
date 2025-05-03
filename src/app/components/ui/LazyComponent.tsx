// src/components/ui/LazyComponent.tsx
'use client';

import React, { Suspense } from 'react';

interface LazyComponentProps {
    component: React.ComponentType<Record<string, unknown>>;
    fallback?: React.ReactNode;
    props?: Record<string, unknown>;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({
    component: Component,
    fallback = <div className="min-h-[200px] flex items-center justify-center">Loading...</div>,
    props = {},
}) => {
    return (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
    );
};