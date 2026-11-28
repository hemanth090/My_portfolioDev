import { GitHubIcon } from "@/components/icons";
import { TechIcon } from "@/components/tech-icon";
import type { Project } from "@/content/projects";

const ACTION_CLASS =
  "focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 gap-1 px-1.5 py-0.5";

const TAG_CLASS =
  "focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 gap-1 px-1.5 py-0.5 text-[11px]";

export function ProjectCard({ project }: { project: Project }) {
  const { website, github } = project.links;
  const primary = website ?? github;

  return (
    <div className="group/card relative flex flex-1 flex-col gap-2">
      <a
        href={primary}
        target="_blank"
        rel="noopener noreferrer"
        className="group/media border-border focus-visible:ring-ring/50 block overflow-hidden rounded-md border outline-none focus-visible:ring-[3px]"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          width={1200}
          height={630}
          className="aspect-project w-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100"
        />
      </a>

      <div className="flex items-center justify-between gap-3">
        <h3 className="min-w-0 truncate text-[15px] leading-snug font-semibold">
          <a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary focus-visible:ring-ring/50 rounded-sm outline-none transition-colors focus-visible:ring-[3px]"
          >
            {project.title}
          </a>
        </h3>

        <div className="flex shrink-0 items-center gap-1.5">
          {website ? (
            <a
              href={website}
              data-ui-feedback="tap"
              target="_blank"
              rel="noopener noreferrer"
              className={ACTION_CLASS}
            >
              Live
            </a>
          ) : null}
          {github ? (
            <a
              href={github}
              data-ui-feedback="tap"
              target="_blank"
              rel="noopener noreferrer"
              className={ACTION_CLASS}
            >
              <GitHubIcon className="size-3 shrink-0" />
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="text-muted-foreground truncate text-[13px] leading-snug">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 4).map((technology) => (
          <li key={technology.name} className="flex">
            <span className={TAG_CLASS}>
              <TechIcon slug={technology.icon} className="size-3 shrink-0" />
              {technology.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
