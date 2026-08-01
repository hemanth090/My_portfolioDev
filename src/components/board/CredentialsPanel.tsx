import { DATA, numberFormatting } from '../../data';
import Card from '../ui/Card';
import Meta from '../ui/Meta';

/** Education and certifications: the verification strip, quiet by design. */
export default function CredentialsPanel() {
    return (
        <Card as="section" aria-labelledby="credentials-heading" className="min-h-0 lg:overflow-y-auto">
            <Meta as="h2" id="credentials-heading" tone="accent" className="mb-2">
                Education &amp; Certifications
            </Meta>

            {DATA.education.map((edu) => (
                <article key={edu.degree} className="pb-2.5 mb-2.5 border-b border-line">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-[13px] font-bold text-fg">{edu.school}</h3>
                        <Meta as="time">{edu.period}</Meta>
                    </div>
                    <p className="text-xs text-fg-secondary mt-0.5">
                        {edu.degree}
                        <span className="text-fg-muted"> &middot; CGPA {numberFormatting.format(edu.score)}/10 &middot; {edu.location}</span>
                    </p>
                </article>
            ))}

            <ul className="space-y-1">
                {DATA.certifications.map((cert) => (
                    <li key={cert.name} className="flex items-baseline justify-between gap-3">
                        <span className="text-xs leading-[1.45] text-fg-secondary">{cert.name}</span>
                        <Meta as="time" className="shrink-0">
                            {cert.date}
                        </Meta>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
