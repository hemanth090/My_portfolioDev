import { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Terminal, Briefcase } from 'lucide-react';
import { DATA } from '../data';
import SectionTitle from './SectionTitle';

const SkillsEducationSection = memo(() => (
    <div className="space-y-16">
        {/* Skills */}
        <section id="skills" aria-label="Technical Skills">
            <SectionTitle icon={Terminal}>Skills</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {DATA.skills.map((skill) => (
                    <LazyMotion features={domAnimation} key={skill.category}>
                        <m.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-widest mb-4 border-b border-[var(--color-border)] pb-2">
                                {skill.category}
                            </h3>
                            <ul className="flex flex-wrap gap-x-6 gap-y-3" role="list">
                                {skill.items.map(item => (
                                    <li key={item} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm cursor-default">
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
                            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[var(--color-text-secondary)] group-hover:bg-[var(--color-text-primary)]" />
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
));

SkillsEducationSection.displayName = 'SkillsEducationSection';

export default SkillsEducationSection;
