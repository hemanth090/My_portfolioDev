import { FileText } from 'lucide-react';
import { DATA } from '../../data';
import { HERO_ID, CONTACT_ID } from '../../config/sections';
import { goToSection } from '../../lib/scroll';

const LINK_CLASS =
    'text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-secondary hover:text-fg transition-colors duration-fast rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg-muted';

export default function SiteFooter() {
    // pb-28 below lg: the fixed bottom nav pill occupies the viewport-bottom
    // band on mobile, and without clearance it sits on top of these links,
    // including the Resume PDF link.
    return (
        <footer className="border-t border-line pt-12 pb-28 lg:pb-12 bg-bg-muted print:hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <a
                    href={`#${HERO_ID}`}
                    onClick={(event) => {
                        event.preventDefault();
                        goToSection(HERO_ID);
                    }}
                    className="text-xs text-fg-secondary font-mono hover:text-fg transition-colors duration-fast rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg-muted"
                >
                    &copy; {new Date().getFullYear()} {DATA.name}
                </a>

                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
                    <a href={DATA.contact.github} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                        GitHub
                    </a>
                    <a href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                        LinkedIn
                    </a>
                    {/* Opens the actual resume PDF (public/resume.pdf). Ctrl+P
                        still produces the print-CSS A4 document as a fallback. */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${LINK_CLASS} inline-flex items-center gap-1.5`}
                    >
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        Resume
                    </a>
                    <a
                        href={`#${CONTACT_ID}`}
                        onClick={(event) => {
                            event.preventDefault();
                            goToSection(CONTACT_ID);
                        }}
                        className={LINK_CLASS}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    );
}
