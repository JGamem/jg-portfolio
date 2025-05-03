// src/app/components/ui/EnhancedThreeBackground.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThemeStore } from '@/app/store/theme';

interface ThreeJsBackgroundProps {
    density?: number;
    noiseIntensity?: number;
    colorPalette?: string[];
    interactiveStrength?: number;
}

class SimplexNoise {
    // Simple placeholder for the actual noise implementation
    noise3D(x: number, y: number, z: number): number {
        return (Math.sin(x) + Math.cos(y) + Math.sin(z)) / 3;
    }
}

export const EnhancedThreeBackground: React.FC<ThreeJsBackgroundProps> = ({
    density = 60,
    noiseIntensity = 0.4,
    colorPalette = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8'],
    interactiveStrength = 0.3,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const { theme } = useThemeStore();

    // Get preferred colors based on theme
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
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Create a more complex particle system
        const particleCount = density * 50;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesPositions = new Float32Array(particleCount * 3);
        const particlesSizes = new Float32Array(particleCount);
        const particlesColors = new Float32Array(particleCount * 3);

        // Simplex noise for more natural distribution
        const simplex = new SimplexNoise();

        // Generate particles with noise-based positioning and varied sizes/colors
        const colors = getThemeColors().map(color => new THREE.Color(color));

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Position with noise influence
            const theta = Math.random() * Math.PI * 2;
            const radius = 5 + Math.random() * 400;
            const noise = simplex.noise3D(radius * 0.01, theta * 0.5, 0) * noiseIntensity;

            // Apply noise to distribution
            particlesPositions[i3] = Math.cos(theta) * (radius + noise * 100);
            particlesPositions[i3 + 1] = Math.sin(theta) * (radius + noise * 100) * 0.7; // Flatten slightly for elliptical galaxy effect
            particlesPositions[i3 + 2] = (Math.random() - 0.5) * 150 + noise * 80;

            // Varied sizes
            particlesSizes[i] = (0.5 + Math.random() * 1.5) * (noise + 1);

            // Varied colors
            const colorIndex = Math.floor(Math.random() * colors.length);
            const color = colors[colorIndex];
            particlesColors[i3] = color.r;
            particlesColors[i3 + 1] = color.g;
            particlesColors[i3 + 2] = color.b;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particlesSizes, 1));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particlesColors, 3));

        // Create shader material for more advanced particle rendering
        const particlesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                mousePosition: { value: new THREE.Vector2(0, 0) },
                pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            },
            vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform vec2 mousePosition;
        
        void main() {
          vColor = color;
          
          // Apply time-based motion
          vec3 pos = position;
          float displacement = sin(pos.x * 0.05 + time) * 2.0 + 
                              cos(pos.y * 0.05 + time) * 2.0;
          
          // Apply mouse interaction
          float dist = distance(vec2(pos.x, pos.y), mousePosition * 200.0);
          float mouseEffect = max(0.0, 1.0 - dist / 100.0) * 10.0;
          
          // Combine effects
          pos.z += displacement + mouseEffect;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z) * pixelRatio;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Create soft particles
          vec2 coord = gl_PointCoord - vec2(0.5);
          float distance = length(coord);
          
          if(distance > 0.5) discard;
          
          // Smooth edge
          float alpha = 1.0 - smoothstep(0.4, 0.5, distance);
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
            transparent: true,
            depthTest: false,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Handle mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

            if (particlesMaterial.uniforms.mousePosition) {
                particlesMaterial.uniforms.mousePosition.value.x = mousePosition.current.x;
                particlesMaterial.uniforms.mousePosition.value.y = mousePosition.current.y;
            }
        };

        // Handle resize for responsive design
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Update pixel ratio uniform
            if (particlesMaterial.uniforms.pixelRatio) {
                particlesMaterial.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation loop
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Update uniforms
            if (particlesMaterial.uniforms.time) {
                particlesMaterial.uniforms.time.value = elapsedTime * 0.05;
            }

            // Rotate particle system
            particlesMesh.rotation.z = elapsedTime * 0.02;
            particlesMesh.rotation.x = Math.sin(elapsedTime * 0.03) * 0.02;

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
    }, [colorPalette, density, interactiveStrength, noiseIntensity, theme]);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10" aria-hidden="true" />
    );
};