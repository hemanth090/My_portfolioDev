import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Personal Projects',
      location: 'Remote',
      duration: 'Jan 2024 - Present',
      type: 'Self-Directed Learning',
      description: 'Developing production-ready applications with focus on AI integration and user experience.',
      achievements: [
        'Built and deployed 3 web applications serving 100+ active users',
        'Achieved 85% accuracy in AI-powered resume analysis and document processing',
        'Implemented scalable architectures using MERN stack and Python Flask',
        'Integrated multiple AI APIs (OpenAI, Groq) for enhanced functionality',
        'Optimized application performance reducing load times by 38%'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AI APIs', 'Docker'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      role: 'Hackathon Participant',
      company: 'Inter-College Competitions',
      location: 'Hyderabad, India',
      duration: '2024 - 2025',
      type: 'Competitive Programming',
      description: 'Participated in multiple hackathons, consistently ranking in top positions.',
      achievements: [
        'Secured Top 5 rank in two inter-college hackathons',
        'Built real-time tools and applications under 48-hour constraints',
        'Collaborated with diverse teams to deliver innovative solutions',
        'Demonstrated rapid prototyping and problem-solving skills',
        'Presented technical solutions to industry expert panels'
      ],
      technologies: ['React', 'Python', 'Flask', 'APIs', 'Rapid Prototyping'],
      color: 'from-green-500 to-teal-600'
    },
    {
      role: 'Computer Science Student',
      company: 'Sreyas Institute of Engineering and Technology',
      location: 'Hyderabad, India',
      duration: 'Oct 2022 - Jun 2026',
      type: 'Academic',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Data Science.',
      achievements: [
        'Specialized in Data Science and AI applications',
        'Completed multiple certifications in Python, MongoDB, and Frontend Development',
        'Maintained strong academic performance while building practical projects',
        'Active participation in coding competitions and technical events',
        'Developed strong foundation in algorithms, data structures, and system design'
      ],
      technologies: ['Python', 'Data Science', 'Machine Learning', 'Algorithms', 'System Design'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of growth, learning, and building impactful solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="glass-card p-6 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${exp.color}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <FaBriefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '3+', label: 'Web Apps', description: 'Built and deployed' },
            { number: '100+', label: 'Active Users', description: 'Across all projects' },
            { number: '85%', label: 'AI Accuracy', description: 'Average model performance' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;