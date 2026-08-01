import { Github, Linkedin, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { DATA } from '../../data';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const CONTACT_LINK =
    'inline-flex items-center gap-1.5 text-sm lg:text-xs text-fg-muted hover:text-accent transition-colors duration-fast py-0.5 [overflow-wrap:anywhere] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm';

/**
 * The identity band. Mobile-first: an explicit vertical stack (avatar+name,
 * headline, contacts, actions) so wrap order is designed, not left to
 * flex-wrap. From lg it compresses into the one-line desktop band.
 */
export default function IdentityPanel() {
    const { contact } = DATA;

    return (
        <Card as="header" padding="none" className="panel-in relative p-4 sm:p-5 lg:px-4 lg:py-3">
            {/* Page utility, not an identity action: it lives in the corner,
                away from the Resume/GitHub/LinkedIn row where it read as a
                mystery fourth profile link. */}
            <div className="absolute right-2.5 top-2.5 lg:top-1/2 lg:-translate-y-1/2 lg:right-3">
                <ThemeToggle />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5 pr-10 sm:pr-12 lg:pr-14">
                {/* Who */}
                <div className="flex items-center gap-3.5 min-w-0">
                    <img
                        src={DATA.profileImage}
                        alt={`Portrait of ${DATA.name}`}
                        width={56}
                        height={56}
                        fetchPriority="high"
                        className="w-14 h-14 lg:w-12 lg:h-12 rounded-control object-cover border border-line shrink-0"
                    />
                    <div className="min-w-0">
                        <h1 className="font-display text-[clamp(1.5rem,5.5vw,1.875rem)] lg:text-2xl font-bold tracking-[-0.02em] leading-tight text-fg">
                            {DATA.name}
                        </h1>
                        <p className="text-sm font-semibold text-accent mt-0.5">{DATA.title}</p>
                    </div>
                </div>

                {/* What + how to reach */}
                <div className="min-w-0 lg:flex-1">
                    <p className="text-[15px] lg:text-[13px] text-fg-muted leading-normal lg:leading-snug max-w-[72ch]">
                        {DATA.headline}
                    </p>
                    <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1 mt-2.5 lg:mt-1.5">
                        <li className="min-w-0">
                            <a href={`mailto:${contact.email}`} className={CONTACT_LINK}>
                                <Mail className="w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0" aria-hidden="true" />
                                {contact.email}
                            </a>
                        </li>
                        <li className="min-w-0">
                            <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className={CONTACT_LINK}>
                                <Phone className="w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0" aria-hidden="true" />
                                {contact.phone}
                            </a>
                        </li>
                        <li className="min-w-0">
                            <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className={CONTACT_LINK}>
                                <Globe className="w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0" aria-hidden="true" />
                                {contact.website}
                            </a>
                        </li>
                        <li className="inline-flex items-center gap-1.5 text-sm lg:text-xs text-fg-muted py-0.5 min-w-0">
                            <MapPin className="w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0" aria-hidden="true" />
                            {contact.location}
                        </li>
                    </ul>
                </div>

                {/* Act */}
                <div className="flex flex-wrap items-center gap-2 lg:shrink-0">
                    <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        Resume
                    </Button>
                    <Button as="a" variant="icon" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <Github className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <Button as="a" variant="icon" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
