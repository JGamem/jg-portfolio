// src/app/components/sections/EnhancedProjects.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, PenTool, Server, Database } from 'lucide-react';
import { ProjectFilter } from './ProjectFilter';
import ProjectCard from '@/app/components/ProjectCard';
import { staggerContainer, staggerItem } from '@/app/lib/animation';

// Define TypeScript type for projects with categories
type Project = {
    title: string;
    description: string;
    technologies: string[];
    category: string;
    imageSrc?: string;
    githubLink?: string;
    demoLink?: string;
    featured?: boolean;
};

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isClient, setIsClient] = useState(false);

    // Client-side rendering safety
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Use useMemo to prevent the projects array from being recreated on every render
    const projects = useMemo(() => [
        {
            title: 'AI-Powered Data Processing',
            description: 'Serverless application using AWS Lambda and Amazon Bedrock to process and analyze large datasets with LLM integration.',
            technologies: ['AWS', 'Python', 'React', 'TypeScript'],
            category: 'AI',
            imageSrc: 'https://via.placeholder.com/800x600/3b82f6/FFFFFF?text=AI+Data+Processing',
            githubLink: 'https://github.com',
            demoLink: 'https://example.com',
            featured: true,
        },
        {
            title: 'Enterprise Web Application',
            description: 'Scalable web application with complex business logic and multiple integrations with third-party services.',
            technologies: ['Node.js', 'React', 'MongoDB', 'AWS'],
            category: 'Web',
            imageSrc: 'https://via.placeholder.com/800x600/4f46e5/FFFFFF?text=Enterprise+Web+App',
            githubLink: 'https://github.com',
            featured: true,
        },
        {
            title: 'RESTful API Development',
            description: 'High-performance RESTful API for data management with comprehensive documentation and security features.',
            technologies: ['Node.js', 'Express', 'SQL', 'Docker'],
            category: 'Backend',
            imageSrc: 'https://via.placeholder.com/800x600/0891b2/FFFFFF?text=RESTful+API',
            demoLink: 'https://example.com',
        },
        {
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for visualizing complex datasets with real-time updates and filtering capabilities.',
            technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
            category: 'Data',
            imageSrc: 'https://via.placeholder.com/800x600/8b5cf6/FFFFFF?text=Data+Dashboard',
            githubLink: 'https://github.com',
            demoLink: 'https://example.com',
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce platform with product management, cart functionality, and payment processing.',
            technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
            category: 'Web',
            imageSrc: 'https://via.placeholder.com/800x600/ec4899/FFFFFF?text=E-commerce',
            githubLink: 'https://github.com',
        },
        {
            title: 'Mobile Fitness Application',
            description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
            technologies: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
            category: 'Mobile',
            imageSrc: 'https://via.placeholder.com/800x600/f59e0b/FFFFFF?text=Fitness+App',
        },
    ], []);

    // Extract all unique categories - also memoized to prevent recalculation
    const categories = useMemo(() =>
        ['All', ...Array.from(new Set(projects.map(project => project.category)))],
        [projects]
    );

    // Filter projects by category
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory));
        }
    }, [activeCategory, projects]);

    // Handle category change
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        // Reset visible projects count when changing categories
        setVisibleProjects(3);
    };

    // Get icon based on category
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'AI':
                return <Code className="w-6 h-6 text-blue-500" />;
            case 'Web':
                return <PenTool className="w-6 h-6 text-indigo-500" />;
            case 'Backend':
                return <Server className="w-6 h-6 text-cyan-500" />;
            case 'Data':
                return <Database className="w-6 h-6 text-purple-500" />;
            case 'Mobile':
                return <ExternalLink className="w-6 h-6 text-amber-500" />;
            default:
                return <Code className="w-6 h-6 text-gray-500" />;
        }
    };

    // Show more projects
    const showMoreProjects = () => {
        setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
    };

    if (!isClient) {
        return null; // Prevent SSR/Hydration issues
    }

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </motion.div>

                {/* Category filter */}
                <ProjectFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onFilterChange={handleCategoryChange}
                />

                {/* Projects grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.slice(0, visibleProjects).map((project) => (
                            <motion.div
                                key={project.title}
                                variants={staggerItem}
                                initial="initial"
                                animate="animate"
                                exit={{ opacity: 0, y: 20 }}
                                layout
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectCard>
                                    <ProjectCard.Image
                                        src={project.imageSrc || `https://via.placeholder.com/800x600/3b82f6/FFFFFF?text=${encodeURIComponent(project.title)}`}
                                        alt={project.title}
                                    />
                                    <ProjectCard.Content>
                                        <div className="flex items-center justify-between mb-2">
                                            <ProjectCard.Title>
                                                {project.title}
                                            </ProjectCard.Title>
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900">
                                                {getCategoryIcon(project.category)}
                                            </div>
                                        </div>
                                        <ProjectCard.Description>
                                            {project.description}
                                        </ProjectCard.Description>
                                        <ProjectCard.Tags>
                                            {project.technologies.map((tech) => (
                                                <ProjectCard.Tag key={tech}>
                                                    {tech}
                                                </ProjectCard.Tag>
                                            ))}
                                        </ProjectCard.Tags>
                                        <ProjectCard.Links>
                                            {project.githubLink && (
                                                <ProjectCard.Link
                                                    href={project.githubLink}
                                                    icon={<Github className="w-4 h-4" />}
                                                >
                                                    Code
                                                </ProjectCard.Link>
                                            )}
                                            {project.demoLink && (
                                                <ProjectCard.Link
                                                    href={project.demoLink}
                                                    icon={<ExternalLink className="w-4 h-4" />}
                                                >
                                                    Demo
                                                </ProjectCard.Link>
                                            )}
                                        </ProjectCard.Links>
                                    </ProjectCard.Content>
                                </ProjectCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load more button */}
                {visibleProjects < filteredProjects.length && (
                    <div className="text-center mt-12">
                        <motion.button
                            onClick={showMoreProjects}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('projects.viewAll')}
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;