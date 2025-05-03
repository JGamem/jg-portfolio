// src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

interface CardComponentProps {
    className?: string;
    children: React.ReactNode;
}

// Componente principal Card
export const Card: React.FC<CardProps> & {
    Header: React.FC<CardComponentProps>;
    Body: React.FC<CardComponentProps>;
    Footer: React.FC<CardComponentProps>;
} = ({ className = '', children }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

// Definir los sub-componentes
const Header: React.FC<CardComponentProps> = ({ className = '', children }) => (
    <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
        {children}
    </div>
);

const Body: React.FC<CardComponentProps> = ({ className = '', children }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

const Footer: React.FC<CardComponentProps> = ({ className = '', children }) => (
    <div className={`p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
        {children}
    </div>
);

// Asignar los sub-componentes a la propiedad del componente principal
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;