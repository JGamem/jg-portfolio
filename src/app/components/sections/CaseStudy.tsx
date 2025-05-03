// src/app/components/sections/InteractiveCaseStudy.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { textReveal } from '@/app/lib/animation';
import { ArrowRight, Check, Calendar, Building, ExternalLink } from 'lucide-react';

interface CaseStudyStep {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface InteractiveCaseStudyProps {
    title: string;
    client: string;
    duration: string;
    challenge: string;
    approach: CaseStudyStep[];
    outcome: string;
    technologies: string[];
    imageUrl: string;
    caseStudyUrl?: string;
    className?: string;
}

export const InteractiveCaseStudy: React.FC<InteractiveCaseStudyProps> = ({
    title,
    client,
    duration,
    challenge,
    approach,
    outcome,
    technologies,
    imageUrl,
    caseStudyUrl,
    className = '',
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const totalSteps = approach.length + 2; // Challenge, Approach steps, Outcome

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(0); // Loop back to the beginning
        }
    };

    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            setCurrentStep(totalSteps - 1); // Loop to the end
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ${className}`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            variants={textReveal}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            {title}
                        </motion.h2>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <Building className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                                <span>{client}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                                <span>{duration}</span>
                            </div>
                        </div>

                        {/* Case Study Steps Navigation */}
                        <div className="flex mb-6 space-x-2">
                            {Array(totalSteps).fill(0).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentStep(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentStep === index
                                        ? 'bg-blue-600 dark:bg-blue-400 w-6'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    aria-label={`Go to step ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Case Study Content */}
                        <div className="min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {currentStep === 0 && (
                                    <motion.div
                                        key="challenge"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-3 text-sm">1</span>
                                            Challenge
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 pl-11 mb-4">
                                            {challenge}
                                        </p>
                                    </motion.div>
                                )}

                                {approach.map((step, index) => (
                                    currentStep === index + 1 && (
                                        <motion.div
                                            key={`approach-${index}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-3 text-sm">{index + 2}</span>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 pl-11 mb-4">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    )
                                ))}

                                {currentStep === totalSteps - 1 && (
                                    <motion.div
                                        key="outcome"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 inline-flex items-center justify-center mr-3 text-sm">{totalSteps}</span>
                                            Outcome
                                        </h3>
                                        <div className="text-gray-700 dark:text-gray-300 pl-11 mb-4">
                                            <p>{outcome}</p>

                                            <div className="mt-4">
                                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Results:</h4>
                                                <ul className="space-y-2">
                                                    {outcome.split('. ').filter(s => s.length > 10).map((result, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                            <span>{result}.</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Arrow Navigation */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={previousStep}
                                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                <ArrowRight className="w-5 h-5 transform rotate-180" />
                            </button>
                            <button
                                onClick={nextStep}
                                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {caseStudyUrl && (
                            <div className="mt-8">
                                <a
                                    href={caseStudyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium group"
                                >
                                    <span>Read Full Case Study</span>
                                    <ExternalLink className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        )}
                    </motion.div>
                </div>

                <div
                    className="relative h-64 lg:h-auto overflow-hidden cursor-pointer"
                    onClick={toggleExpand}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={imageUrl}
                            alt={`${title} project screenshot`}
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold">{title}</h2>
                                <p className="text-sm opacity-80">{isExpanded ? 'Click to collapse' : 'Click to expand'}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Expanded Image View */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 400 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full overflow-hidden"
                    >
                        <Image
                            src={imageUrl}
                            alt={`${title} project expanded view`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                        <button
                            onClick={toggleExpand}
                            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                            aria-label="Close expanded view"
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 45 }}
                                className="w-6 h-6 flex items-center justify-center"
                            >
                                +
                            </motion.div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default InteractiveCaseStudy;