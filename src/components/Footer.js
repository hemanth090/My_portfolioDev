import React from 'react';
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
    <footer className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200/20 dark:border-slate-800/50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-4xl font-bold gradient-text mb-6">
                  Naveen Hemanth Kokkonda
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md text-lg">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">AI-First Full-Stack Developer</span> passionate about creating innovative solutions that make a real difference. Building the future, one line of code at a time.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card">
              <h4 className="text-xl font-semibold mb-6 gradient-text">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 hover:translate-x-1 transform inline-block font-medium"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="glass-card">
              <h4 className="text-xl font-semibold mb-6 gradient-text">Get in Touch</h4>
              <div className="space-y-4">
                <div className="text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Email</p>
                  <a
                    href="mailto:naveenhemanth4@gmail.com"
                    className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  >
                    naveenhemanth4@gmail.com
                  </a>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Phone</p>
                  <a
                    href="tel:+916300296968"
                    className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  >
                    +91 6300296968
                  </a>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Location</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/20 dark:border-slate-800/50">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <span className="text-sm">© {currentYear} Naveen Hemanth Kokkonda. Made with</span>
                <FaHeart className="text-violet-500 animate-pulse" />
                <span className="text-sm">using React & Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Built for impact, designed for excellence</span>
                <button
                  onClick={scrollToTop}
                  className="btn-icon"
                  aria-label="Back to top"
                >
                  <FaArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500"></div>
    </footer>
  );
};

export default Footer;