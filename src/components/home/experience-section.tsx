import { SectionHeader } from "@/components/section-header";
import { EXPERIENCES } from "@/content/experience";

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience">
      <SectionHeader id="experience" className="pb-2">
        Experience
      </SectionHeader>
      <ul className="space-y-5 px-4 py-5 sm:px-6">
        {EXPERIENCES.flatMap((experience) =>
          experience.positions.map((position) => (
            <li
              key={`${experience.company}-${position.title}`}
              className="flex items-center gap-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center select-none">
                <img
                  src={experience.logo}
                  alt=""
                  loading="lazy"
                  width={40}
                  height={40}
                  className="size-10 rounded-[10px] object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                    >
                      {experience.company}
                    </a>
                  </h3>
                  <p className="text-muted-foreground shrink-0 text-xs tabular-nums">
                    {position.start} - {position.end}
                  </p>
                </div>
                <p
                  className="text-muted-foreground truncate text-[13px] leading-snug"
                  title={position.skills.join(", ")}
                >
                  {position.title} <span aria-hidden>•</span>{" "}
                  {position.employmentType} · {position.duration}
                </p>
                <span className="sr-only">
                  Skills: {position.skills.join(", ")}
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
