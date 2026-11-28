import { SectionHeader } from "@/components/section-header";
import { SkillIcon } from "@/components/tech-icon";
import { SKILLS } from "@/content/skills";

export function SkillsSection() {
  return (
    <section aria-labelledby="stack">
      <SectionHeader id="stack">Skills</SectionHeader>
      <ul className="flex flex-wrap gap-2 px-4 py-5 sm:px-5">
        {SKILLS.map((skill) => (
          <li key={skill.title} className="flex">
            <a
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              data-ui-feedback="tap"
              className="focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600"
            >
              <SkillIcon
                icon={skill.icon}
                darkIcon={skill.darkIcon}
                className="size-3.5 shrink-0"
              />
              {skill.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
