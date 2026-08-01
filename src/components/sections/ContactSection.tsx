import { Mail, Phone, MapPin, Globe, Github, Linkedin, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { DATA } from '../../data';
import { CONTACT_ID } from '../../config/sections';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Meta from '../ui/Meta';

interface ContactRow {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
}

/**
 * Ends the page on the action.
 *
 * This is also the first place `contact.phone` is rendered — it has been in
 * the data all along with no surface to appear on.
 */
export default function ContactSection() {
    const rows: ContactRow[] = [
        { icon: Mail, label: 'Email', value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
        { icon: Phone, label: 'Phone', value: DATA.contact.phone, href: `tel:${DATA.contact.phone.replace(/[^+\d]/g, '')}` },
        { icon: MapPin, label: 'Location', value: DATA.contact.location },
        { icon: Globe, label: 'Website', value: DATA.contact.website, href: `https://${DATA.contact.website}` },
        { icon: Github, label: 'GitHub', value: 'hemanth090', href: DATA.contact.github },
        { icon: Linkedin, label: 'LinkedIn', value: 'hemanthkokkonda', href: DATA.contact.linkedin },
    ];

    return (
        <Section id={CONTACT_ID} labelledBy="contact-heading">
            <SectionTitle icon={Send} id="contact-heading">
                Contact
            </SectionTitle>

            <Card as="address" className="not-italic">
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                    {rows.map(({ icon: Icon, label, value, href }) => (
                        <li key={label} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 mt-1 shrink-0 text-fg-muted" aria-hidden="true" />
                            <div className="min-w-0">
                                <Meta as="p" className="mb-0.5">
                                    {label}
                                </Meta>
                                {href ? (
                                    <a
                                        href={href}
                                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="text-sm text-fg hover:underline underline-offset-4 decoration-line-hover break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg-subtle"
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    <p className="text-sm text-fg break-words">{value}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </Card>
        </Section>
    );
}
