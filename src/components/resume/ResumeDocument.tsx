import { DATA, numberFormatting } from '../../data';

/**
 * Print-only A4 resume.
 *
 * A separate document rather than a restyle of the live page. Restyling the
 * app for print would fight four independent failure modes at once: sections
 * skipped by content-visibility, entrance animations leaving never-scrolled
 * elements at opacity 0, lazy chunks that may not be mounted, and grids that
 * do not linearise. Rendering from DATA sidesteps all four and gives exact
 * control over the one-page budget.
 *
 * Hidden on screen via `hidden`; the print stylesheet flips it to block and
 * hides `.app-shell`.
 */
export default function ResumeDocument() {
    const projects = DATA.projects.filter((project) => project.inResume);
    const contactLine = [
        DATA.contact.phone,
        DATA.contact.email,
        'linkedin.com/in/hemanthkokkonda',
        'github.com/hemanth090',
        DATA.contact.website,
    ];

    return (
        <article className="resume-document hidden" aria-hidden="true">
            <header className="resume-header">
                <h1 className="resume-name">{DATA.name}</h1>
                <p className="resume-title">{DATA.title}</p>
                <p className="resume-contact">
                    {contactLine.map((item, index) => (
                        <span key={item}>
                            {index > 0 && <span className="resume-sep"> | </span>}
                            {item}
                        </span>
                    ))}
                </p>
            </header>

            <section className="resume-section">
                <h2 className="resume-section-title">Education</h2>
                {DATA.education.map((edu) => (
                    <div className="resume-entry" key={edu.degree}>
                        <div className="resume-entry-head">
                            <strong>{edu.school}</strong>
                            <span>{edu.location}</span>
                        </div>
                        <div className="resume-entry-sub">
                            <em>
                                {edu.degree} - CGPA: {numberFormatting.format(edu.score)}/10
                            </em>
                            <span>{edu.period}</span>
                        </div>
                    </div>
                ))}
            </section>

            <section className="resume-section">
                <h2 className="resume-section-title">Experience</h2>
                {DATA.experience.map((exp) => (
                    <div className="resume-entry" key={`${exp.company}-${exp.role}`}>
                        <div className="resume-entry-head">
                            <strong>{exp.role}</strong>
                            <span>
                                {exp.start} &ndash; {exp.end}
                            </span>
                        </div>
                        <div className="resume-entry-sub">
                            <em>
                                {exp.company} - {exp.context}
                            </em>
                            <span>{exp.location}</span>
                        </div>
                        <ul className="resume-bullets">
                            {exp.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="resume-section">
                <h2 className="resume-section-title">Projects</h2>
                {projects.map((project) => (
                    <div className="resume-entry" key={project.title}>
                        <div className="resume-entry-head">
                            {/* printTitle is the resume's exact heading — the
                                dash/space between title and subtitle differs
                                per project in the source document. */}
                            <strong>{project.printTitle ?? project.title}</strong>
                            <span>{project.date}</span>
                        </div>
                        <p className="resume-tech">
                            <em>Technologies: {project.technologies.join(', ')}</em>
                        </p>
                        <ul className="resume-bullets">
                            {project.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="resume-section">
                <h2 className="resume-section-title">Technical Skills</h2>
                <div className="resume-group">
                    {DATA.skills.map((group) => (
                        <p className="resume-skill-row" key={group.category}>
                            <strong>{group.category}</strong>: {group.items.join(', ')}
                        </p>
                    ))}
                </div>
            </section>

            <section className="resume-section">
                <h2 className="resume-section-title">Certifications</h2>
                <ul className="resume-bullets resume-group">
                    {DATA.certifications.map((cert) => (
                        <li key={cert.name}>
                            {cert.name} <span className="resume-cert-date">({cert.date})</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
