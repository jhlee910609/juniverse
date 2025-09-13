"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { RocketLaunchEffect } from "./rocket-launch-effect";
import { TypewriterEffect } from "./typewriter-effect";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-background">
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
              "Hello, My name is JunHee Lee",
              "I'm a Frontend Developer",
              "Growing together as a developer",
            ]}
            className="text-xl md:text-2xl text-muted-foreground"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            React, Next.js, TypeScript를 전문으로 하는 열정적인 프론트엔드 개발자입니다.
            <br />
            현대적인 웹 기술로 매력적인 사용자 경험을 만들어냅니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          className="animate-bounce-gentle"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" />
        </motion.button>
      </div>
    </section>
  );
}
