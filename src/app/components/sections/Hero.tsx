// src/app/components/sections/EnhancedHero.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/app/lib/i18n';
import { motion, useAnimation } from 'framer-motion';
import { EnhancedThreeBackground } from '@/app/components/ui/ThreeJsBackground';
import { GradientButton } from '@/app/components/ui/GradientButton';
import { ArrowDown, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const controls = useAnimation();
    const [typingText, setTypingText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const roles = [
        'Frontend Developer',
        'UX/UI Designer',
        'Backend Expert',
        'ReactJS Specialist',
        'Fullstack Developer'
    ];

    useEffect(() => {
        // Start the animation sequence
        controls.start("animate");

        // Typing animation
        let typingTimeout: NodeJS.Timeout;

        const typeWriter = () => {
            const currentRole = roles[currentRoleIndex];

            if (!isDeleting) {
                setTypingText(currentRole.substring(0, typingText.length + 1));

                // Check if full text is typed
                if (typingText.length === currentRole.length) {
                    // Pause at the end of typing
                    setIsPaused(true);
                    typingTimeout = setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, 2000);
                    return;
                }
            } else {
                setTypingText(currentRole.substring(0, typingText.length - 1));

                // Check if text is fully deleted
                if (typingText.length === 0) {
                    setIsDeleting(false);
                    // Move to next role
                    setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
                    return;
                }
            }

            // Speed of typing/deleting
            const typingSpeed = isDeleting ? 50 : 100;
            typingTimeout = setTimeout(typeWriter, typingSpeed);
        };

        // Only run the effect if not paused
        if (!isPaused) {
            typingTimeout = setTimeout(typeWriter, 100);
        }

        return () => clearTimeout(typingTimeout);
    }, [typingText, currentRoleIndex, isDeleting, isPaused, roles, controls]);

    return (
        <section id="home" className="relative h-screen flex items-center">
            {/* Enhanced Background */}
            <EnhancedThreeBackground
                density={70}
                noiseIntensity={0.6}
                colorPalette={['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8']}
                interactiveStrength={0.4}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20"></div>

            {/* Hero content */}
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div
                            variants={{
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 }
                            }}
                            className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
                        >
                            {t('hero.greeting')}
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                            }}
                        >
                            {t('hero.name')}
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-16"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                            }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                {typingText}
                                <span className="animate-blink">|</span>
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                            }}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                            }}
                        >
                            <GradientButton
                                size="lg"
                                icon={<ExternalLink className="w-5 h-5" />}
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {t('hero.cta')}
                            </GradientButton>

                            <GradientButton
                                size="lg"
                                variant="secondary"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {t('hero.contact')}
                            </GradientButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full border-2 border-blue-500 dark:border-blue-400 flex justify-center items-center cursor-pointer bg-white/10 backdrop-blur-sm"
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <ArrowDown className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};