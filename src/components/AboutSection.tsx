import { memo } from 'react';
import { User, Cpu, Award } from 'lucide-react';
import { DATA, numberFormatting } from '../data';
import SectionTitle from './SectionTitle';

const AboutSection = memo(() => (
    <div className="space-y-16">
        <section id="about-section" className="animate-fade-in-up" aria-label="About Me">
            <SectionTitle icon={User}>About Me</SectionTitle>
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-3xl text-[var(--color-text-secondary)] leading-relaxed">
                <p>{DATA.about}</p>
            </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Education */}
            <section aria-label="Education">
                <SectionTitle icon={Cpu}>Education</SectionTitle>
                <div className="space-y-8">
                    {DATA.education.map(edu => (
                        <article key={edu.degree} className="group cursor-default bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] rounded-xl p-6 transition-all duration-300 hover:shadow-sm hover:-translate-y-1">
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">{edu.degree}</h3>
                            <div className="flex flex-col mb-4">
                                <p className="text-sm font-medium text-[var(--color-text-secondary)]">{edu.school}</p>
                                <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{edu.location}</p>
                            </div>
                            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-4 mt-2">
                                <span>CGPA: {numberFormatting.format(edu.score)}/10</span>
                                <time>{edu.period}</time>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section aria-label="Certifications">
                <SectionTitle icon={Award}>Certifications</SectionTitle>
                <ul className="space-y-6" role="list">
                    {DATA.certifications.map((cert) => (
                        <li key={cert.name} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors duration-300">
                            <div className="mt-1 flex-shrink-0">
                                <Award className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">{cert.name}</p>
                                <time className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-widest">{cert.date}</time>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </div>
));

export default AboutSection;
