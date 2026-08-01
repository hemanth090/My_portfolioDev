import { Github, ExternalLink, Code2 } from 'lucide-react';
import { DATA } from '../../data';
import type { Project } from '../../types';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import Meta from '../ui/Meta';
import Reveal from '../ui/Reveal';

const LINK_CLASS =
    'inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg-subtle';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const headingId = `project-${project.title.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <Reveal index={index} className="h-full">
            <Card as="article" interactive padding="none" className="group flex flex-col h-full overflow-hidden">
                {project.image && (
                    <div className="relative aspect-video overflow-hidden border-b border-line">
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 ease-brand scale-[1.02] group-hover:scale-100"
                        />
                    </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 id={headingId} className="text-[17px] font-bold tracking-[-0.01em] text-fg">
                            {project.title}
                        </h3>
                        <Meta className="shrink-0">{project.date}</Meta>
                    </div>

                    {project.subtitle && (
                        <p className="text-sm text-fg-muted mb-3">{project.subtitle}</p>
                    )}

                    <p className="text-sm leading-[1.55] text-fg-secondary mb-4">
                        {project.description}
                    </p>

                    {project.highlights.length > 0 && (
                        <ul className="space-y-1.5 mb-5">
                            {project.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="relative pl-4 text-[13px] leading-[1.5] text-fg-secondary before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:bg-line-hover"
                                >
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    )}

                    <ul className="flex flex-wrap gap-2 mb-6 mt-auto" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech) => (
                            <li key={tech}>
                                <Chip variant="mono">{tech}</Chip>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-5">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${LINK_CLASS} text-fg hover:opacity-70`}
                                aria-label={`View live demo of ${project.title}`}
                            >
                                Live demo <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${LINK_CLASS} text-fg-secondary hover:text-fg`}
                                aria-label={`View source of ${project.title} on GitHub`}
                            >
                                Source <Github className="w-4 h-4" aria-hidden="true" />
                            </a>
                        )}
                    </div>
                </div>
            </Card>
        </Reveal>
    );
}

export default function ProjectsSection() {
    return (
        <Section id="projects" labelledBy="projects-heading">
            <SectionTitle icon={Code2} id="projects-heading">
                Projects
            </SectionTitle>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {DATA.projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}
