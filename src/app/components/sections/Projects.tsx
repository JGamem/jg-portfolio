// src/app/components/sections/Projects.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioFilter } from '@/app/components/ui/PortfolioFilter';
import { PortfolioCard } from '@/app/components/ui/PortfolioCard';
import { useTranslation } from '@/app/lib/i18n';

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'AI-Powered Data Processing',
        description: 'Serverless application using AWS Lambda and Amazon Bedrock to process and analyze large datasets with LLM integration.',
        imageUrl: 'https://via.placeholder.com/800x600/3b82f6/FFFFFF?text=AI+Data+Processing',
        technologies: ['AWS', 'Python', 'React', 'TypeScript'],
        category: 'AI',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: '2',
        title: 'Enterprise Web Application',
        description: 'Scalable web application with complex business logic and multiple integrations with third-party services.',
        imageUrl: 'https://via.placeholder.com/800x600/4f46e5/FFFFFF?text=Enterprise+Web+App',
        technologies: ['Node.js', 'React', 'MongoDB', 'AWS'],
        category: 'Web',
        githubUrl: 'https://github.com',
    },
    {
        id: '3',
        title: 'RESTful API Development',
        description: 'High-performance RESTful API for data management with comprehensive documentation and security features.',
        imageUrl: 'https://via.placeholder.com/800x600/0891b2/FFFFFF?text=RESTful+API',
        technologies: ['Node.js', 'Express', 'SQL', 'Docker'],
        category: 'Backend',
        liveUrl: 'https://example.com',
    },
    {
        id: '4',
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for visualizing complex datasets with real-time updates and filtering capabilities.',
        imageUrl: 'https://via.placeholder.com/800x600/8b5cf6/FFFFFF?text=Data+Dashboard',
        technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
        category: 'Data',
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
    },
    {
        id: '5',
        title: 'E-commerce Platform',
        description: 'Full-featured e-commerce platform with product management, cart functionality, and payment processing.',
        imageUrl: 'https://via.placeholder.com/800x600/ec4899/FFFFFF?text=E-commerce',
        technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
        category: 'Web',
        githubUrl: 'https://github.com',
    },
    {
        id: '6',
        title: 'Mobile Fitness Application',
        description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
        imageUrl: 'https://via.placeholder.com/800x600/f59e0b/FFFFFF?text=Fitness+App',
        technologies: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
        category: 'Mobile',
    },
];

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [isClient, setIsClient] = useState(false);

    // Extract unique categories from projects
    const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

    // Filter projects when category changes
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === activeCategory));
        }
        // Reset visible projects when category changes
        setVisibleProjects(3);
    }, [activeCategory]);

    // Client-side rendering safety
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLoadMore = () => {
        setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
    };

    if (!isClient) {
        return null; // Prevent SSR/hydration issues
    }

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </div>

                {/* Category Filter */}
                <PortfolioFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onFilterChange={setActiveCategory}
                />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.slice(0, visibleProjects).map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                layout
                            >
                                <PortfolioCard
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    technologies={project.technologies}
                                    githubUrl={project.githubUrl}
                                    liveUrl={project.liveUrl}
                                    category={project.category}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {visibleProjects < filteredProjects.length && (
                    <div className="text-center mt-12">
                        <motion.button
                            onClick={handleLoadMore}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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