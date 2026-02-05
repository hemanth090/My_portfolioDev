import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Terminal, Cpu, Award, Briefcase } from 'lucide-react';
import { DATA, numberFormatting } from '../data';
import SectionTitle from './SectionTitle';

const SkillsEducationSection = memo(() => (
    <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">
        <div>
            {/* Skills */}
            <section id="skills" aria-label="Technical Skills" className="mb-12 sm:mb-16">
                <SectionTitle icon={Terminal}>Skills</SectionTitle>
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                    {DATA.skills.map((skill) => (
                        <LazyMotion features={domAnimation} key={skill.category}>
                            <m.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-widest mb-4 sm:mb-6 border-b border-[var(--color-border)] pb-2">
                                    {skill.category}
                                </h3>
                                <ul className="flex flex-wrap gap-x-6 gap-y-3" role="list">
                                    {skill.items.map(item => (
                                        <li key={item} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm cursor-default">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </m.div>
                        </LazyMotion>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section id="experience" aria-label="Work Experience">
                <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
                <div className="space-y-8">
                    {DATA.experience?.map((exp, index) => (
                        <LazyMotion features={domAnimation} key={exp.company}>
                            <m.article
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative border-l-2 border-[var(--color-border)] pl-6 ml-2"
                            >
                                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[var(--color-text-secondary)] group-hover:bg-[var(--color-text-primary)] transition-colors" />
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-[var(--color-border-hover)] underline-offset-4">
                                            {exp.company}
                                        </a>
                                    </h3>
                                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">{exp.role}</span>
                                    <span className="text-xs text-[var(--color-text-muted)] sm:mx-2">• {exp.location}</span>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] sm:ml-auto">{exp.period}</span>
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </m.article>
                        </LazyMotion>
                    ))}
                </div>
            </section>
        </div>

        <aside className="space-y-12 sm:space-y-16">
            {/* Education */}
            <section aria-label="Education">
                <SectionTitle icon={Cpu}>Education</SectionTitle>
                {DATA.education.map(edu => (
                    <article key={edu.degree} className="group cursor-default">
                        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">{edu.degree}</h3>
                        <div className="flex flex-col mb-4">
                            <p className="text-sm font-medium text-[var(--color-text-secondary)]">{edu.school}</p>
                            <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{edu.location}</p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3">
                            <span>CGPA: {numberFormatting.format(edu.score)}/10</span>
                            <time>{edu.period}</time>
                        </div>
                    </article>
                ))}
            </section>

            {/* Certifications */}
            <section aria-label="Certifications">
                <SectionTitle icon={Award}>Certifications</SectionTitle>
                <ul className="space-y-6" role="list">
                    {DATA.certifications.map((cert) => (
                        <li key={cert.name} className="flex gap-4">
                            <div className="w-1 h-auto bg-[var(--color-border)] rounded-full" aria-hidden="true" />
                            <div>
                                <p className="text-xs font-medium text-[var(--color-text-secondary)] mb-1">{cert.name}</p>
                                <time className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">{cert.date}</time>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    </div>
));
SkillsEducationSection.displayName = 'SkillsEducationSection';

export default SkillsEducationSection;
