"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypewriterEffect } from "./typewriter-effect";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to my{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              universe
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <TypewriterEffect
            texts={[
              "I create beautiful user interfaces",
              "I build performant web applications",
              "I love clean code and UI magic",
              "I'm passionate about frontend development",
            ]}
            className="text-xl md:text-2xl text-gray-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A passionate frontend developer specializing in React, Next.js, and TypeScript.
            I create engaging user experiences with modern web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          className="animate-bounce-gentle"
        >
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
        </motion.button>
      </div>
    </section>
  );
}