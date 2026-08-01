import { Briefcase } from 'lucide-react';
import { DATA } from '../../data';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Meta from '../ui/Meta';
import Reveal from '../ui/Reveal';

/**
 * Promoted to the first content block after the hero: employment history is
 * what a recruiter scans first, and it was previously the last thing on a
 * route the nav barely surfaced.
 */
export default function ExperienceSection() {
    return (
        <Section id="experience" labelledBy="experience-heading">
            <SectionTitle icon={Briefcase} id="experience-heading">
                Experience
            </SectionTitle>

            <div className="space-y-10">
                {DATA.experience.map((exp, index) => (
                    <Reveal
                        as="article"
                        key={`${exp.company}-${exp.role}`}
                        index={index}
                        className="group relative border-l-2 border-line hover:border-fg pl-6 ml-1 transition-colors duration-base ease-brand"
                    >
                        <span
                            className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-fg-secondary group-hover:bg-fg transition-colors duration-base"
                            aria-hidden="true"
                        />

                        <header className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h3 className="text-[17px] font-bold tracking-[-0.01em] text-fg">
                                    {exp.role}
                                </h3>
                                <Meta as="time">
                                    {exp.start} &ndash; {exp.end}
                                </Meta>
                            </div>

                            <p className="text-sm text-fg-secondary">
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-fg hover:underline underline-offset-4 decoration-line-hover"
                                >
                                    {exp.company}
                                </a>
                                <span className="text-fg-muted"> &middot; {exp.context}</span>
                            </p>
                            <p className="text-sm text-fg-muted">{exp.location}</p>
                        </header>

                        <ul className="space-y-2 max-w-measure">
                            {exp.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="relative pl-4 text-sm leading-[1.55] text-fg-secondary before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-line-hover"
                                >
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
