"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Experience } from "@/entities/user";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = memo(function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">
            {experience.title}
          </h3>
          <h4 className="text-xl text-blue-400 mb-3">{experience.company}</h4>

          <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});