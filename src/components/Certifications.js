import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { SiMongodb, SiPython, SiReact } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Front End Development',
      provider: 'Simplilearn',
      date: 'Jun 2025',
      description: 'Comprehensive certification covering modern frontend development practices, responsive design, and user experience principles.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX Principles'],
      icon: SiReact,
      iconColor: 'text-blue-500',
      certificateUrl: 'https://simpli-web.app.link/e/ZJlHPvGvzUb',
      highlights: [
        'Modern frontend development techniques',
        'Responsive web design principles',
        'JavaScript ES6+ features',
        'Cross-browser compatibility',
        'Performance optimization strategies'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Python Programming',
      provider: 'Infosys Springboard',
      date: 'Sep 2024',
      description: 'Advanced Python programming certification covering core concepts, data structures, algorithms, and practical applications.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'OOP', 'File Handling'],
      icon: SiPython,
      iconColor: 'text-yellow-500',
      certificateUrl: 'https://drive.google.com/file/d/1__zeHC_absJ7RJwqqvlKouD0E-UlJduV/view',
      highlights: [
        'Advanced Python programming concepts',
        'Object-oriented programming principles',
        'Data structures and algorithms',
        'Error handling and debugging',
        'Real-world application development'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'MongoDB Python Developer Path',
      provider: 'MongoDB University',
      date: 'Jan 2024',
      description: 'Specialized certification in MongoDB database development using Python, covering database design, queries, and optimization.',
      skills: ['MongoDB', 'PyMongo', 'Database Design', 'Aggregation', 'Indexing'],
      icon: SiMongodb,
      iconColor: 'text-green-500',
      certificateUrl: 'https://learn.mongodb.com/c/dm_xOHgKTn2gz-vzhzB0UA',
      highlights: [
        'MongoDB database fundamentals',
        'Python integration with PyMongo',
        'Advanced querying and aggregation',
        'Database performance optimization',
        'Schema design best practices'
      ],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const additionalSkills = [
    'RESTful API Development',
    'Version Control (Git)',
    'Agile Development',
    'DevOps Basics',
    'Cloud Deployment'
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and skill development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {cert.provider}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                  Skills Covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">
                  Key Learning Areas:
                </h4>
                <ul className="space-y-1">
                  {cert.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Certificate Link */}
              <motion.a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCertificate className="w-4 h-4" />
                View Certificate
                <FaExternalLinkAlt className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaAward className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Additional Professional Skills
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Beyond formal certifications, I've developed expertise in various technologies and methodologies through hands-on projects and self-directed learning.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              "In the rapidly evolving world of technology, staying current is not just an advantage—it's essential. 
              Each certification represents not just knowledge gained, but a commitment to excellence and a foundation 
              for tackling tomorrow's challenges. I believe in learning by doing, which is why every certification 
              is immediately applied to real-world projects."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;