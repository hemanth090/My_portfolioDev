import { Github, Linkedin, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { DATA } from '../../data';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const CONTACT_LINK =
    'inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-accent transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm';

/**
 * The identity band: who, what, and every way to act - visible without a
 * single scroll. Doubles as the page header landmark.
 */
export default function IdentityPanel() {
    const { contact } = DATA;

    return (
        <Card as="header" padding="none" className="panel-in px-4 py-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <img
                    src={DATA.profileImage}
                    alt={`Portrait of ${DATA.name}`}
                    width={48}
                    height={48}
                    fetchPriority="high"
                    className="w-12 h-12 rounded-control object-cover border border-line"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                        <h1 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-fg">
                            {DATA.name}
                        </h1>
                        <p className="text-sm font-semibold text-accent">{DATA.title}</p>
                    </div>
                    <p className="text-[13px] text-fg-muted leading-snug mt-0.5 max-w-[72ch]">
                        {DATA.headline}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                        <li>
                            <a href={`mailto:${contact.email}`} className={CONTACT_LINK}>
                                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                                {contact.email}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className={CONTACT_LINK}>
                                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                                {contact.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className={CONTACT_LINK}>
                                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                                {contact.website}
                            </a>
                        </li>
                        <li className="inline-flex items-center gap-1.5 text-xs text-fg-muted">
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {contact.location}
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        Resume
                    </Button>
                    <Button as="a" variant="icon" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <Github className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <Button as="a" variant="icon" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </Card>
    );
}
