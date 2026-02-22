import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Github, ChevronRight, ExternalLink, Code2 } from 'lucide-react';
import { DATA, dateFormatting } from '../data';
import SectionTitle from './SectionTitle';

const ProjectCard = memo(({ project, index }: { project: any; index: number }) => {
    // Bento grid logic: The first project spans 2 columns on medium+ screens
    const isFeatured = index === 0;

    return (
        <LazyMotion features={domAnimation}>
            <m.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-[2rem] bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-500 overflow-hidden hover-elastic flex flex-col h-full ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
            >
                {project.image && (
                    <div className={`relative overflow-hidden w-full ${isFeatured ? 'aspect-video md:aspect-[2/1] lg:aspect-[2.5/1]' : 'aspect-video'}`}>
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.title} project`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-t-[2rem]" aria-hidden="true" />
                    </div>
                )}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{project.title}</h3>
                        <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest shrink-0 ml-4">
                            {project.status || (project.date && dateFormatting.format(project.date))}
                        </span>
                    </div>
                    <p className={`text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow ${isFeatured ? 'text-base sm:max-w-2xl' : 'text-sm'}`}>
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Technologies used">
                        {project.tech.map((t: string) => (
                            <span key={t} role="listitem" className="px-3 py-1.5 text-[10px] font-mono font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] rounded border border-[var(--color-border)]">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-6 mt-auto">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm font-bold text-[var(--color-text-primary)] hover:opacity-80 transition-opacity"
                                aria-label={`View live demo of ${project.title}`}
                            >
                                Live Demo <ExternalLink className="w-4 h-4 ml-1.5" aria-hidden="true" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                aria-label={`View source code of ${project.title} on GitHub`}
                            >
                                Source <Github className="w-4 h-4 ml-1.5" aria-hidden="true" />
                            </a>
                        )}
                        {!project.link && !project.github && (
                            <div className="flex items-center text-sm font-bold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
                                View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </div>
                        )}
                    </div>
                </div>
            </m.article>
        </LazyMotion>
    );
});
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
