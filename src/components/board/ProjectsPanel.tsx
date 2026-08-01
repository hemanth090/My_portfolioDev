import { Github, ExternalLink } from 'lucide-react';
import { DATA } from '../../data';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import Meta from '../ui/Meta';

const LINK_CLASS =
    'inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm';

/** Three compact tiles: shipped work with live proof one click away. */
export default function ProjectsPanel() {
    return (
        <Card as="section" aria-labelledby="projects-heading" className="min-h-0">
            <Meta as="h2" id="projects-heading" className="mb-2">
                Projects
            </Meta>

            <div className="grid sm:grid-cols-3 gap-4">
                {DATA.projects.map((project) => (
                    <article key={project.title} className="flex flex-col min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-sm font-bold tracking-[-0.01em] text-fg truncate">
                                {project.title}
                            </h3>
                            <Meta as="time" className="shrink-0">
                                {project.date}
                            </Meta>
                        </div>
                        {project.subtitle && (
                            <p className="text-[11px] text-fg-muted truncate">{project.subtitle}</p>
                        )}

                        <p className="text-xs leading-[1.5] text-fg-secondary mt-1.5 line-clamp-2">
                            {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-1 mt-2" aria-label={`Technologies used in ${project.title}`}>
                            {project.technologies.map((tech) => (
                                <li key={tech}>
                                    <Chip>{tech}</Chip>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3.5 mt-auto pt-2.5">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${LINK_CLASS} text-fg hover:opacity-70`}
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
                                    className={`${LINK_CLASS} text-fg-secondary hover:text-fg`}
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
