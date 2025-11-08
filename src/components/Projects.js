import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import userData from '../user-content.json';

const Projects = () => {
  const { projects } = userData;
  const [activeFilter, setActiveFilter] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-black">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <FaGithub className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              My Work
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <p className="text-body-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Showcasing production applications that solve real-world problems with AI-powered solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 transform scale-105'
                  : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl text-slate-600 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-600 hover-lift'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 px-4 py-2 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="heading-md project-title">
                    {project.title}
                  </h3>

                  <p className="text-body text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-6 pt-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200/50 dark:border-slate-700/50">
                          <div className="text-2xl font-bold gradient-text mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <FaGithub className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
