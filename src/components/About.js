import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaTrophy } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: '3+ Projects',
      description: 'Web applications with 100+ users',
      color: 'text-blue-500'
    },
    {
      icon: FaRocket,
      title: '85% Accuracy',
      description: 'AI model performance across applications',
      color: 'text-green-500'
    },
    {
      icon: FaUsers,
      title: '100+ Users',
      description: 'Active users across deployed projects',
      color: 'text-purple-500'
    },
    {
      icon: FaTrophy,
      title: 'Top 5 Rank',
      description: 'In two inter-college hackathons',
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a final year Computer Science student with a deep passion for creating innovative 
                solutions that bridge the gap between artificial intelligence and practical applications. 
                My journey in software development has been driven by curiosity and a desire to build 
                technology that makes a real difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With hands-on experience in full-stack development and AI integration, I've successfully 
                deployed multiple production applications that serve real users. My approach combines 
                technical excellence with user-centric design, ensuring that every project not only 
                works flawlessly but also provides an exceptional user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
                or contributing to open-source projects. I believe in continuous learning and staying 
                ahead of the curve in this rapidly evolving tech landscape.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              My Development Philosophy
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              "Great software is not just about clean code or cutting-edge technology—it's about 
              understanding real problems and crafting solutions that genuinely improve people's lives. 
              Every line of code I write is guided by this principle: technology should be accessible, 
              reliable, and transformative."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;