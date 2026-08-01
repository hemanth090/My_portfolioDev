import { GraduationCap, Award } from 'lucide-react';
import { DATA, numberFormatting } from '../../data';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Meta from '../ui/Meta';
import Reveal from '../ui/Reveal';

/** Education and certifications, side by side. Verification, scanned last. */
export default function CredentialsSection() {
    return (
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <Section id="education" labelledBy="education-heading">
                <SectionTitle icon={GraduationCap} id="education-heading">
                    Education
                </SectionTitle>

                <div className="space-y-6">
                    {DATA.education.map((edu, index) => (
                        <Reveal key={edu.degree} index={index}>
                            <Card as="article">
                                <h3 className="text-[17px] font-bold tracking-[-0.01em] text-fg mb-2">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm font-medium text-fg-secondary">{edu.school}</p>
                                <p className="text-sm text-fg-muted mt-0.5">{edu.location}</p>

                                <div className="flex items-center justify-between border-t border-line pt-4 mt-4">
                                    <Meta>CGPA {numberFormatting.format(edu.score)}/10</Meta>
                                    <Meta as="time">{edu.period}</Meta>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Section>

            <Section id="certifications" labelledBy="certifications-heading">
                <SectionTitle icon={Award} id="certifications-heading">
                    Certifications
                </SectionTitle>

                <ul className="space-y-4">
                    {DATA.certifications.map((cert, index) => (
                        <li key={cert.name}>
                            <Reveal index={index}>
                                <Card padding="sm" className="flex items-start gap-4">
                                    <Award className="w-4 h-4 mt-0.5 shrink-0 text-fg-muted" aria-hidden="true" />
                                    <div>
                                        <p className="text-sm font-medium text-fg-secondary leading-[1.5] mb-1">
                                            {cert.name}
                                        </p>
                                        <Meta as="time">{cert.date}</Meta>
                                    </div>
                                </Card>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}
