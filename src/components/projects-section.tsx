"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ImageComparisonSlider } from "./image-comparison-slider";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure payment processing.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Firebase", "Framer Motion", "DnD Kit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that provides detailed weather information with interactive charts and location-based forecasts.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            자랑스럽게 소개하는 최근 작업들
          </p>
        </motion.div>

        {/* Image Comparison Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Interactive Image Comparison
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            드래그해서 Before/After를 비교해보세요
          </p>
          <ImageComparisonSlider
            beforeImage=""
            afterImage=""
            alt1="Before design"
            alt2="After design"
            className="max-w-4xl mx-auto"
          />
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
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-foreground rounded text-xs"
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
                    데모 보기
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-muted text-foreground rounded transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    코드 보기
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
