"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/entities/user";
import { ExperienceCard } from "./experience-card";

export const ExperienceSection = memo(function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400">
            Building amazing digital experiences for the past 5 years
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});