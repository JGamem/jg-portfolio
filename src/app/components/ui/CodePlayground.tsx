// src/components/ui/CodePlayground.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CodePlaygroundProps {
    initialCode?: string;
    language?: 'javascript' | 'html' | 'css';
    height?: string;
    className?: string;
    readOnly?: boolean;
}

// Interfaz para la ventana del sandbox
interface SandboxWindow extends Window {
    console: {
        log: (...args: unknown[]) => void;
        error: (...args: unknown[]) => void;
        [key: string]: unknown;
    };
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
    initialCode = '',
    language = 'javascript',
    height = '300px',
    className = '',
    readOnly = false,
}) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('');
    const [error, setError] = useState<string | null>(null);

    const runCode = () => {
        setError(null);

        if (language === 'javascript') {
            try {
                // Create a sandbox to run the JavaScript
                const sandbox = document.createElement('iframe');
                sandbox.style.display = 'none';
                document.body.appendChild(sandbox);

                // Create a console.log override to capture output
                const logs: string[] = [];

                if (sandbox.contentWindow) {
                    // Usar interfaz personalizada en lugar de 'any'
                    const win = sandbox.contentWindow as unknown as SandboxWindow;

                    // Crear consola si no existe
                    if (!win.console) {
                        win.console = {
                            log: () => { },
                            error: () => { },
                        };
                    }

                    // Store original methods
                    const origLog = win.console.log;
                    const origError = win.console.error;

                    // Override console methods con parámetros rest
                    win.console.log = function (...params: unknown[]) {
                        logs.push(
                            params.map(function (arg) {
                                return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
                            }).join(' ')
                        );

                        // Call original method if it exists
                        if (typeof origLog === 'function') {
                            origLog.apply(win.console, params);
                        }
                    };

                    win.console.error = function (...params: unknown[]) {
                        logs.push(`Error: ${params.map(function (arg) { return String(arg); }).join(' ')}`);

                        // Call original method if it exists
                        if (typeof origError === 'function') {
                            origError.apply(win.console, params);
                        }
                    };

                    // Execute the code
                    try {
                        const scriptTag = sandbox.contentDocument?.createElement('script');
                        if (scriptTag) {
                            scriptTag.textContent = `
                try {
                ${code}
                } catch (error) {
                console.error(error.message);
                }
            `;
                            sandbox.contentDocument?.body.appendChild(scriptTag);
                        }
                    } catch (e) {
                        setError(e instanceof Error ? e.message : String(e));
                    }
                }

                // Set the output and clean up
                setOutput(logs.join('\n'));
                document.body.removeChild(sandbox);
            } catch (e) {
                setError(e instanceof Error ? e.message : String(e));
            }
        } else if (language === 'html') {
            // For HTML, we'll preview it in the output
            setOutput(`<div class="text-sm">HTML Preview:</div>`);
        } else if (language === 'css') {
            // For CSS, just show that it would be applied
            setOutput('CSS would be applied to the page');
        }
    };

    useEffect(() => {
        if (initialCode) {
            setCode(initialCode);
        }
    }, [initialCode]);

    return (
        <div className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden ${className}`}>
            <div className="bg-gray-900 p-4 flex justify-between items-center">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                    {language.toUpperCase()} Playground
                </div>
                {!readOnly && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={runCode}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                    >
                        Run
                    </motion.button>
                )}
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full bg-gray-800 text-gray-300 font-mono p-4 focus:outline-none resize-none"
                        style={{ height }}
                        readOnly={readOnly}
                        aria-label="Code editor"
                    />
                </div>

                {!readOnly && (
                    <div className="w-full md:w-1/2 flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-700">
                        <div className="bg-gray-900 p-2 text-xs text-gray-400 font-semibold">
                            Output
                        </div>
                        <div
                            className="p-4 h-[calc(100%-30px)] bg-gray-800 text-gray-300 font-mono overflow-auto"
                            dangerouslySetInnerHTML={{
                                __html: error ? `<span class="text-red-400">${error}</span>` : output,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};