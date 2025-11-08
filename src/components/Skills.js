import React, { useState, useEffect, useRef } from 'react';
import {
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNodeJs, FaDocker, FaCloud, FaBrain, FaChartLine, FaLink
} from 'react-icons/fa';
import { SiExpress, SiFlask, SiMongodb, SiNumpy, SiPandas, SiOpenai } from 'react-icons/si';
import userData from '../user-content.json';

const Skills = () => {
  const { skills } = userData;
  const { categories, additionalTechnologies } = skills;
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate in all skills
          categories.forEach((category) => {
            category.skills.forEach((skill, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, skill.name]));
              }, index * 100);
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [categories]);

  // Icon mapping
  const iconMap = {
    FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaNodeJs, FaDocker, FaCloud, FaBrain, FaChartLine, FaLink,
    SiExpress, SiFlask, SiMongodb, SiNumpy, SiPandas, SiOpenai
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-black dark:to-slate-950">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <FaBrain className="w-4 h-4 text-violet-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              My Expertise
            </span>
          </div>

          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>

          <p className="text-body-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            A comprehensive toolkit for building modern, intelligent applications with AI at the forefront
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="card-premium p-8 hover-lift group"
            >
              <h3 className="heading-sm mb-8 text-center gradient-text">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const isVisible = visibleSkills.has(skill.name);
                  return (
                    <div
                      key={skillIndex}
                      className="transform transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                          {iconMap[skill.icon] ? (
                            React.createElement(iconMap[skill.icon], { className: "w-5 h-5 text-violet-600 dark:text-violet-400" })
                          ) : (
                            <div className="w-5 h-5 bg-violet-400 rounded"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="h-2.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-1000 ease-out"
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="heading-sm mb-8">
            <span className="gradient-text">Additional Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechnologies.map((tech, index) => (
              <span
                key={index}
                className="skill-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;