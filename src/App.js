import React, { useState, useEffect, Suspense, lazy } from 'react';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
              <div className="animate-pulse text-2xl text-gray-900 dark:text-white">Loading...</div>
            </div>
          }>
            <Hero />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>}>
            <About />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>}>
            <Skills />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>}>
            <Projects />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>}>
            <Resume />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;