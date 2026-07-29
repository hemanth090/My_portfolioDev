/**
 * Shape of the single DATA object in `data.ts`.
 *
 * These types exist so sections stop typing props as `any`, and so an explicit
 * annotation on DATA guarantees optional fields are present on every array
 * element rather than relying on TS array-literal union normalisation.
 */

export interface Contact {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    website: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Experience {
    role: string;
    company: string;
    /** The company's own descriptor, e.g. "Stock Research and Trading Analyst". */
    context: string;
    location: string;
    start: string;
    end: string;
    link: string;
    highlights: string[];
}

export interface Project {
    title: string;
    /** Secondary title fragment, e.g. "Token Efficiency Toolkit". */
    subtitle?: string;
    date: string;
    description: string;
    highlights: string[];
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    /** false = portfolio-only; excluded from the printed A4 resume. */
    inResume: boolean;
}

export interface Education {
    degree: string;
    school: string;
    location: string;
    score: number;
    period: string;
}

export interface Certification {
    name: string;
    date: string;
    url?: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    headline: string;
    bio: string;
    about: string;
    profileImage: string;
    contact: Contact;
    skills: SkillGroup[];
    projects: Project[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
}
