import SkipLink from './components/layout/SkipLink';
import IdentityPanel from './components/board/IdentityPanel';
import ExperiencePanel from './components/board/ExperiencePanel';
import ProjectsPanel from './components/board/ProjectsPanel';
import SkillsPanel from './components/board/SkillsPanel';
import CredentialsPanel from './components/board/CredentialsPanel';
import ResumeDocument from './components/resume/ResumeDocument';

/**
 * One-screen board. Everything a recruiter needs is visible without scrolling
 * on desktop (lg+); below that the same panels stack and scroll naturally,
 * because a phone viewport cannot honestly hold a resume.
 *
 * Panel delays compose the single authored motion moment: the board builds
 * itself once, on load.
 */
export default function App() {
    return (
        <>
            <div className="app-shell min-h-dvh lg:h-dvh lg:overflow-hidden flex flex-col gap-3 p-3 lg:p-4">
                <SkipLink />
                <IdentityPanel />

                <main
                    id="main-content"
                    tabIndex={-1}
                    className="flex-1 min-h-0 grid gap-3 lg:grid-cols-12 lg:grid-rows-[auto_minmax(0,1fr)] outline-none"
                >
                    {/* Dominant cell: full-height left column. */}
                    <div className="lg:col-span-5 lg:row-span-2 min-h-0 grid panel-in [animation-delay:60ms]">
                        <ExperiencePanel />
                    </div>

                    <div className="lg:col-span-7 min-h-0 grid panel-in [animation-delay:120ms]">
                        <ProjectsPanel />
                    </div>

                    <div className="lg:col-span-4 min-h-0 grid panel-in [animation-delay:180ms]">
                        <SkillsPanel />
                    </div>

                    <div className="lg:col-span-3 min-h-0 grid panel-in [animation-delay:240ms]">
                        <CredentialsPanel />
                    </div>
                </main>
            </div>

            {/* Hidden on screen, shown in print. Always mounted so the print
                dialog can never catch it unloaded. */}
            <ResumeDocument />
        </>
    );
}
