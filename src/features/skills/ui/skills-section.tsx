"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    title: "Graphics & Canvas",
    skills: [
      { name: "Canvas API", level: 85 },
      { name: "WebGL", level: 75 },
      { name: "Graphics Rendering", level: 80 },
      { name: "UI/UX Development", level: 85 },
    ],
  },
  {
    title: "Tools & Optimization",
    skills: [
      { name: "Webpack", level: 85 },
      { name: "Performance Optimization", level: 90 },
      { name: "Bundle Size Optimization", level: 95 },
      { name: "Git", level: 85 },
    ],
  },
] as const;

export const SkillsSection = memo(function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            다양한 프로젝트 경험을 통해 습득한 기술 스택과 전문 분야입니다.
            지속적인 학습과 실무 적용을 통해 발전시켜 나가고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">
            핵심 성과
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <p className="text-gray-300">번들 사이즈 감소</p>
              <p className="text-sm text-gray-400 mt-1">
                웹팩 최적화를 통한 성능 향상
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <p className="text-gray-300">주요 기업 프로젝트</p>
              <p className="text-sm text-gray-400 mt-1">
                대규모 서비스 개발 경험
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <p className="text-gray-300">년 개발 경험</p>
              <p className="text-sm text-gray-400 mt-1">
                프론트엔드부터 풀스택까지
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});