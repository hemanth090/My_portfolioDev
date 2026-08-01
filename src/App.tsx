import { useRef } from 'react';
import { ANCHOR_IDS, CONTACT_ID, HERO_ID } from './config/sections';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useAnchorNavigation } from './hooks/useAnchorNavigation';
import { useHashSync } from './hooks/useHashSync';

import SkipLink from './components/layout/SkipLink';
import SideNav from './components/layout/SideNav';
import SiteFooter from './components/layout/SiteFooter';
import CursorAura from './components/ui/CursorAura';
import PixelLogo from './components/ui/PixelLogo';

import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import AboutSection from './components/sections/AboutSection';
import CredentialsSection from './components/sections/CredentialsSection';
import ContactSection from './components/sections/ContactSection';
import ResumeDocument from './components/resume/ResumeDocument';

import { goToSection } from './lib/scroll';

export default function App() {
    const endSentinel = useRef<HTMLDivElement>(null);
    // The spy observes every anchor INCLUDING contact, so the URL hash is always
    // truthful (#contact was previously rewritten to #about because contact was
    // unrepresentable). The rail has no contact icon, so for highlight purposes
    // contact maps to its nearest rail ancestor, About.
    const activeId = useScrollSpy({ sectionIds: ANCHOR_IDS, endSentinelRef: endSentinel });
    const railActiveId = activeId === CONTACT_ID ? 'about' : activeId;

    useAnchorNavigation(ANCHOR_IDS);
    useHashSync(activeId, HERO_ID);

    return (
        <>
            <div className="app-shell min-h-screen flex flex-col overflow-x-hidden relative">
                <div className="noise-overlay print:hidden" aria-hidden="true" />
                <CursorAura />
                <SkipLink />

                <div className="fixed top-6 left-6 z-50 hidden md:block print:hidden">
                    <a
                        href={`#${HERO_ID}`}
                        aria-label="Back to top"
                        onClick={(event) => {
                            event.preventDefault();
                            goToSection(HERO_ID);
                        }}
                        className="inline-block rounded-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                        <PixelLogo />
                    </a>
                </div>

                <SideNav activeId={railActiveId} />

                <main
                    id="main-content"
                    tabIndex={-1}
                    className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-8 pt-10 pb-32 lg:pt-16 lg:pb-24 lg:pl-32 xl:pl-40 space-y-20 sm:space-y-28 outline-none"
                >
                    <HeroSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <AboutSection />
                    <CredentialsSection />
                    <ContactSection />

                    {/* Zero-height probe: when it is on screen the reader has hit
                        the end of the content, so the rail pins the last section
                        instead of whichever one happens to sit under the band. */}
                    <div ref={endSentinel} aria-hidden="true" className="h-px w-full" />
                </main>

                <SiteFooter />
            </div>

            {/* Hidden on screen, shown in print. Always mounted so it can never
                be a lazy chunk that has not loaded when the print dialog opens. */}
            <ResumeDocument />
        </>
    );
}
