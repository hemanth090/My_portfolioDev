import type { Metadata } from "next";

import "./story.css";

import { StoryExperience } from "@/components/story/story-experience";

const DESCRIPTION =
  "From a B.Tech in Hyderabad to nine months on a live stock research platform: a retrieval rebuild from 0.37 to 0.61 recall, plus six AI systems in retrieval, agents and tooling.";

export const metadata: Metadata = {
  title: "Story",
  description: DESCRIPTION,
  alternates: { canonical: "/story/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/story/",
    title: "Story · Naveen Hemanth",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Story · Naveen Hemanth",
    description: DESCRIPTION,
  },
};

export default function StoryPage() {
  return (
    <>
      {/* Without JS the motion initial states would stay invisible: reveal the
          content and hide the JS-only controls. */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".story,.story [style]{opacity:1!important;transform:none!important}.story-progress,.story-rail,.story-cue,.story-dots{display:none!important}",
          }}
        />
      </noscript>
      <StoryExperience />
    </>
  );
}
