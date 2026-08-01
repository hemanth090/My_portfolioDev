import { DATA } from '../../data';
import Card from '../ui/Card';
import Meta from '../ui/Meta';

/**
 * The dominant panel. Employment history is what a recruiter checks first, so
 * it gets the tallest cell and every resume bullet, uncut.
 */
export default function ExperiencePanel() {
    return (
        <Card as="section" aria-labelledby="experience-heading" className="flex flex-col min-h-0 lg:overflow-y-auto">
            <Meta as="h2" id="experience-heading" className="mb-2">
                Experience
            </Meta>

            {DATA.experience.map((exp) => (
                <article key={`${exp.company}-${exp.role}`} className="flex flex-col min-h-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                        <h3 className="text-base font-bold tracking-[-0.01em] text-fg">{exp.role}</h3>
                        <Meta as="time">
                            {exp.start} &ndash; {exp.end}
                        </Meta>
                    </div>

                    <p className="text-[13px] text-fg-secondary mt-0.5">
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-fg hover:underline underline-offset-4 decoration-line-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                        >
                            {exp.company}
                        </a>
                        <span className="text-fg-muted"> &middot; {exp.context} &middot; {exp.location}</span>
                    </p>

                    <ul className="mt-2.5 space-y-1.5">
                        {exp.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="relative pl-3.5 text-[13px] leading-[1.45] text-fg-secondary before:absolute before:left-0 before:top-[0.62em] before:w-1 before:h-1 before:rounded-full before:bg-line-hover"
                            >
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </Card>
    );
}
