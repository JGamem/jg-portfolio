'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
    hero: {
        greeting: 'Hello, I am',
        name: 'Juan G.',
        title: 'Fullstack Developer',
        description: 'I build innovative and scalable web applications with modern technologies.',
        cta: 'View My Work',
        contact: 'Contact Me',
    },
    about: {
        title: 'About Me',
        description: 'As a software developer with four years of experience, I stand out for my work ethic and professionalism in every project. I have a strong desire to learn and grow, always looking for new technologies and best practices. I enjoy collaborating in teams and value constructive feedback. My goal is to develop innovative solutions creatively and contribute to the company\'s success by leveraging my knowledge and experience.',
        yearsOfExperience: 'Years of Experience',
        completedProjects: 'Completed Projects',
        technologies: 'Technologies',
    },
    experience: {
        title: 'Work Experience',
        current: 'Present',
        roles: [
            {
                title: 'Fullstack Developer Mid',
                company: 'Genpact',
                period: 'August 2024 - Present',
                description: 'As a Full-Stack Developer, I specialize in AWS, React, TypeScript, and Python, with experience in serverless architectures using AWS Lambda for artificial intelligence applications. I integrate LLMs through Amazon Bedrock to optimize data processing, offering innovative and high-impact solutions.',
            },
            {
                title: 'Backend Developer Jr',
                company: 'Yalutec',
                period: 'June 2022 - August 2024',
                description: 'As a Junior Backend Developer, I have experience in Node.js, JavaScript, and AWS (S3, Lambda), developing RESTful APIs and optimizing databases in Linux environments. I stand out for my quick learning, problem-solving, and teamwork, always focused on creating efficient and scalable solutions.',
            },
        ],
    },
    skills: {
        title: 'Technical Skills',
        hardSkills: 'Hard Skills',
        softSkills: 'Soft Skills',
        languages: 'Languages',
        hard: [
            'Backend development with JavaScript and Node.js',
            'Frontend development with React and TypeScript',
            'Backend development with C# and .NET Framework',
            'Development with PHP using Laravel and Symfony Framework',
            'Web services (REST API, SOAP)',
            'Databases: SQL, MongoDB, MariaDB',
            'Version control: GitHub and GitLab',
            'AWS Services: Lambda, S3, and API Gateway',
            'Linux fundamentals certification',
        ],
        soft: [
            'Proactivity',
            'Organization',
            'Responsibility',
            'Teamwork capability',
            'Interpersonal relationships',
            'Empathy',
            'Leadership',
            'Team management',
            'Problem solving',
            'Agility in task development',
        ],
        languagesList: [
            {
                name: 'English',
                level: 'Advanced (C1)',
            },
            {
                name: 'Portuguese',
                level: 'Basic (A2)',
            },
            {
                name: 'Spanish',
                level: 'Native',
            },
        ],
    },
    education: {
        title: 'Education',
        degrees: [
            {
                title: 'Systems Engineering',
                institution: 'Universidad Mariano Gálvez',
                period: '2022 - 2026',
                status: 'In Progress',
            },
            {
                title: 'Computer Engineering',
                institution: 'Universidad Rafael Landívar',
                period: '2018 - 2023',
                status: 'Completed Curriculum',
            },
        ],
        certifications: {
            title: 'Technical Careers & Certifications',
            list: [
                'Fullstack Developer Technician',
                'Network Administration and Security Technician',
                'Linux Server Installation and Administration Technician',
                'Structured Cabling and Fiber Optics Technician',
                'Linux Fundamentals Certification',
            ],
        },
    },
    projects: {
        title: 'Projects',
        description: 'Here are some of the projects I\'ve worked on',
        viewAll: 'View All Projects',
        items: [
            {
                title: 'AI-Powered Data Processing',
                description: 'Serverless application using AWS Lambda and Amazon Bedrock to process and analyze large datasets with LLM integration.',
                technologies: ['AWS', 'Python', 'React', 'TypeScript'],
            },
            {
                title: 'Enterprise Web Application',
                description: 'Scalable web application with complex business logic and multiple integrations with third-party services.',
                technologies: ['Node.js', 'React', 'MongoDB', 'AWS'],
            },
            {
                title: 'RESTful API Development',
                description: 'High-performance RESTful API for data management with comprehensive documentation and security features.',
                technologies: ['Node.js', 'Express', 'SQL', 'Docker'],
            },
        ],
    },
    contact: {
        title: 'Contact Me',
        description: 'Feel free to reach out for collaboration or questions',
        form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
        },
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
    },
    nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact',
    },
    theme: {
        dark: 'Dark Mode',
        light: 'Light Mode',
    },
    language: {
        en: 'English',
        es: 'Spanish',
    },
    footer: {
        rights: 'All rights reserved.',
    },
};

// Spanish translations
const esTranslations = {
    hero: {
        greeting: 'Hola, yo soy',
        name: 'Juan G.',
        title: 'Desarrollador Fullstack',
        description: 'Construyo aplicaciones web innovadoras y escalables con tecnologías modernas.',
        cta: 'Ver Mi Trabajo',
        contact: 'Contáctame',
    },
    about: {
        title: 'Sobre Mí',
        description: 'Como desarrollador de software con cuatro años de experiencia, me distingo por mi ética de trabajo y profesionalismo en cada proyecto. Tengo un fuerte deseo de aprender y crecer, siempre buscando nuevas tecnologías y mejores prácticas. Disfruto colaborar en equipo y valoro la retroalimentación constructiva. Mi objetivo es desarrollar soluciones innovadoras de manera creativa y contribuir al éxito de la empresa aprovechando mi conocimiento y experiencia.',
        yearsOfExperience: 'Años de Experiencia',
        completedProjects: 'Proyectos Completados',
        technologies: 'Tecnologías',
    },
    experience: {
        title: 'Experiencia Laboral',
        current: 'Actual',
        roles: [
            {
                title: 'Desarrollador Fullstack Mid',
                company: 'Genpact',
                period: 'Agosto 2024 - Actualmente',
                description: 'Como Desarrollador Full-Stack, me especializo en AWS, React, TypeScript y Python, con experiencia en arquitecturas serverless utilizando AWS Lambda para aplicaciones de inteligencia artificial. Integro LLMs a través de Amazon Bedrock para optimizar el procesamiento de datos, ofreciendo soluciones innovadoras y de alto impacto.',
            },
            {
                title: 'Desarrollador Backend Jr',
                company: 'Yalutec',
                period: 'Junio 2022 - Agosto 2024',
                description: 'Como Desarrollador Backend Junior, tengo experiencia en Node.js, JavaScript y AWS (S3, Lambda), desarrollando APIs RESTful y optimizando bases de datos en entornos Linux. Me destaco por mi aprendizaje rápido, resolución de problemas y trabajo en equipo, siempre enfocado en crear soluciones eficientes y escalables.',
            },
        ],
    },
    skills: {
        title: 'Habilidades',
        hardSkills: 'Habilidades Técnicas',
        softSkills: 'Habilidades Blandas',
        languages: 'Idiomas',
        hard: [
            'Desarrollo backend con JavaScript y Node.js',
            'Desarrollo frontend con React y TypeScript',
            'Desarrollo backend con C# y .NET Framework',
            'Desarrollo con PHP utilizando Laravel y Symfony Framework',
            'Servicios web (API REST, SOAP)',
            'Bases de datos: SQL, MongoDB, MariaDB',
            'Control de versiones: GitHub y GitLab',
            'Servicios de AWS: Lambda, S3 y API Gateway',
            'Certificación en fundamentos de Linux',
        ],
        soft: [
            'Proactividad',
            'Organización',
            'Responsabilidad',
            'Capacidad de trabajo en equipo',
            'Relaciones interpersonales',
            'Empatía',
            'Liderazgo',
            'Dirección de equipos',
            'Resolución de problemas',
            'Agilidad en el desarrollo de tareas',
        ],
        languagesList: [
            {
                name: 'Inglés',
                level: 'Avanzado (C1)',
            },
            {
                name: 'Portugués',
                level: 'Básico (A2)',
            },
            {
                name: 'Italiano',
                level: 'A1',
            },
            {
                name: 'Español',
                level: 'Nativo',
            }
        ],
    },
    education: {
        title: 'Educación',
        degrees: [
            {
                title: 'Ingeniería en Sistemas',
                institution: 'Universidad Mariano Gálvez',
                period: '2022 - 2026',
                status: 'Cursando',
            },
            {
                title: 'Ingeniería en Informática',
                institution: 'Universidad Rafael Landívar',
                period: '2018 - 2023',
                status: 'Pensum Cerrado',
            },
        ],
        certifications: {
            title: 'Carreras Técnicas y Certificaciones',
            list: [
                'Técnico desarrollador fullstack',
                'Técnico en administración y seguridad de redes',
                'Técnico en instalación y administración de servidores Linux',
                'Técnico en cableado estructurado y fibra óptica',
                'Certificación en fundamentos de Linux',
            ],
        },
    },
    projects: {
        title: 'Proyectos',
        description: 'Aquí hay algunos de los proyectos en los que he trabajado',
        viewAll: 'Ver Todos los Proyectos',
        items: [
            {
                title: 'Procesamiento de Datos con IA',
                description: 'Aplicación serverless utilizando AWS Lambda y Amazon Bedrock para procesar y analizar grandes conjuntos de datos con integración de LLM.',
                technologies: ['AWS', 'Python', 'React', 'TypeScript'],
            },
            {
                title: 'Aplicación Web Empresarial',
                description: 'Aplicación web escalable con lógica de negocio compleja y múltiples integraciones con servicios de terceros.',
                technologies: ['Node.js', 'React', 'MongoDB', 'AWS'],
            },
            {
                title: 'Desarrollo de API RESTful',
                description: 'API RESTful de alto rendimiento para gestión de datos con documentación completa y características de seguridad.',
                technologies: ['Node.js', 'Express', 'SQL', 'Docker'],
            },
        ],
    },
    contact: {
        title: 'Contáctame',
        description: 'Siéntete libre de contactarme para colaboración o preguntas',
        form: {
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
        },
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        location: 'Ubicación',
    },
    nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        education: 'Educación',
        projects: 'Proyectos',
        contact: 'Contacto',
    },
    theme: {
        dark: 'Modo Oscuro',
        light: 'Modo Claro',
    },
    language: {
        en: 'Inglés',
        es: 'Español',
    },
    footer: {
        rights: 'Todos los derechos reservados.',
    },
};

// Initialize i18next
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            es: {
                translation: esTranslations,
            },
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

// Workaround for the TypeScript error by defining a simpler useTranslation hook
import { useTranslation as useI18nTranslation } from 'react-i18next';

export function useTranslation() {
    const { t, i18n: i18nInstance } = useI18nTranslation();

    // Using a more specific type for options
    function typedT<T>(key: string, options?: Record<string, unknown>): T {
        return t(key, options || {}) as T;
    }

    return {
        t: typedT,
        currentLanguage: i18nInstance.language,
        changeLanguage: (language: string) => i18nInstance.changeLanguage(language)
    };
}