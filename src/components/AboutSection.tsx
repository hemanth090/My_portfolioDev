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
                        <article key={edu.degree} className="group cursor-default border-l-2 border-[var(--color-border)] pl-6 ml-2">
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
                </div>
            </section>

            {/* Certifications */}
            <section aria-label="Certifications">
                <SectionTitle icon={Award}>Certifications</SectionTitle>
                <ul className="space-y-6" role="list">
                    {DATA.certifications.map((cert) => (
                        <li key={cert.name} className="flex gap-4">
                            <div className="w-1 h-auto bg-[var(--color-border)] rounded-full" aria-hidden="true" />
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
