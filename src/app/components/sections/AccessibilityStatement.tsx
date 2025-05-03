// src/components/sections/AccessibilityStatement.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AccessibilityStatement: React.FC = () => {
    return (
        <section id="accessibility" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Accessibility Statement
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p>
                            I am committed to ensuring digital accessibility for people of all abilities.
                            I continually improve the user experience and apply relevant accessibility standards.
                        </p>

                        <h3>Conformance Status</h3>
                        <p>
                            This website has been designed to be compatible with WCAG 2.1 Level AA standards.
                            I regularly test my website using both automated tools and manual testing with assistive technologies.
                        </p>

                        <h3>Features</h3>
                        <ul>
                            <li>Semantic HTML to ensure proper structure and navigation</li>
                            <li>Color contrasts that meet or exceed WCAG 2.1 AA requirements</li>
                            <li>Keyboard accessibility for all interactive elements</li>
                            <li>Visible focus indicators for keyboard navigation</li>
                            <li>Proper ARIA attributes where appropriate</li>
                            <li>Alternative text for images and icons</li>
                            <li>Responsive design that works on different devices and screen sizes</li>
                            <li>Multiple theme options including high contrast mode</li>
                        </ul>

                        <h3>Feedback</h3>
                        <p>
                            I welcome your feedback on the accessibility of this website. Please let me know if you encounter barriers or have suggestions for improvement.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};