// src/app/components/ProjectCard3D/index.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUpOnScroll } from '@/app/lib/animation';
import { Card3D } from '@/app/components/ui/Card';

// Context for ProjectCard
interface ProjectCard3DContextProps {
    isHovered: boolean;
}

const ProjectCard3DContext = createContext<ProjectCard3DContextProps | undefined>(undefined);

// Hook to use the ProjectCard context
const useProjectCard3D = () => {
    const context = useContext(ProjectCard3DContext);
    if (!context) {
        throw new Error('ProjectCard3D compound components must be used within a ProjectCard3D');
    }
    return context;
};

// Component Props Types
interface ProjectCard3DProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DImageProps {
    src: string;
    alt: string;
    className?: string;
}

interface ProjectCard3DContentProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DTitleProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DTagsProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DTagProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DLinksProps {
    children: React.ReactNode;
    className?: string;
}

interface ProjectCard3DLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

// Main ProjectCard3D Component
export const ProjectCard3D = ({ children, className = '' }: ProjectCard3DProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ProjectCard3DContext.Provider value={{ isHovered }}>
            <motion.div
                data-cursor="project"
                variants={fadeInUpOnScroll}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <Card3D
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}
                    glareEnabled={true}
                    depth={0.75}
                >
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {children}
                    </div>
                </Card3D>
            </motion.div>
        </ProjectCard3DContext.Provider>
    );
};

// ProjectCard3DImage Component
export const ProjectCard3DImage = ({ src, alt, className = '' }: ProjectCard3DImageProps) => {
    const { isHovered } = useProjectCard3D();

    return (
        <div className="relative h-48 overflow-hidden">
            <motion.div
                animate={{
                    scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover ${className}`}
                />
            </motion.div>
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'
                    }`}
            />
        </div>
    );
};

// ProjectCard3DContent Component
export const ProjectCard3DContent = ({ children, className = '' }: ProjectCard3DContentProps) => {
    return <div className={`p-6 ${className}`}>{children}</div>;
};

// ProjectCard3DTitle Component
export const ProjectCard3DTitle = ({ children, className = '' }: ProjectCard3DTitleProps) => {
    return (
        <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${className}`}>
            {children}
        </h3>
    );
};

// ProjectCard3DDescription Component
export const ProjectCard3DDescription = ({ children, className = '' }: ProjectCard3DDescriptionProps) => {
    return (
        <p className={`text-gray-600 dark:text-gray-400 mb-4 ${className}`}>
            {children}
        </p>
    );
};

// ProjectCard3DTags Component
export const ProjectCard3DTags = ({ children, className = '' }: ProjectCard3DTagsProps) => {
    return (
        <div className={`flex flex-wrap gap-2 mb-4 ${className}`}>
            {children}
        </div>
    );
};

// ProjectCard3DTag Component
export const ProjectCard3DTag = ({ children, className = '' }: ProjectCard3DTagProps) => {
    const { isHovered } = useProjectCard3D();

    return (
        <motion.span
            className={`px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 ${className}`}
            animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -2 : 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.span>
    );
};

// ProjectCard3DLinks Component
export const ProjectCard3DLinks = ({ children, className = '' }: ProjectCard3DLinksProps) => {
    return (
        <div className={`flex justify-between mt-4 ${className}`}>
            {children}
        </div>
    );
};

// ProjectCard3DLink Component - Fixed with proper TypeScript typing
export const ProjectCard3DLink: React.FC<ProjectCard3DLinkProps> = ({
    href,
    children,
    className = '',
    icon
}) => {
    const { isHovered } = useProjectCard3D();

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-600 dark:text-blue-400 hover:underline flex items-center ${className}`}
            animate={{
                x: isHovered ? 3 : 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {icon && <span className="mr-1">{icon}</span>}
            <span>{children}</span>
        </motion.a>
    );
};

// Assign sub-components to main component
ProjectCard3D.Image = ProjectCard3DImage;
ProjectCard3D.Content = ProjectCard3DContent;
ProjectCard3D.Title = ProjectCard3DTitle;
ProjectCard3D.Description = ProjectCard3DDescription;
ProjectCard3D.Tags = ProjectCard3DTags;
ProjectCard3D.Tag = ProjectCard3DTag;
ProjectCard3D.Links = ProjectCard3DLinks;
ProjectCard3D.Link = ProjectCard3DLink;

// Export as default
export default ProjectCard3D;