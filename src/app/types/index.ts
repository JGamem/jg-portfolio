// Project type
export interface Project {
    title: string;
    description: string;
    technologies: string[];
}

// Role type
export interface Role {
    title: string;
    company: string;
    period: string;
    description: string;
}

// Degree type
export interface Degree {
    title: string;
    institution: string;
    period: string;
    status: string;
}

// Language type
export interface Language {
    name: string;
    level: string;
}

// Certificate type
export interface Certificate {
    name: string;
}