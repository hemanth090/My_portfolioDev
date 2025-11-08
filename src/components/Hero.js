import React from 'react';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaStar } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Naveen_Hemanth_Kokkonda_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="h-dvh flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-black">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full blur-3xl float pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl float-delayed pointer-events-none"></div>

      {/* Main Content - Takes available space except bottom padding */}
      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 fade-in-up">
            <FaStar className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              AI Engineer
            </span>
          </div>

          {/* Main Content */}
          <div className="fade-in-up">
            <h1 className="font-bold tracking-tight mb-4" style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              <span className="block text-slate-900 dark:text-slate-50">Hello, I'm</span>
              <span className="gradient-text animate-gradient">Naveen Hemanth</span>
            </h1>

            <h2 className="font-semibold gradient-text-subtle mb-6" style={{
              fontSize: 'clamp(1rem, 3vw, 1.875rem)',
              lineHeight: '1.2'
            }}>
              Building AI-Powered Applications That Solve Real Business Problems
            </h2>

            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8" style={{
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              lineHeight: '1.6'
            }}>
              I architect AI-integrated solutions that deliver measurable impact—
              from <span className="font-semibold text-violet-600 dark:text-violet-400">95% accuracy</span> in legal document analysis
              to <span className="font-semibold text-blue-600 dark:text-blue-400">90% relevance scores</span> in knowledge retrieval.
            </p>
          </div>

          {/* Key Stats - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 fade-in-up">
            <div className="metric-card p-3">
              <div className="font-bold gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>3+</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">Production Apps</div>
            </div>
            <div className="metric-card p-3">
              <div className="font-bold gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>95%</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">AI Accuracy</div>
            </div>
            <div className="metric-card p-3">
              <div className="font-bold gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>100+</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">Active Users</div>
            </div>
            <div className="metric-card p-3">
              <div className="font-bold gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>2+</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons - Compact */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 fade-in-up">
            <button
              onClick={downloadResume}
              className="btn-primary group"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Download Resume
              <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary group"
            >
              Get In Touch
              <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Links - Compact */}
          <div className="flex justify-center space-x-3 mb-6 fade-in-up">
            <a
              href="https://github.com/hemanth090"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/hemanthkokkonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:naveenhemanth4@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <div className="relative z-10 pb-4 flex justify-center">
        <div
          className="glass-card p-3 hover-lift cursor-pointer group pulse-glow"
          onClick={() => scrollToSection('#about')}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold mb-2 text-slate-600 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center group-hover:border-violet-500 dark:group-hover:border-violet-400 transition-all duration-300">
              <div className="w-1 h-3 bg-gradient-to-b from-violet-500 to-blue-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
