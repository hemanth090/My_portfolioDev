import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Naveen_Hemanth_Kokkonda_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-indigo-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full blur-2xl floating-element"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Enhanced Profile Avatar */}
          <motion.div
            className="relative mx-auto mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl glow-blue relative overflow-hidden">
              <span className="relative z-10">NH</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-full animate-pulse"></div>
            </div>
            {/* Floating rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Hemanth</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer & AI Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            CSE student specializing in Data Science with a passion for AI.
            Building innovative AI-powered solutions that solve real-world problems.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={downloadResume}
              className="btn-primary flex items-center gap-3 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="group-hover:animate-bounce transition-transform duration-300" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="group-hover:animate-pulse transition-transform duration-300" />
              <span>Let's Connect</span>
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="btn-secondary flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <motion.div
                className="w-2 h-2 bg-current rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/hemanthkokkonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 group hover-lift glow-blue"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="https://github.com/hemanth090"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 group hover-lift"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="mailto:naveenhemanth4@gmail.com"
              className="p-4 glass rounded-2xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white transition-all duration-300 group hover-lift"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="tel:+916300296968"
              className="p-4 glass rounded-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 group hover-lift"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;