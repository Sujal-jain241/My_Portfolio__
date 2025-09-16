import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Java', 'Express.js', 'Node.js', 'REST APIs'],
      gradient: 'from-green-400 to-blue-500',
      bgGradient: 'from-green-500/10 to-blue-500/10',
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      gradient: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
      title: 'Database',
      skills: ['SQL', 'MongoDB', 'Database Design', 'Query Optimization'],
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      title: 'Tools & Others',
      skills: ['GitHub', 'Postman', 'Git', 'VS Code', 'Problem Solving'],
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
  ];

  const codingStats = [
    { platform: 'LeetCode', problems: '400+', color: 'text-orange-400' },
    { platform: 'GeeksforGeeks', problems: '200+', color: 'text-green-400' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/10">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-500`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Stats */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Coding Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {codingStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.problems}
                </motion.div>
                <div className="text-gray-300 font-medium">
                  Problems Solved
                </div>
                <div className="text-blue-400 font-semibold">
                  {stat.platform}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;