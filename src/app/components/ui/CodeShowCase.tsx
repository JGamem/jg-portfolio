// src/app/components/ui/CodeShowcase.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeShowcaseProps {
    code: string;
    language: string;
    title?: string;
    description?: string;
    showLineNumbers?: boolean;
}

export const CodeShowcase: React.FC<CodeShowcaseProps> = ({
    code,
    language,
    title,
    description,
    showLineNumbers = true,
}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Split code into lines for line numbers
    const codeLines = code.split('\n');

    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 dark:bg-gray-950 mb-6">
            {/* Header */}
            <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex justify-between items-center">
                <div>
                    <div className="flex items-center">
                        <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        {title && (
                            <h3 className="text-white font-medium">{title}</h3>
                        )}
                    </div>
                    {description && (
                        <p className="text-gray-400 text-xs mt-1">{description}</p>
                    )}
                </div>
                <div className="flex items-center">
                    <span className="text-sm text-gray-400 mr-3">{language}</span>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={copyToClipboard}
                        className="p-2 rounded-md bg-gray-700 dark:bg-gray-800 text-gray-300 hover:bg-gray-600 transition-colors"
                    >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                    </motion.button>
                </div>
            </div>

            {/* Code block */}
            <div className="p-4 overflow-x-auto text-sm">
                <pre className="font-mono">
                    <code>
                        {showLineNumbers ? (
                            <table>
                                <tbody>
                                    {codeLines.map((line, index) => (
                                        <tr key={index} className="text-gray-300 leading-relaxed">
                                            <td className="text-right pr-4 text-gray-500 select-none">
                                                {index + 1}
                                            </td>
                                            <td>{line || ' '}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-gray-300 leading-relaxed">
                                {codeLines.map((line, index) => (
                                    <div key={index}>
                                        {line || ' '}
                                    </div>
                                ))}
                            </div>
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
};