import React from 'react';
import { FaCode, FaRocket, FaBrain, FaGithub, FaGraduationCap, FaLightbulb, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'LLMs, RAG systems, Prompt Engineering',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: FaRocket,
      title: 'Production Applications',
      description: '3 live apps, 100+ users',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaCode,
      title: 'Full-Stack Expertise',
      description: 'MERN, Python, Cloud deployment',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'Oracle AI certified, always evolving',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-black">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <FaLightbulb className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Get to know me
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            <span className="gradient-text">The Problem Solver Behind</span>
            <br />
            <span className="gradient-text">AI-Powered Solutions</span>
          </h2>

          <p className="text-body-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-800 dark:text-slate-100">Picture this:</span> A lawyer spending hours deciphering complex legal documents. A researcher drowning in thousands of pages. I don't just see these problems—I build solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column: Description and Highlights */}
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="heading-sm mb-4 gradient-text">My Philosophy</h3>
              <p className="text-body mb-6">
                I'm an AI-first developer who believes the best technology is invisible. My job isn't just to use AI—it's to make AI work for people. With 2+ years of experience in LLM integration and a track record of 3 production applications, I specialize in turning complex AI capabilities into simple, intuitive solutions.
              </p>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20">
                <span className="text-sm font-medium gradient-text">Good code solves problems. Great code solves problems people didn't even know they had.</span>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="heading-sm mb-6 gradient-text">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/50 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${highlight.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Overview Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-3xl transform rotate-6"></div>

            <div className="relative card-premium p-10">
              <div className="space-y-8">
                <div>
                  <h3 className="heading-sm mb-2 gradient-text">My Approach</h3>
                  <p className="text-body-sm text-slate-600 dark:text-slate-300">
                    Building production-ready AI applications from ideation to deployment
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <FaBrain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">AI Integration Expertise</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Specialized in LLMs (Groq, OpenAI) with 2+ years experience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <FaRocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Production Mindset</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Every project deployed, used, and continuously improved</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <FaAward className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Certified Professional</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Oracle Generative AI Professional (2025)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="metric-card hover-lift group cursor-pointer">
            <div className="metric-value group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="metric-label">Production Apps</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Live applications</p>
          </div>

          <div className="metric-card hover-lift group cursor-pointer">
            <div className="metric-value group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <div className="metric-label">Active Users</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Across all projects</p>
          </div>

          <div className="metric-card hover-lift group cursor-pointer">
            <div className="metric-value group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <div className="metric-label">AI Accuracy</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Document analysis precision</p>
          </div>

          <div className="metric-card hover-lift group cursor-pointer">
            <div className="metric-value group-hover:scale-110 transition-transform duration-300">
              2+
            </div>
            <div className="metric-label">Years Experience</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">LLM and AI expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
