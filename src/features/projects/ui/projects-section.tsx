"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { projects } from "@/entities/project";
import { ProjectCard } from "./project-card";

export const ProjectsSection = memo(function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">Some of my recent work that I&apos;m proud of</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});
