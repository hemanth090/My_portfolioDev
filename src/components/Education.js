import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      specialization: 'Data Science',
      institution: 'Sreyas Institute of Engineering and Technology',
      location: 'Hyderabad, India',
      duration: 'Oct 2022 - Jun 2026',
      status: 'Currently Pursuing',
      description: 'Comprehensive program focusing on computer science fundamentals with specialized coursework in data science, machine learning, and AI applications.',
      highlights: [
        'Specialized track in Data Science and AI',
        'Strong foundation in algorithms and data structures',
        'Hands-on experience with modern development frameworks',
        'Active participation in coding competitions and hackathons',
        'Project-based learning with real-world applications'
      ],
      relevantCourses: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Database Management Systems',
        'Web Development',
        'Software Engineering',
        'Artificial Intelligence',
        'Data Mining',
        'Computer Networks'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      degree: 'Intermediate (MPC)',
      specialization: 'Mathematics, Physics, Chemistry',
      institution: 'Sri Chaitanya Jr. College',
      location: 'Khammam, Telangana',
      duration: 'Sep 2020 - Mar 2022',
      status: 'Completed',
      description: 'Pre-university education with focus on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations.',
      highlights: [
        'Strong mathematical foundation',
        'Analytical thinking and problem-solving skills',
        'Scientific methodology and research approach',
        'Preparation for engineering entrance examinations'
      ],
      relevantCourses: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science Basics'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      degree: 'Matriculation (SSC)',
      specialization: 'Secondary School Certificate',
      institution: 'New Vision School',
      location: 'Khammam, Telangana',
      duration: 'Jun 2019 - Mar 2020',
      status: 'Completed',
      description: 'Secondary education providing comprehensive knowledge across multiple subjects and developing fundamental academic skills.',
      highlights: [
        'Well-rounded education across multiple disciplines',
        'Development of communication and presentation skills',
        'Foundation in mathematics and sciences',
        'Introduction to computer applications'
      ],
      relevantCourses: [
        'Mathematics',
        'Science',
        'English',
        'Social Studies',
        'Computer Applications'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="education" className="section-padding bg-white/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building knowledge through structured learning and practical application
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                        <FaGraduationCap className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${edu.color}`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    
                    {edu.specialization && (
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-3">
                        Specialization: {edu.specialization}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <FaAward className="w-5 h-5 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="space-y-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: courseIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Learning Philosophy
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              "Education is not just about acquiring knowledge—it's about developing the ability to think 
              critically, solve complex problems, and adapt to an ever-changing technological landscape. 
              My academic journey has been complemented by hands-on projects and real-world applications, 
              ensuring that theoretical knowledge translates into practical skills."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;