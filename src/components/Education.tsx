import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const education = [
    {
      institution: 'Oriental Institute of Science and Technology',
      degree: 'B.Tech in CSE-AIML',
      location: 'Bhopal, M.P.',
      grade: 'CGPA: 7.77/10.00',
      icon: GraduationCap,
      gradient: 'from-blue-400 to-purple-500',
      current: true,
    },
    {
      institution: 'Vivekanand Public School',
      degree: '12th - M.P. Board',
      location: 'Bhedghat, M.P.',
      grade: 'Percentage: 75%',
      icon: Award,
      gradient: 'from-green-400 to-blue-500',
      current: false,
    },
  ];

  const certifications = [
    {
      title: 'Core Java',
      provider: 'Coursera',
      icon: '☕',
    },
    {
      title: 'SQL',
      provider: 'HackerRank',
      icon: '🗃️',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                  >
                    <div className={`bg-gradient-to-br ${edu.gradient.replace('to-', 'to-').replace('from-', 'from-')}/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500`}>
                      {edu.current && (
                        <motion.div
                          animate={{ pulse: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs px-3 py-1 rounded-full"
                        >
                          Current
                        </motion.div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center group-hover:shadow-lg`}
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {edu.institution}
                          </h4>
                          <p className="text-blue-400 font-semibold mb-3">{edu.degree}</p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <MapPin size={14} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Award size={14} />
                              <span>{edu.grade}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 group"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl"
                    >
                      {cert.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400">{cert.provider}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
            >
              <h4 className="text-xl font-bold text-white mb-6">Academic Journey</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-3xl font-bold text-blue-400 mb-2"
                  >
                    4+
                  </motion.div>
                  <div className="text-gray-300 text-sm">Years of Study</div>
                </div>
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-3xl font-bold text-purple-400 mb-2"
                  >
                    2+
                  </motion.div>
                  <div className="text-gray-300 text-sm">Certifications</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;