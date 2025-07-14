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
    link.href = '/resume.pdf'; // You'll need to add the PDF to public folder
    link.download = 'Naveen_Hemanth_Kokkonda_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            NH
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gray-800 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Naveen</span>
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
            Final year Computer Science student specializing in AI-integrated full-stack development. 
            Built 3 production applications reaching 100+ users with 85% accuracy rates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={downloadResume}
              className="btn-primary flex items-center gap-2 group"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-2 group"
            >
              <FaEnvelope className="group-hover:animate-pulse" />
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-secondary flex items-center gap-2"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/hemanthkokkonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/hemanth090"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
            </motion.a>
            <motion.a
              href="mailto:naveenhemanth4@gmail.com"
              className="p-3 glass rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
            </motion.a>
            <motion.a
              href="tel:+916300296968"
              className="p-3 glass rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
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