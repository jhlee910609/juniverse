"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypewriterEffect, RocketLaunchEffect } from "@/shared/ui";
import { scrollToElement } from "@/shared/lib";
import { userProfile } from "@/entities/user";

export const HeroSection = memo(function HeroSection() {
  const handleScrollToNext = () => {
    scrollToElement("experience");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to my{" "}
            <RocketLaunchEffect>
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                universe
              </span>
            </RocketLaunchEffect>
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
              `Hello, My name is ${userProfile.name}`,
              "I'm a Frontend Developer",
              "Growing together as a developer",
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
            {userProfile.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {userProfile.skills.map((tech, index) => (
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
          onClick={handleScrollToNext}
          className="animate-bounce-gentle"
        >
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
        </motion.button>
      </div>
    </section>
  );
});