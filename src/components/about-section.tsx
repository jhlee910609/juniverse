"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I believe in writing clean, maintainable, and scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "UI Magic",
    description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency, ensuring smooth user interactions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuinely passionate about frontend development and continuous learning.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;m a frontend developer who loves creating amazing digital experiences. 
            With a focus on modern web technologies and user-centered design, 
            I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="text-8xl opacity-30">👨‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in frontend development, I specialize in creating 
              modern web applications using React, Next.js, and TypeScript. I&apos;m passionate about 
              writing clean code and creating beautiful user interfaces that provide exceptional experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">5+</span>
                <span className="text-gray-300 ml-2">Years Experience</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">50+</span>
                <span className="text-gray-300 ml-2">Projects Completed</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">100%</span>
                <span className="text-gray-300 ml-2">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}