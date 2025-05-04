// src/app/components/ui/PortfolioCard.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card3D } from './Card';
import { ColorPlaceholder } from './ColorPlaceholder';

interface PortfolioCardProps {
    title: string;
    description: string;
    backgroundColor: string; // Changed from imageUrl
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
    title,
    description,
    backgroundColor,
    technologies,
    githubUrl,
    liveUrl,
    category,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card3D
            className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            glareEnabled={true}
        >
            <div
                className="flex flex-col h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full"
                    >
                        <ColorPlaceholder
                            color={backgroundColor}
                            text={title}
                            className="h-full w-full"
                        />
                    </motion.div>

                    {/* Category tag */}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                    whileHover={{ y: -2 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        {githubUrl ? (
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                whileHover={{ x: 3 }}
                            >
                                <Github className="w-4 h-4 mr-1" />
                                <span>Code</span>
                            </motion.a>
                        ) : (
                            <div></div> // Empty div to keep layout consistent
                        )}

                        {liveUrl ? (
                            <motion.a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                                whileHover={{ x: 3 }}
                            >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                <span>Live Demo</span>
                            </motion.a>
                        ) : (
                            <div></div> // Empty div to keep layout consistent
                        )}
                    </div>
                </div>
            </div>
        </Card3D>
    );
};