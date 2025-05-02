import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </>
    );
}