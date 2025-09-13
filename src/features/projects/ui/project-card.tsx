"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/entities/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-black/50 border border-white/10 rounded-lg overflow-hidden hover:border-blue-400/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
          <div className="text-6xl opacity-20">🚀</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-2 border border-white/20 hover:bg-white/10 text-white rounded transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
});