import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Zap, Target, Heart } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Experienced in React.js, Node.js, MongoDB, and Java applications',
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: '600+ coding problems solved across GeeksforGeeks and LeetCode',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality solutions and continuous learning',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love for technology, cricket, and music drives my creativity',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"
              />
              <div className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  As a Computer Science undergraduate specializing in AI/ML, I've discovered my passion 
                  for creating digital solutions that make a difference. My journey began with curiosity 
                  about how technology works, and it has evolved into a deep love for full-stack development.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Through my internship at ZEETEE and various personal projects, I've gained hands-on 
                  experience in building scalable web applications. I believe in writing clean, 
                  efficient code and creating user experiences that are both functional and delightful.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me playing cricket or listening to music - 
                  both activities that fuel my creativity and help me approach problems from different angles.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center group hover:border-blue-400/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;