// src/app/components/sections/Experience.tsx
'use client';

import React from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion } from 'framer-motion';
import { Timeline } from '@/app/components/ui/Timeline';

export const Experience = () => {
    const { t } = useTranslation();

    // Enhanced role data with additional details
    const roles = [
        {
            id: 'genpact',
            title: 'Fullstack Developer Mid',
            company: 'Genpact',
            location: 'Guatemala City',
            period: 'August 2024 - Present',
            description: 'Leading full-stack development on AI-powered data processing applications with a focus on serverless architecture and cloud infrastructure.',
            responsibilities: [
                'Designing and implementing serverless applications using AWS Lambda and API Gateway',
                'Developing frontend interfaces with React and TypeScript for data visualization',
                'Integrating LLMs through Amazon Bedrock for advanced data processing',
                'Leading code reviews and implementing CI/CD pipelines',
                'Collaborating with data scientists to optimize machine learning workflows'
            ],
            achievements: [
                'Reduced processing time for document analysis by 65% through optimization',
                'Implemented a new React component library that improved development velocity by 40%',
                'Successfully migrated legacy systems to modern serverless architecture',
                'Designed and implemented a novel approach to real-time data processing'
            ],
            technologies: ['AWS', 'React', 'TypeScript', 'Python', 'Amazon Bedrock', 'Docker'],
            link: 'https://www.genpact.com/'
        },
        {
            id: 'yalutec',
            title: 'Backend Developer Jr',
            company: 'Yalutec',
            location: 'Remote',
            period: 'June 2022 - August 2024',
            description: 'Developed and maintained backend services and RESTful APIs for enterprise clients, focusing on performance optimization and database design.',
            responsibilities: [
                'Building scalable RESTful APIs using Node.js and Express',
                'Designing and optimizing database schemas in SQL and NoSQL environments',
                'Implementing AWS Lambda functions for serverless computing tasks',
                'Developing automated tests for backend services',
                'Collaborating with frontend developers to ensure seamless integration'
            ],
            achievements: [
                'Reduced API response time by 40% through code optimization',
                'Implemented a caching strategy that decreased database load by 30%',
                'Developed a logging system that improved debugging efficiency',
                'Contributed to open-source modules used by the company'
            ],
            technologies: ['Node.js', 'Express', 'MongoDB', 'AWS S3', 'AWS Lambda', 'Docker'],
            link: 'https://www.yalutec.com/'
        },
        {
            id: 'freelance',
            title: 'Frontend Developer',
            company: 'Freelance',
            location: 'Guatemala',
            period: 'January 2020 - June 2022',
            description: 'Designed and developed responsive web applications for various clients, with a focus on user experience and modern frontend frameworks.',
            responsibilities: [
                'Creating responsive web interfaces with React and vanilla JavaScript',
                'Developing custom WordPress themes and plugins',
                'Implementing SEO best practices for client websites',
                'Collaborating directly with clients to understand requirements',
                'Performing website audits and performance optimizations'
            ],
            achievements: [
                'Delivered over 15 successful projects with 100% client satisfaction',
                'Improved site performance scores by an average of 35% across projects',
                'Reduced load times by implementing lazy loading and code splitting',
                'Created a reusable component library that accelerated development'
            ],
            technologies: ['React', 'JavaScript', 'CSS/SASS', 'WordPress', 'HTML5', 'Figma']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        {t('experience.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        With over 4 years of experience in software development, I&apos;ve worked across diverse industries solving complex problems with elegant solutions.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Timeline items={roles} />
                </div>
            </div>
        </section>
    );
};