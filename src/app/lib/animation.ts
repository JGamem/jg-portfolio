// src/lib/animation.ts
import { Variants } from 'framer-motion';

// Page transitions
export const pageTransitions: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Staggered children container
export const staggerContainer: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// Staggered item variants
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Advanced parallax effect
export const generateParallaxVariants = (depth: number): Variants => {
    const strength = 0.05 * depth;
    return {
        initial: { y: 0 },
        animate: (scrollProgress: number) => ({
            y: scrollProgress * 100 * strength,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
            },
        }),
    };
};

// Text reveal animation
export const textReveal: Variants = {
    initial: {
        y: '100%',
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Image reveal animation
export const imageReveal: Variants = {
    initial: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    },
    animate: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
        }
    },
};

// Custom cursor states
export type CursorVariant = 'default' | 'text' | 'link' | 'button' | 'project';

export const cursorVariants = {
    default: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '1px solid rgba(60, 130, 246, 0.6)',
        x: -20,
        y: -20,
    },
    text: {
        width: 64,
        height: 64,
        backgroundColor: 'rgba(60, 130, 246, 0.05)',
        border: '1px solid rgba(60, 130, 246, 0.8)',
        x: -32,
        y: -32,
    },
    link: {
        width: 56,
        height: 56,
        backgroundColor: 'rgba(60, 130, 246, 0.1)',
        border: '1px solid rgba(60, 130, 246, 1)',
        x: -28,
        y: -28,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: 'rgba(60, 130, 246, 0.15)',
        border: '1px solid rgba(60, 130, 246, 1)',
        x: -28,
        y: -28,
    },
    project: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(60, 130, 246, 0.05)',
        border: '1px solid rgba(60, 130, 246, 0.8)',
        x: -40,
        y: -40,
        mixBlendMode: 'difference' as const,
    },
};

// Hover and tap animations for interactive elements
export const buttonHoverTap = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.15,
            ease: 'easeIn',
        },
    },
};

// Scroll-triggered animations
export const fadeInUpOnScroll: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// 3D card effect
export type MousePosition = { x: number; y: number };

export const card3DEffect = {
    rest: {
        rotateY: 0,
        rotateX: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    hover: (mousePosition: MousePosition) => {
        const { x, y } = mousePosition;
        const rotateX = -((y - 0.5) * 20);
        const rotateY = (x - 0.5) * 20;
        return {
            rotateX,
            rotateY,
            z: 50,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        };
    },
};

// Animated list item variants
export const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    hover: {
        scale: 1.02,
        x: 5,
        transition: {
            duration: 0.2,
            ease: 'easeOut'
        }
    }
};

// Fade in variants with direction
export const fadeInVariants = (direction: 'up' | 'down' | 'left' | 'right', distance = 50): Variants => {
    const directionMap = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance }
    };

    return {
        hidden: {
            opacity: 0,
            ...directionMap[direction]
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };
};

// Animated counter effect
export const countVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

// Wave animation for text characters
export const waveVariants = {
    hidden: { y: 0 },
    visible: (i: number) => ({
        y: [0, -15, 0],
        transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.5, 1]
        }
    })
};