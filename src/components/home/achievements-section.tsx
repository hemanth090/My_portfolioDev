import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

import { Badge, Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { ACHIEVEMENTS, CREDENTIALS } from "@/content/achievements";

export function AchievementsSection() {
  return (
    <section aria-labelledby="achievements">
      <SectionHeader id="achievements">Achievements</SectionHeader>
      <ul className="pt-px">
        {ACHIEVEMENTS.map((achievement) => (
          <li
            key={achievement.title}
            className="screen-line-bottom relative last:after:hidden"
          >
            <div className="flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="min-w-0 text-base leading-snug font-medium text-balance">
                    {achievement.title}
                  </h3>
                  <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
                    {achievement.meta}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CredentialCard({
  credential,
  className,
}: {
  credential: (typeof CREDENTIALS)[number];
  className?: string;
}) {
  const isEducation = credential.type === "education";

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-md">
          {isEducation ? (
            <GraduationCap className="size-4" aria-hidden />
          ) : (
            <Award className="size-4" aria-hidden />
          )}
        </span>
        <Badge variant="secondary">{credential.year}</Badge>
      </div>

      <div className="min-w-0 space-y-1">
        <h3 className="text-[15px] leading-snug font-medium text-balance">
          {credential.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {credential.description}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-end gap-3 pt-1">
        {credential.href ? (
          <span className="text-muted-foreground group-hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors">
            View
            <ArrowUpRight className="size-3.5" aria-hidden />
          </span>
        ) : (
          <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
            <BadgeCheck className="size-3.5" aria-hidden />
            Degree
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    "group bg-card text-card-foreground flex flex-col gap-3 rounded-lg border border-border p-4 shadow-xs transition-colors hover:border-neutral-400 dark:hover:border-neutral-600";

  if (credential.href) {
    return (
      <a
        href={credential.href}
        target="_blank"
        rel="noopener noreferrer"
        data-ui-feedback="tap"
        className={`${cardClass} ${className ?? ""}`}
      >
        {content}
      </a>
    );
  }

  return <Card className={`${cardClass} ${className ?? ""}`}>{content}</Card>;
}

export function CredentialsSection() {
  const education = CREDENTIALS.filter(
    (credential) => credential.type === "education"
  );
  const certifications = CREDENTIALS.filter(
    (credential) => credential.type === "certification"
  );

  return (
    <section aria-labelledby="credentials">
      <SectionHeader
        id="credentials"
        action={<Badge variant="secondary">{CREDENTIALS.length} entries</Badge>}
      >
        Education &amp; Certifications
      </SectionHeader>
      <div className="flex flex-col gap-6 px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {education.map((credential) => (
              <CredentialCard
                key={credential.title}
                credential={credential}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Certifications
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certifications.map((credential) => (
              <CredentialCard
                key={credential.title}
                credential={credential}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
