import React from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const Resume = () => {
  const experience = [
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
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AI APIs', 'Docker']
    },
    {
      role: 'Open Source Contributor',
      company: 'GitHub Community',
      location: 'Remote',
      duration: '2024 - Present',
      type: 'Community Contribution',
      description: 'Contributing to open-source projects and building tools for the developer community.',
      achievements: [
        'Developed and maintained multiple open-source projects',
        'Created comprehensive documentation and tutorials',
        'Collaborated with developers worldwide on various initiatives',
        'Implemented modern development practices and code standards',
        'Shared knowledge through detailed project repositories'
      ],
      technologies: ['React', 'Python', 'Flask', 'APIs', 'Documentation']
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
      technologies: ['Python', 'Data Science', 'Machine Learning', 'Algorithms', 'System Design']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      specialization: 'Data Science',
      institution: 'Sreyas Institute of Engineering and Technology',
      location: 'Hyderabad, India',
      duration: 'Oct 2022 - Jun 2026',
      status: 'Currently Pursuing',
      description: 'B.Tech, Computer Science and Engineering (Data Science) - CGPA: 7.46/10',
      highlights: [
        'Specialized track in Data Science and AI',
        'Strong foundation in algorithms and data structures',
        'Project-based learning with real-world applications'
      ],
      relevantCourses: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Database Management Systems',
        'Web Development',
        'Artificial Intelligence'
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      specialization: 'Mathematics, Physics, Chemistry',
      institution: 'Sri Chaitanya Jr. College',
      location: 'Khammam, India',
      duration: 'Jun 2020 - Mar 2022',
      status: 'Completed',
      description: 'Intermediate (MPC) - Percentage: 85.9',
      highlights: [
        'Strong mathematical foundation',
        'Analytical thinking and problem-solving skills'
      ],
      relevantCourses: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science Basics'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      provider: 'Oracle',
      date: 'Aug 2025',
      description: 'Professional certification in Generative AI covering Oracle Cloud Infrastructure and AI technologies.',
      skills: [
        'Generative AI',
        'Oracle Cloud Infrastructure',
        'AI Technologies',
        'Cloud Computing',
        'Machine Learning'
      ]
    },
    {
      title: 'Simplilearn Front End Development',
      provider: 'Simplilearn',
      date: 'Jun 2025',
      description: 'Comprehensive certification covering modern frontend development practices, responsive design, and user experience principles.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design',
        'UI/UX Principles'
      ]
    },
    {
      title: 'MongoDB Python Developer Path',
      provider: 'MongoDB University',
      date: 'Jan 2024',
      description: 'Specialized certification in MongoDB database development using Python, covering database design, queries, and optimization.',
      skills: [
        'MongoDB',
        'PyMongo',
        'Database Design',
        'Aggregation',
        'Indexing'
      ]
    }
  ];

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
    <section id="resume" className="section-padding relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-black dark:to-slate-950">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <FaGraduationCap className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              My Journey
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Resume & Experience</span>
          </h2>

          <p className="text-body-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-8">
            A comprehensive overview of my professional journey, education, and achievements
          </p>
          <div>
            <button
              onClick={downloadResume}
              className="btn-primary"
            >
              <FaDownload className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 mr-4">
                <FaBriefcase className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="heading-sm gradient-text">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="card-premium p-8 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-xl mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          {exp.duration}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {exp.type}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-body">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="skill-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 mr-4">
                  <FaGraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="heading-sm gradient-text">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card-premium p-8 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          {edu.duration}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {edu.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {edu.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">
                        Highlights:
                      </h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="skill-tag"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 mr-4">
                  <FaAward className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="heading-sm gradient-text">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-premium p-6 hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-base flex-1">
                        {cert.title}
                      </h4>
                      <div className="text-right ml-4">
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {cert.date}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          {cert.provider}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="skill-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;