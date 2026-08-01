import { DATA, numberFormatting } from '../../data';
import Card from '../ui/Card';
import Meta from '../ui/Meta';

/** Education and certifications: the verification strip, quiet by design. */
export default function CredentialsPanel() {
    return (
        <Card as="section" aria-labelledby="credentials-heading" className="min-h-0 lg:overflow-y-auto lg:[scrollbar-gutter:stable]">
            <Meta as="h2" id="credentials-heading" tone="accent" className="mb-2">
                Education &amp; Certifications
            </Meta>

            {DATA.education.map((edu) => (
                <article key={edu.degree} className="pb-3 mb-3 lg:pb-2.5 lg:mb-2.5 border-b border-line min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                        <h3 className="text-sm lg:text-[13px] font-bold text-fg [overflow-wrap:anywhere]">{edu.school}</h3>
                        <Meta as="time">{edu.period}</Meta>
                    </div>
                    <p className="text-sm lg:text-xs text-fg-secondary mt-0.5 [overflow-wrap:anywhere]">
                        {edu.degree}
                        <span className="text-fg-muted"> &middot; CGPA {numberFormatting.format(edu.score)}/10 &middot; {edu.location}</span>
                    </p>
                </article>
            ))}

            <ul className="space-y-2 lg:space-y-1">
                {DATA.certifications.map((cert) => (
                    <li key={cert.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-3 gap-y-0.5 min-w-0">
                        <span className="text-sm lg:text-xs leading-[1.5] lg:leading-[1.45] text-fg-secondary [overflow-wrap:anywhere]">{cert.name}</span>
                        <Meta as="time" className="shrink-0">
                            {cert.date}
                        </Meta>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
