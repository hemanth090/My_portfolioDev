import { Github, ExternalLink } from 'lucide-react';
import { DATA } from '../../data';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import Meta from '../ui/Meta';

const LINK_CLASS =
    'inline-flex items-center gap-1 text-sm lg:text-xs font-semibold py-2 lg:py-0 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm';

/** Three compact tiles: shipped work with live proof one click away. */
export default function ProjectsPanel() {
    return (
        <Card as="section" aria-labelledby="projects-heading" className="min-h-0">
            <Meta as="h2" id="projects-heading" tone="accent" className="mb-2">
                Projects
            </Meta>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-4">
                {DATA.projects.map((project) => (
                    <article key={project.title} className="flex flex-col min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                            <h3 className="text-base lg:text-sm font-bold tracking-[-0.01em] text-fg [overflow-wrap:anywhere]">
                                {project.title}
                            </h3>
                            <Meta as="time" className="shrink-0">
                                {project.date}
                            </Meta>
                        </div>
                        {project.subtitle && (
                            <p className="text-xs lg:text-[11px] text-fg-muted [overflow-wrap:anywhere]">{project.subtitle}</p>
                        )}

                        <p className="text-sm lg:text-xs leading-[1.5] text-fg-secondary mt-1.5 line-clamp-3 lg:line-clamp-2">
                            {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-1 mt-2" aria-label={`Technologies used in ${project.title}`}>
                            {project.technologies.map((tech) => (
                                <li key={tech}>
                                    <Chip>{tech}</Chip>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4 mt-auto pt-2.5">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${LINK_CLASS} text-accent hover:opacity-75`}
                                    aria-label={`Live demo of ${project.title}`}
                                >
                                    Live <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${LINK_CLASS} text-fg-muted hover:text-accent`}
                                    aria-label={`Source of ${project.title} on GitHub`}
                                >
                                    Source <Github className="w-3.5 h-3.5" aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </Card>
    );
}
