import { memo, lazy, Suspense } from 'react';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import PixelLogo from './components/PixelLogo';
import AboutSection from './components/AboutSection';
import { DATA } from './data';

// Lazy load below-fold sections for better performance
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsEducationSection = lazy(() => import('./components/SkillsEducationSection'));

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
  <section id="about" className="mb-20 sm:mb-24" aria-label="About Me">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-12 items-start opacity-100">
      <div className="order-2 lg:order-1 animate-fade-in-up text-balance">
        <div className="mb-4">
          <span className="text-[10px] sm:text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-[0.3em] font-bold">
            {DATA.title}
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-[var(--color-text-primary)] mb-6 leading-[1.1]">
          {DATA.name}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl mb-6 leading-relaxed">
          {DATA.headline}
        </p>
        <p className="text-sm font-medium text-[var(--color-text-muted)] italic leading-relaxed max-w-lg mb-8">
          "{DATA.bio}"
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="px-6 py-3 rounded-full bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-sm font-bold hover:opacity-90 transition-opacity"
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
              className="p-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="p-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6 lg:pt-0 order-1 lg:order-2">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] group">
          <img
            src={DATA.profileImage}
            alt={`Portrait of ${DATA.name}`}
            loading="eager"
            fetchPriority="high"
            width={300}
            height={375}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        </div>
        <address className="hidden lg:block p-6 rounded-2xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] not-italic">
          <div className="flex items-center gap-3 mb-6 text-[var(--color-text-secondary)] font-medium">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">{DATA.contact.location}</span>
          </div>
          <div className="flex items-center gap-3 text-[var(--color-text-secondary)] font-medium">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">{DATA.contact.email}</span>
          </div>
        </address>
      </div>
    </div>
  </section>
));
HeroSection.displayName = 'HeroSection';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Skip to Content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-text-primary)] focus:text-[var(--color-bg-primary)] focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-nav)] backdrop-blur-md" role="navigation" aria-label="Main Navigation">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
          <a href="#about" aria-label="Go to top">
            <PixelLogo />
          </a>
          <div className="flex items-center gap-3 sm:gap-8">
            <a href="#projects" className="text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors tracking-tight sm:tracking-widest">PROJECTS</a>
            <a href="#skills" className="text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors tracking-tight sm:tracking-widest">SKILLS</a>
            <a href="#experience" className="text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors tracking-tight sm:tracking-widest">EXPERIENCE</a>
            <a href="#about-section" className="text-[10px] sm:text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors tracking-tight sm:tracking-widest">ABOUT</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-24 sm:pt-32">
        {/* Hero Section - Load immediately */}
        <HeroSection />

        <AboutSection />

        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <SkillsEducationSection />
        </Suspense>
      </main>

      <footer className="border-t border-[var(--color-border)] py-12 bg-[var(--color-bg-tertiary)]" role="contentinfo">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-[var(--color-text-muted)] font-mono italic">
            &copy; {new Date().getFullYear()} Naveen Hemanth Kokkonda
          </p>
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
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-[10px] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] uppercase tracking-[0.2em] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
