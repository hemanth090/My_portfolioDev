import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        formData,
        'your_public_key'
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Naveen_Hemanth_Kokkonda_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-black dark:to-slate-950">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <FaEnvelope className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Let's Connect
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <p className="text-body-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Ready to collaborate or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="heading-sm mb-8 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors group">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                    <FaEnvelope className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Email</p>
                    <a
                      href="mailto:naveenhemanth4@gmail.com"
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      naveenhemanth4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors group">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                    <FaPhone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Phone</p>
                    <a
                      href="tel:+916300296968"
                      className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      +91 6300296968
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-slate-900/50 transition-colors group">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                    <FaMapMarkerAlt className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card">
              <h3 className="heading-sm mb-8 gradient-text">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/hemanth090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanthkokkonda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:naveenhemanth4@gmail.com"
                  className="social-link"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="glass-card">
              <h3 className="heading-sm mb-6 gradient-text">Resume</h3>
              <button
                onClick={downloadResume}
                className="btn-primary"
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card-premium p-10">
              <h3 className="heading-sm mb-8 gradient-text">Send Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                  <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-textarea"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;