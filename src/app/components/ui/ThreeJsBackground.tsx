// src/components/ui/ThreeJsBackground.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeJsBackgroundProps {
    color?: string;
    particleCount?: number;
    particleSize?: number;
    particleSpeed?: number;
}

export const ThreeJsBackground: React.FC<ThreeJsBackgroundProps> = ({
    color = '#3b82f6',
    particleCount = 1000,
    particleSize = 1.5,
    particleSpeed = 0.001,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 350;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = particleCount;
        const posArray = new Float32Array(particlesCount * 3);

        // Position particles randomly in 3D space
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 1000;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: particleSize,
            transparent: true,
            color: color,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });

        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.1;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate particles slowly
            particlesMesh.rotation.x += particleSpeed;
            particlesMesh.rotation.y += particleSpeed * 0.8;

            // Follow mouse with some delay
            particlesMesh.position.x += (mouseX - particlesMesh.position.x) * 0.05;
            particlesMesh.position.y += (-mouseY - particlesMesh.position.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [color, particleCount, particleSize, particleSpeed]);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10" />
    );
};