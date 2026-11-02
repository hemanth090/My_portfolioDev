import dynamic from "next/dynamic";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
);

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground ring-2 ring-ring focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:outline-none"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="overflow-hidden px-5">
        {children}
      </main>
      <SiteFooter />
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
        aria-hidden
      >
        <div className="h-(--fade-bottom-height) bg-linear-to-b from-transparent to-background mask-linear-[to_top,var(--background)_25%,transparent] backdrop-blur-[3px]" />
        <div className="bg-background pb-[env(safe-area-inset-bottom,0)]" />
      </div>
      <ScrollToTop />
    </>
  );
}
