import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Github, ChevronRight, ExternalLink, Code2 } from 'lucide-react';
import { DATA, dateFormatting } from '../data';
import SectionTitle from './SectionTitle';

const ProjectCard = memo(({ project, index }: { project: any; index: number }) => (
    <LazyMotion features={domAnimation}>
        <m.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 overflow-hidden"
        >
            {project.image && (
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={project.image}
                        alt={`Screenshot of ${project.title} project`}
                        loading="lazy"
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-[var(--color-text-primary)]">{project.title}</h3>
                    <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                        {project.status || (project.date && dateFormatting.format(project.date))}
                    </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                    {project.tech.map((t: string) => (
                        <span key={t} role="listitem" className="px-2 py-1 text-[10px] font-mono bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded border border-[var(--color-border)]">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                            aria-label={`View live demo of ${project.title}`}
                        >
                            Live Demo <ExternalLink className="w-3 h-3 ml-1" aria-hidden="true" />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                            aria-label={`View source code of ${project.title} on GitHub`}
                        >
                            Source <Github className="w-3 h-3 ml-1" aria-hidden="true" />
                        </a>
                    )}
                    {!project.link && !project.github && (
                        <div className="flex items-center text-xs font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>
                    )}
                </div>
            </div>
        </m.article>
    </LazyMotion>
));
ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = memo(() => (
    <section id="projects" className="mb-24 sm:mb-32" aria-label="Featured Projects">
        <SectionTitle icon={Code2}>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {DATA.projects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
            ))}
        </div>
    </section>
));
ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
