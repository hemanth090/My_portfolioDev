import { InteractiveDots } from "@/components/interactive-dots";
import { ProfileHeader } from "@/components/home/profile-header";
import { AboutSection } from "@/components/home/about";
import { ContactSection } from "@/components/home/connect";
import { ExperienceSection } from "@/components/home/experience-section";
import { GitHubActivity } from "@/components/github-activity";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import {
  AchievementsSection,
  CredentialsSection,
} from "@/components/home/achievements-section";
import { FocusSection } from "@/components/home/focus-section";

export default function HomePage() {
  return (
    <main>
      <InteractiveDots className="screen-line-bottom h-24 w-full sm:h-32" />

      <ProfileHeader />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <AboutSection />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <ExperienceSection />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <ProjectsSection />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <SkillsSection />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <GitHubActivity />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <AchievementsSection />

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <CredentialsSection />

      <div>
        <div aria-hidden className="bg-border h-px w-full shrink-0" />
        <FocusSection />
      </div>

      <div aria-hidden className="bg-border h-px w-full shrink-0" />
      <ContactSection />
    </main>
  );
}
