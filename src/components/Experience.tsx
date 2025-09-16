import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-black/10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform md:-translate-x-1/2"></div>
          
          {/* Experience Card */}
          <div className="relative">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute left-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform md:-translate-x-1/2 z-10"
            />

            <motion.div
              variants={itemVariants}
              className="ml-12 md:ml-0 md:w-1/2 md:pr-8"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">ZEETEE</h3>
                    <h4 className="text-lg text-blue-400 mb-2">Full-Stack Development Internship</h4>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
                  >
                    <Building size={24} className="text-white" />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>July 1 - July 30, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Bhopal, M.P.</span>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300 mb-6">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborated with a small engineering team to build and deploy a customer-facing web portal for an IT services firm</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed backend workflows to enable real-time client queries via embedded email integration</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Designed and implemented an interactive interface that streamlined client access to services</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Delivered a live production site with source code available on GitHub</span>
                  </motion.li>
                </ul>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://zeetee.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Site</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;