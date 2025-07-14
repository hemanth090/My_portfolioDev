import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/hemanthkokkonda/',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/hemanth090',
      label: 'GitHub',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:naveenhemanth4@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-4">
                  Naveen Hemanth Kokkonda
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Full-Stack Developer & AI Enthusiast passionate about creating innovative solutions 
                  that make a real difference. Building the future, one line of code at a time.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <div className="text-gray-300">
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:naveenhemanth4@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    naveenhemanth4@gmail.com
                  </a>
                </div>
                <div className="text-gray-300">
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+916300296968"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    +91 6300296968
                  </a>
                </div>
                <div className="text-gray-300">
                  <p className="font-medium">Location</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                className="flex items-center gap-2 text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span>© {currentYear} Naveen Hemanth Kokkonda. Made with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span>Built for impact, designed for excellence</span>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Back to top"
                >
                  <FaArrowUp className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
    </footer>
  );
};

export default Footer;