import { Hero } from '@/app/components/sections/Hero';
import { About } from '@/app/components/sections/About';
import { Experience } from '@/app/components/sections/Experience';
import { Skills } from '@/app/components/sections/Skills';
import { Education } from '@/app/components/sections/Education';
import { Projects } from '@/app/components/sections/Projects';
import { Contact } from '@/app/components/sections/Contact';

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