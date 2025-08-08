import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaGithub, FaHeart, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: '3+ Projects',
      description: 'Real applications, real impact',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: FaRocket,
      title: 'Full-Stack',
      description: 'Frontend to backend mastery',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: FaBrain,
      title: 'AI Enthusiast',
      description: 'Data Science & AI-powered solutions',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: FaGithub,
      title: 'Open Source',
      description: 'Building together',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-800/20'
    }
  ];

  const personalTraits = [
    {
      icon: FaHeart,
      text: "Problem solver at heart",
      color: "text-red-500"
    },
    {
      icon: FaLightbulb,
      text: "Always learning something new",
      color: "text-yellow-500"
    },
    {
      icon: FaCode,
      text: "Code with purpose",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-indigo-950/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-indigo-500/10 rounded-full blur-3xl floating-element"></div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Building tomorrow's solutions with today's technology
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Personal Story */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-10 hover-lift relative overflow-hidden group">
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl glow-blue">
                        <span className="text-white font-bold text-2xl">H</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        Hey, I'm Hemanth! 👋
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">CSE Student</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Data Science</span>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">AI Enthusiast</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <motion.p 
                      className="text-xl leading-relaxed font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      I'm a CSE student specializing in Data Science with a deep passion for AI. Currently building 
                      AI-powered applications that turn complex problems into simple, elegant solutions.
                    </motion.p>
                    
                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      My journey started with curiosity about how data and AI can transform lives. Now I'm creating 
                      tools that simplify legal documents, organize notes, and help job seekers—combining my data 
                      science expertise with AI enthusiasm to build meaningful technology.
                    </motion.p>

                    <motion.p 
                      className="text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      When I'm not coding, I'm probably exploring the latest AI models, experimenting with new 
                      data science techniques, or contributing to open-source projects. I'm always excited about 
                      the next breakthrough in AI!
                    </motion.p>
                  </div>
                </div>

                {/* Enhanced Personal Traits */}
                <motion.div 
                  className="mt-8 pt-8 border-t border-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-wrap gap-4">
                    {personalTraits.map((trait, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 px-5 py-3 glass rounded-2xl hover-lift group cursor-pointer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${trait.color === 'text-red-500' ? 'from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30' : trait.color === 'text-yellow-500' ? 'from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30' : 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'}`}>
                          <trait.icon className={`w-4 h-4 ${trait.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {trait.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={`glass-card p-8 hover-lift group relative overflow-hidden ${highlight.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-300 ${highlight.color === 'text-blue-500' ? 'glow-blue' : highlight.color === 'text-purple-500' ? 'glow-purple' : ''}`}>
                        <highlight.icon className={`w-8 h-8 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${highlight.color === 'text-blue-500' ? 'from-blue-400 to-blue-600' : highlight.color === 'text-green-500' ? 'from-green-400 to-green-600' : highlight.color === 'text-purple-500' ? 'from-purple-400 to-purple-600' : 'from-gray-400 to-gray-600'} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Philosophy Quote */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-12 max-w-5xl mx-auto hover-lift relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-indigo-400/10"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center gap-4 mb-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl glow-blue">
                    <FaLightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    My Philosophy
                  </h3>
                </motion.div>
                
                <motion.blockquote 
                  className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl text-blue-500 font-bold">"</span>
                  Good code solves problems. Great code solves problems people didn't even know they had.
                  <span className="text-4xl text-purple-500 font-bold">"</span>
                </motion.blockquote>
                
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Every project I build aims to make someone's day a little bit easier.
                </motion.p>
                
                {/* Decorative elements */}
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;