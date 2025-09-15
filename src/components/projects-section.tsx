"use client";

import { motion } from "framer-motion";
import { Github, Newspaper } from "lucide-react";
import type { Project } from "@/entities/project/model/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open Source <span className="text-blue-400">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground">혼자 글적글적 열심히 했던 흔적들</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-foreground rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  {project.urls.map((github, urlIndex) => (
                    <motion.a
                      key={urlIndex}
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-muted text-foreground rounded transition-colors text-sm"
                    >
                      {github.type === "github" && <Github className="w-4 h-4" />}
                      {github.type === "news" && <Newspaper className="w-4 h-4" />}

                      {github.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
