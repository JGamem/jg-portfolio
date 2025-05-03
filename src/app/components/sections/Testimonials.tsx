// src/components/sections/Testimonials.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
    content: string;
    author: string;
    role: string;
    company?: string;
    image?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
    testimonials,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Client Testimonials
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-8"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 text-blue-100 dark:text-blue-900/30 transform rotate-12">
                        <Quote size={120} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 relative z-10">
                                    {currentTestimonial.content}
                                </p>

                                <div className="flex flex-col items-center">
                                    {currentTestimonial.image && (
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                                            <Image
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.author}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {currentTestimonial.author}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {currentTestimonial.role}
                                            {currentTestimonial.company && ` • ${currentTestimonial.company}`}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation controls */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex space-x-2 items-center">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-blue-600 dark:bg-blue-400 w-4'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};