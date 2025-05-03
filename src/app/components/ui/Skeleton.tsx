// src/components/ui/Skeleton.tsx
import React from 'react';

type SkeletonVariant = 'text' | 'circle' | 'rectangle';

interface SkeletonProps {
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    className?: string;
    count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width,
    height,
    className = '',
    count = 1,
}) => {
    const baseStyle = 'animate-pulse bg-gray-300 dark:bg-gray-700';

    const getVariantStyle = () => {
        switch (variant) {
            case 'text':
                return 'h-4 rounded';
            case 'circle':
                return 'rounded-full';
            case 'rectangle':
                return 'rounded-md';
            default:
                return 'h-4 rounded';
        }
    };

    const itemStyle = `${baseStyle} ${getVariantStyle()} ${className}`;

    const getStyles = () => {
        const styles: React.CSSProperties = {};

        if (width) {
            styles.width = width;
        }

        if (height) {
            styles.height = height;
        }

        return styles;
    };

    if (count > 1) {
        return (
            <div className="space-y-2">
                {Array(count).fill(0).map((_, i) => (
                    <div key={i} className={itemStyle} style={getStyles()} />
                ))}
            </div>
        );
    }

    return <div className={itemStyle} style={getStyles()} />;
};