import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaClock, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'LegalEase - AI Legal Document Simplifier',
      description: 'An AI-powered web application that simplifies legal documents in 75+ languages, increasing comprehension speed by 3x for 100+ users.',
      image: '/legalease.png',
      technologies: ['React 18', 'Node.js', 'Express', 'Groq AI', 'Tesseract.js', 'Tailwind CSS'],
      features: [
        'Document intake system supporting PDF, DOCX, and image formats',
        'Groq API integration with streaming summaries',
        'Zero-retention file parsing via RAM-based buffers',
        'Multi-language support for 75+ languages'
      ],
      metrics: [
        { icon: FaUsers, label: '100+ Users', value: '100+' },
        { icon: FaClock, label: 'Response Time', value: '1.8s' },
        { icon: FaChartLine, label: 'Upload Success', value: '90%' }
      ],
      githubUrl: 'https://github.com/hemanth090/LegalEase',
      liveUrl: 'https://legalease-frontend-ihrt.onrender.com/',
      date: 'Jul 2025',
      category: 'Full-Stack AI Project'
    },
    {
      title: 'Smart Notes Organizer',
      description: 'A MERN-stack application that automates handwritten content extraction and provides AI-powered summaries with drag-and-drop organization.',
      image: '/smartNotesOrganizer.png',
      technologies: ['React 18', 'Node.js', 'MongoDB', 'Groq AI', 'Tesseract.js', 'Tailwind CSS'],
      features: [
        'Automated handwritten content extraction using Tesseract.js',
        'Groq-powered LLaMA3-70B summaries with 95% accuracy',
        'Canvas-based drag-and-drop editor',
        'Optimized API endpoints and database queries'
      ],
      metrics: [
        { icon: FaChartLine, label: 'Accuracy', value: '95%' },
        { icon: FaClock, label: 'Time Saved', value: '60%' },
        { icon: FaUsers, label: 'Performance', value: '38%' }
      ],
      githubUrl: 'https://github.com/hemanth090/Smart_Note_Organizer',
      liveUrl: 'https://smart-note-organizer-1.onrender.com/',
      date: 'Jun 2025',
      category: 'MERN-Stack AI Project'
    },
    {
      title: 'ATS Resume Analyzer',
      description: 'An academic project that benchmarks resumes using skill-to-job-description matching with D3.js visualization dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Flask', 'MongoDB', 'Groq AI', 'Docker', 'REST APIs'],
      features: [
        'Resume analysis with 85% accuracy in relevance scoring',
        'Asynchronous Flask workers for improved performance',
        'D3.js-based dashboard for skill gap heatmaps',
        'Docker containerization with 99.9% uptime'
      ],
      metrics: [
        { icon: FaChartLine, label: 'Accuracy', value: '85%' },
        { icon: FaUsers, label: 'Users Helped', value: '70+' },
        { icon: FaClock, label: 'Processing Speed', value: '60%' }
      ],
      githubUrl: 'https://github.com/hemanth090/ATS-V3',
      liveUrl: 'https://ats-v3.onrender.com/',
      date: 'Mar 2025',
      category: 'Academic Project'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications that solve problems and create value
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-4 group">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 aspect-video">
                    {project.image.startsWith('/api/placeholder') ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-6xl font-bold text-primary-300 dark:text-primary-700">
                          {project.title.split(' ')[0].charAt(0)}
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metricIndex}
                      className="text-center p-3 glass rounded-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <metric.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="skill-tag text-xs"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="group-hover:rotate-12 transition-transform duration-200" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub for additional projects and contributions to open-source.
            </p>
            <motion.a
              href="https://github.com/hemanth090"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;