// src/components/ui/GradientButton.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define tipos para los props
type GradientButtonSize = 'sm' | 'md' | 'lg';
type GradientButtonVariant = 'primary' | 'secondary';

interface GradientButtonProps {
    size?: GradientButtonSize;
    variant?: GradientButtonVariant;
    className?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
    size = 'md',
    variant = 'primary',
    className = '',
    icon,
    children,
    onClick,
    type = 'button',
    disabled = false,
}) => {
    // Definir clases por tamaño
    const sizeClasses = {
        sm: 'text-xs py-1.5 px-3',
        md: 'text-sm py-2 px-4',
        lg: 'text-base py-3 px-6',
    };

    // Definir clases de gradiente
    const gradientClasses = {
        primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
        secondary: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    };

    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.03 }}
            whileTap={disabled ? {} : { scale: 0.98 }}
            className={`
        relative inline-flex items-center justify-center
        rounded-md font-medium text-white shadow-lg
        transition duration-300 ease-in-out
        overflow-hidden
        ${sizeClasses[size]}
        ${gradientClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
    `}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {/* Subtle gradient overlay */}
            <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity bg-gradient-to-t from-white/20 to-transparent" />
            </span>

            {/* Button content */}
            <span className="relative inline-flex items-center justify-center">
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};