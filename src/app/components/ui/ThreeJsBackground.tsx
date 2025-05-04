'use client';

import React, { useRef, useEffect } from 'react';
import { useThemeStore } from '@/app/store/theme';
import * as THREE from 'three';

interface ThreeJsBackgroundProps {
    density?: number;
    noiseIntensity?: number;
    colorPalette?: string[];
    interactiveStrength?: number;
}

export const ThreeJsBackground: React.FC<ThreeJsBackgroundProps> = ({
    density = 25, // Reduced from 60
    colorPalette = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8'],
    interactiveStrength = 0.2, // Reduced from 0.3
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const { theme } = useThemeStore();

    // Get preferred colors based on theme with reduced opacity
    const getThemeColors = () => {
        if (theme === 'dark') {
            return ['#1e40af', '#3b82f6', '#60a5fa', '#1d4ed8', '#2563eb'];
        } else if (theme === 'high-contrast') {
            return ['#000080', '#0000ff', '#4040ff', '#6060ff', '#0000b3'];
        }
        return colorPalette;
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup with dynamic FOV based on screen size
        const fov = window.innerWidth > 768 ? 75 : 60;
        const camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 350;

        // Renderer with anti-aliasing and higher pixel ratio
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio for performance
        containerRef.current.appendChild(renderer.domElement);

        // Create a simpler particle system for better performance
        const particleCount = density * 30; // Reduced multiplication factor
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesPositions = new Float32Array(particleCount * 3);
        const particlesSizes = new Float32Array(particleCount);
        const particlesColors = new Float32Array(particleCount * 3);

        // Generate particles with varied sizes/colors
        const colors = getThemeColors().map(color => new THREE.Color(color));

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Position particles in a sphere with more space
            const theta = Math.random() * Math.PI * 2;
            const radius = 20 + Math.random() * 300; // More spread out

            particlesPositions[i3] = Math.cos(theta) * radius;
            particlesPositions[i3 + 1] = Math.sin(theta) * radius * 0.6;
            particlesPositions[i3 + 2] = (Math.random() - 0.5) * 120;

            // Smaller, less intrusive particles
            particlesSizes[i] = 0.5 + Math.random();

            // Varied colors with more transparency
            const colorIndex = Math.floor(Math.random() * colors.length);
            const color = colors[colorIndex];
            particlesColors[i3] = color.r;
            particlesColors[i3 + 1] = color.g;
            particlesColors[i3 + 2] = color.b;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particlesSizes, 1));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particlesColors, 3));

        // Create material with more transparency
        const particlesMaterial = new THREE.PointsMaterial({
            size: 2.5,
            sizeAttenuation: true,
            vertexColors: true,
            transparent: true,
            opacity: 0.6, // More transparent
            alphaTest: 0.3
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Handle mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Handle resize for responsive design
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation loop with reduced animation speed
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Gentler rotation
            particlesMesh.rotation.z = elapsedTime * 0.01; // Slower rotation
            particlesMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.01;

            // Render
            renderer.render(scene, camera);

            requestAnimationFrame(animate);
        };

        animate();

        // Clean up
        return () => {
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            // Dispose resources
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            scene.clear();
        };
    }, [colorPalette, density, interactiveStrength, theme]);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10" aria-hidden="true" />
    );
};