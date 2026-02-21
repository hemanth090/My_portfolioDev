import { memo, lazy, Suspense, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import PixelLogo from './components/PixelLogo';
import AboutSection from './components/AboutSection';
import { DATA } from './data';

// Lazy load below-fold sections for better performance
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsEducationSection = lazy(() => import('./components/SkillsEducationSection'));

/**
 * 2026 Dynamic Aura Component
 */
const CursorAura = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the aura
  const springConfig = { damping: 40, stiffness: 150 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <m.div
      className="cursor-aura hidden lg:block"
      style={{
        left: auraX,
        top: auraY,
      }}
    />
  );
};

/**
 * Helper to scroll window to top on route change
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

/**
 * Skeleton Loading Component
 */
const SectionSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="h-8 w-48 bg-[var(--color-bg-tertiary)] rounded mb-8" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-64 bg-[var(--color-bg-tertiary)] rounded-2xl" />
      ))}
    </div>
  </div>
));
SectionSkeleton.displayName = 'SectionSkeleton';

const HeroSection = memo(() => (
  <section className="mb-20 sm:mb-32" aria-label="About Me">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 opacity-100">
      <div className="order-2 lg:order-1 flex-1 animate-fade-in-up text-balance">
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em] opacity-80">
            {DATA.title}
          </span>
        </div>
        <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-extrabold tracking-[-0.04em] text-[var(--color-text-primary)] mb-6 leading-none">
          {DATA.name}
        </h1>
        <p className="text-xl sm:text-[1.375rem] text-[var(--color-text-secondary)] max-w-2xl mb-8 leading-[1.6]">
          {DATA.headline}
        </p>
        <p className="text-base sm:text-lg font-medium text-[var(--color-text-muted)] italic leading-relaxed max-w-xl mb-10 border-l-[3px] border-[var(--color-border)] pl-5">
          "{DATA.bio}"
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="px-8 py-3.5 rounded-full bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
            aria-label="Send email to contact"
          >
            Contact
          </a>
          <div className="flex gap-4">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="p-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all bg-[var(--color-bg-secondary)] sm:bg-transparent"
            >
              <Github className="w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5" aria-hidden="true" />
            </a>
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="p-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all bg-[var(--color-bg-secondary)] sm:bg-transparent"
            >
              <Linkedin className="w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6 lg:pt-0 order-1 lg:order-2 w-full max-w-[400px] shrink-0">
        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[var(--color-bg-tertiary)] group">
          <img
            src={DATA.profileImage}
            alt={`Portrait of ${DATA.name}`}
            loading="eager"
            fetchPriority="high"
            width={500}
            height={667}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        </div>
        <address className="hidden lg:flex flex-col gap-4 p-6 sm:p-7 rounded-[24px] bg-[var(--color-bg-secondary)] border-none shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] not-italic">
          <div className="flex items-center gap-4 text-[var(--color-text-secondary)] font-semibold">
            <MapPin className="w-[1.125rem] h-[1.125rem]" aria-hidden="true" />
            <span className="text-[15px]">{DATA.contact.location}</span>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-text-secondary)] font-semibold">
            <Mail className="w-[1.125rem] h-[1.125rem]" aria-hidden="true" />
            <span className="text-[15px]">{DATA.contact.email}</span>
          </div>
        </address>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

export default function App() {
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-[10px] sm:text-[11px] font-semibold transition-colors tracking-wider whitespace-nowrap hover-elastic ${
      isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
    }`;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      <div className="noise-overlay" aria-hidden="true" />
      <CursorAura />
      
      <ScrollToTop />
      {/* Skip to Content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-text-primary)] focus:text-[var(--color-bg-primary)] focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Floating Logo (Desktop only) */}
      <div className="fixed top-6 left-6 z-50 hidden md:block">
        <NavLink to="/" aria-label="Go to top" className="hover:opacity-80 transition-opacity hover-elastic inline-block">
          <PixelLogo />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95%] overflow-x-auto sm:overflow-visible custom-scrollbar" role="navigation" aria-label="Main Navigation">
        <div className="flex items-center justify-center gap-3.5 sm:gap-6 px-6 sm:px-8 py-2 sm:py-2.5 bg-[var(--color-bg-nav)] backdrop-blur-lg border border-[var(--color-border)] rounded-full shadow-sm dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            <NavLink to="/" className={linkStyles}>HOME</NavLink>
            <NavLink to="/projects" className={linkStyles}>PROJECTS</NavLink>
            <NavLink to="/experience" className={linkStyles}>EXPERIENCE</NavLink>
            <NavLink to="/skills" className={linkStyles}>SKILLS</NavLink>
            <NavLink to="/about" className={linkStyles}>ABOUT</NavLink>
            <div className="pl-1.5 sm:pl-3 flex items-center shrink-0">
                <div className="opacity-90 hover:opacity-100 transition-opacity hover-elastic">
                    <ThemeToggle />
                </div>
            </div>
        </div>
      </nav>

      <main id="main-content" className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-24 w-full">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={
            <Suspense fallback={<SectionSkeleton />}>
              <ProjectsSection />
            </Suspense>
          } />
          <Route path="/skills" element={
            <Suspense fallback={<SectionSkeleton />}>
              <SkillsEducationSection />
            </Suspense>
          } />
          <Route path="/experience" element={
            <Suspense fallback={<SectionSkeleton />}>
              <SkillsEducationSection />
            </Suspense>
          } />
        </Routes>
      </main>

      <footer className="border-t border-[var(--color-border)] py-12 bg-[var(--color-bg-tertiary)]" role="contentinfo">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <NavLink to="/" className="text-xs text-[var(--color-text-secondary)] font-mono italic hover:underline">
            &copy; {new Date().getFullYear()} Naveen Hemanth Kokkonda
          </NavLink>
          <nav aria-label="Footer Navigation" className="flex gap-6">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-[0.2em] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1XyZ5Y..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-[0.2em] transition-colors"
            >
              Resume
            </a>
            <NavLink
              to="/about"
              className="text-[10px] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-[0.2em] transition-colors"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </footer>
    </div>
  );
}
