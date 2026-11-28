import { SectionHeader } from "@/components/section-header";
import { ABOUT } from "@/content/profile";

export function AboutSection() {
  return (
    <section aria-labelledby="about">
      <SectionHeader id="about">About</SectionHeader>
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        <ul className="list-disc space-y-2.5 pl-4 text-base leading-relaxed font-normal text-neutral-800 dark:text-neutral-300">
          {ABOUT.map((parts, index) => (
            <li key={index}>
              {parts.map((part, partIndex) =>
                part.strong ? (
                  <b
                    key={partIndex}
                    className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100"
                  >
                    {part.text}
                  </b>
                ) : (
                  <span key={partIndex}>{part.text}</span>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
