import Link from "next/link";

import { CopyButton } from "@/components/copy-button";

const linkClassName =
  "font-medium text-foreground underline-offset-4 hover:underline";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <p className="text-muted-foreground">
        I build AI products, mostly search and research tools. I like the
        unglamorous parts: messy documents, retrieval that actually finds the
        right page, and answers that admit when they aren&apos;t sure. <br /> <br /> At{" "}
        <Link
          href="https://tradl.ai"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label="Visit Tradl AI"
        >
          Tradl AI
        </Link>
        , I worked on the RAG pipeline behind a live stock research platform. I
        rebuilt retrieval and moved recall from 0.37 to 0.61 on a 90-question
        test, and shipped the live ticker table and MarketBuzz. <br />
        <br /> I&apos;m in Hyderabad and open to AI and full-stack roles. More
        on{" "}
        <Link
          href="https://x.com/HemanthKokkonda"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label="@HemanthKokkonda on X"
        >
          @HemanthKokkonda
        </Link>
        ,{" "}
        <Link
          href="https://github.com/hemanth090"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label="Visit Naveen Hemanth on GitHub"
        >
          GitHub
        </Link>
        , or{" "}
        <Link
          href="mailto:naveenhemanth4@gmail.com"
          className={linkClassName}
          aria-label="Email Naveen Hemanth"
        >
          email
        </Link>
        <CopyButton
          size="icon-sm"
          variant="ghost"
          text="naveenhemanth4@gmail.com"
          className="ml-1.5 size-5 translate-y-0.5 hover:bg-transparent!"
        />
      </p>
    </section>
  );
}
