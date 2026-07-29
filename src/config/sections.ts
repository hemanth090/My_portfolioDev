import { Home, Briefcase, FolderGit2, Terminal, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavSection {
    id: string;
    /** Accessible name for the rail button and its tooltip. */
    label: string;
    icon: LucideIcon;
}

/**
 * Document order. Drives the nav rail AND the scroll-spy observer.
 *
 * Module scope matters: these arrays get stable referential identity, so hook
 * dependency arrays never re-fire and tear down observers on every render.
 */
export const NAV_SECTIONS: readonly NavSection[] = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Technical Skills', icon: Terminal },
    { id: 'about', label: 'About', icon: User },
];

export const HERO_ID = 'hero';
export const CONTACT_ID = 'contact';

export const NAV_SECTION_IDS: readonly string[] = NAV_SECTIONS.map((s) => s.id);

/** Everything addressable by a hash, including sections absent from the rail. */
export const ANCHOR_IDS: readonly string[] = [...NAV_SECTION_IDS, CONTACT_ID];
