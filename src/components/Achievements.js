import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaChartLine, FaClock, FaCode, FaRocket } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Top 5 Hackathon Performer',
      description: 'Secured Top 5 rank in two inter-college hackathons by building real-time tools under 48 hours',
      icon: FaTrophy,
      iconColor: 'text-yellow-500',
      stats: [
        { label: 'Hackathons', value: '2+', icon: FaCode },
        { label: 'Hours', value: '48', icon: FaClock },
        { label: 'Rank', value: 'Top 5', icon: FaTrophy }
      ],
      highlights: [
        'Rapid prototyping and development under time constraints',
        'Innovative problem-solving approaches',
        'Effective team collaboration and leadership',
        'Technical presentation to industry experts',
        'Real-time application development'
      ],
      color: 'from-yellow-400 to-orange-500',
      bgPattern: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      title: 'AI Application Excellence',
      description: 'Delivered scalable AI apps achieving 85% accuracy in resume scoring and feedback systems',
      icon: FaChartLine,
      iconColor: 'text-green-500',
      stats: [
        { label: 'Accuracy', value: '85%', icon: FaChartLine },
        { label: 'Users', value: '100+', icon: FaUsers },
        { label: 'Apps', value: '3', icon: FaRocket }
      ],
      highlights: [
        'High-accuracy AI model implementation',
        'Scalable architecture design',
        'User-centric application development',
        'Performance optimization and monitoring',
        'Real-world impact and user adoption'
      ],
      color: 'from-green-400 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    }
  ];

  const metrics = [
    {
      number: '100+',
      label: 'Active Users',
      description: 'Across all deployed applications',
      icon: FaUsers,
      color: 'text-blue-500'
    },
    {
      number: '85%',
      label: 'AI Accuracy',
      description: 'Average model performance',
      icon: FaChartLine,
      color: 'text-green-500'
    },
    {
      number: '3',
      label: 'Production Apps',
      description: 'Successfully deployed and maintained',
      icon: FaRocket,
      color: 'text-purple-500'
    },
    {
      number: '48hrs',
      label: 'Hackathon Record',
      description: 'Fastest development time',
      icon: FaClock,
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white/50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that demonstrate technical excellence and real-world impact
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="space-y-12 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`glass-card p-8 ${achievement.bgPattern} hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Achievement Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} text-white shadow-lg`}>
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  {achievement.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: statIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <stat.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-800 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-gradient mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaRocket className="w-6 h-6 text-primary-500" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Making a Real Impact
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              "These achievements represent more than just technical milestones—they demonstrate the ability to 
              create solutions that genuinely help people. From simplifying complex legal documents to organizing 
              student notes, each project has been designed with real users in mind."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaUsers className="w-4 h-4 text-blue-500" />
                <span>User-Centric Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaChartLine className="w-4 h-4 text-green-500" />
                <span>Measurable Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaRocket className="w-4 h-4 text-purple-500" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;