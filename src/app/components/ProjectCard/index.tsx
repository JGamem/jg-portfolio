// src/components/ProjectCard/index.tsx
import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Context for ProjectCard
interface ProjectCardContextProps {
    isHovered: boolean;
}

const ProjectCardContext = createContext<ProjectCardContextProps | undefined>(undefined);

// Hook to use the ProjectCard context
const useProjectCard = () => {
    const context = useContext(ProjectCardContext);
    if (!context) {
        throw new Error('ProjectCard compound components must be used within a ProjectCard');
    }
    return context;
};

// Component Props Types
interface ProjectCardProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardImageProps {
    src: string;
    alt: string;
    className?: string;
}

interface ProjectCardContentProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardTitleProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardTagsProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardTagProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCardLinksProps {
    children: React.ReactNode;
    className?: string;
}

type ProjectCardLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
};

// Main ProjectCard Component
export const ProjectCard = ({ children, className = '' }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ProjectCardContext.Provider value={{ isHovered }}>
            <motion.div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'transform translate-y-[-8px]' : ''
                    } ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </ProjectCardContext.Provider>
    );
};

// ProjectCardImage Component
export const ProjectCardImage = ({ src, alt, className = '' }: ProjectCardImageProps) => {
    const { isHovered } = useProjectCard();

    return (
        <div className="relative h-48 overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                    } ${className}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'
                }`} />
        </div>
    );
};

// ProjectCardContent Component
export const ProjectCardContent = ({ children, className = '' }: ProjectCardContentProps) => {
    return <div className={`p-6 ${className}`}>{children}</div>;
};

// ProjectCardTitle Component
export const ProjectCardTitle = ({ children, className = '' }: ProjectCardTitleProps) => {
    return (
        <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${className}`}>
            {children}
        </h3>
    );
};

// ProjectCardDescription Component
export const ProjectCardDescription = ({ children, className = '' }: ProjectCardDescriptionProps) => {
    return (
        <p className={`text-gray-600 dark:text-gray-400 mb-4 ${className}`}>
            {children}
        </p>
    );
};

// ProjectCardTags Component
export const ProjectCardTags = ({ children, className = '' }: ProjectCardTagsProps) => {
    return (
        <div className={`flex flex-wrap gap-2 mb-4 ${className}`}>
            {children}
        </div>
    );
};

// ProjectCardTag Component
export const ProjectCardTag = ({ children, className = '' }: ProjectCardTagProps) => {
    return (
        <span className={`px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 ${className}`}>
            {children}
        </span>
    );
};

// ProjectCardLinks Component
export const ProjectCardLinks = ({ children, className = '' }: ProjectCardLinksProps) => {
    return (
        <div className={`flex justify-between mt-4 ${className}`}>
            {children}
        </div>
    );
};

// ProjectCardLink Component - Fixed simplified version
export function ProjectCardLink(props: ProjectCardLinkProps) {
    const href = props.href;
    const children = props.children;
    const className = props.className || '';
    const icon = props.icon;

    // Una vez que la versión básica funciona, podemos añadir más funcionalidades
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-600 dark:text-blue-400 hover:underline flex items-center ${className}`}
        >
            {icon && <span className="mr-1">{icon}</span>}
            <span>{children}</span>
        </a>
    );
}

// Assign sub-components to main component
ProjectCard.Image = ProjectCardImage;
ProjectCard.Content = ProjectCardContent;
ProjectCard.Title = ProjectCardTitle;
ProjectCard.Description = ProjectCardDescription;
ProjectCard.Tags = ProjectCardTags;
ProjectCard.Tag = ProjectCardTag;
ProjectCard.Links = ProjectCardLinks;
ProjectCard.Link = ProjectCardLink;

// Export as default
export default ProjectCard;