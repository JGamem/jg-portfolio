// src/app/components/sections/EnhancedAccessibilityStatement.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/app/lib/animation';
import { LiveRegion } from '@/app/components/ui/LiveRegion';

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

                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3>Features</h3>
                            <ul>
                                <motion.li variants={staggerItem}>
                                    <strong>Semantic HTML</strong> to ensure proper structure and navigation
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Color contrasts</strong> that meet or exceed WCAG 2.1 AA requirements
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Keyboard accessibility</strong> for all interactive elements
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Visible focus indicators</strong> for keyboard navigation
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Proper ARIA attributes</strong> where appropriate
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Alternative text</strong> for images and icons
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Responsive design</strong> that works on different devices and screen sizes
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Multiple theme options</strong> including high contrast mode
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Live regions</strong> for dynamic content announcements
                                </motion.li>
                                <motion.li variants={staggerItem}>
                                    <strong>Skip links</strong> to bypass navigation and go directly to main content
                                </motion.li>
                            </ul>
                        </motion.div>

                        <h3>Feedback</h3>
                        <p>
                            I welcome your feedback on the accessibility of this website. Please let me know if you encounter barriers or have suggestions for improvement.
                        </p>

                        <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
                            <h4 className="text-lg font-semibold">Testing Process</h4>
                            <p>
                                This website is regularly tested with:
                            </p>
                            <ul>
                                <li>NVDA and VoiceOver screen readers</li>
                                <li>Keyboard-only navigation</li>
                                <li>Color contrast analyzers</li>
                                <li>Automated accessibility evaluation tools</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Live region for assistive technologies */}
            <LiveRegion
                messages={[
                    {
                        id: 'accessibility-page',
                        content: 'Accessibility information page loaded',
                        type: 'status',
                        clearAfter: 3000,
                    }
                ]}
            />
        </section>
    );
};