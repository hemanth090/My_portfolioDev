import { EXPERIENCES } from "@/features/portfolio/data/experiences";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { TECH_STACK } from "@/features/portfolio/data/tech-stack";
import { USER } from "@/features/portfolio/data/user";

const aboutText = `## About

${USER.about.trim()}

### Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

### Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

### Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;

const experienceText = `## Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.join(", ") || "N/A";
      const description = position.description?.join("\n") || "N/A";
      return `### ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${description}`;
    })
    .join("\n\n")
).join("\n\n")}
`;

const projectsText = `## Projects

${PROJECTS.map((item) => {
  const github = item.githubRepo
    ? `\nGitHub: https://github.com/${item.githubRepo}`
    : "";
  return `### ${item.title}\n\nProject URL: ${item.link}${github}\n\n${item.description}`;
}).join("\n\n")}
`;

async function getContent() {
  return `<SYSTEM>This document contains comprehensive information about ${USER.displayName}'s professional profile, portfolio and professional background. It includes personal details, work experience, projects and technical skills. This data is formatted for consumption by Large Language Models (LLMs) to provide accurate and up-to-date information about ${USER.displayName}'s background, skills, and expertise in the role of ${USER.jobTitle}.</SYSTEM>

# hemanthk.xyz

> AI engineer building AI products end to end.

${aboutText}
${experienceText}
${projectsText}
`;
}

export const revalidate = false;
export const dynamic = "force-static";

export async function GET() {
  return new Response(await getContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
