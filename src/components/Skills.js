import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiFlask, 
  SiTailwindcss, 
  SiBootstrap,
  SiNumpy,
  SiPandas,
  SiOpenai,
  SiSupabase,
  SiRender
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-yellow-500', level: 90 },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 85 },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 90 },
        { name: 'SQL', icon: FaDatabase, color: 'text-blue-600', level: 80 }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-400', level: 85 },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 80 },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-600', level: 80 },
        { name: 'Flask', icon: SiFlask, color: 'text-gray-800', level: 75 },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600', level: 85 }
      ]
    },
    {
      title: 'Data & AI',
      skills: [
        { name: 'NumPy', icon: SiNumpy, color: 'text-blue-600', level: 80 },
        { name: 'Pandas', icon: SiPandas, color: 'text-purple-600', level: 80 },
        { name: 'OpenAI API', icon: SiOpenai, color: 'text-green-600', level: 85 }
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 80 },
        { name: 'SupaBase', icon: SiSupabase, color: 'text-green-400', level: 75 },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: 85 },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 70 },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400', level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'RESTful APIs', 'Streamlit', 'Machine Learning', 
              'Responsive Design', 'Agile Development', 'Version Control',
              'API Integration', 'Cloud Deployment'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;