"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Palette, Zap } from "lucide-react";
import { memo } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Full-stack Development",
    description:
      "React, TypeScript 프론트엔드부터 Node.js, MySQL 백엔드까지 풀스택 개발 경험을 보유하고 있습니다.",
  },
  {
    icon: Palette,
    title: "Canvas & WebGL",
    description:
      "복잡한 그래픽 렌더링과 Canvas API, WebGL을 활용한 고성능 UI 컴포넌트 개발 전문성을 가지고 있습니다.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "번들 사이즈 50% 감소 등 실질적인 성능 최적화 경험으로 사용자 경험을 개선합니다.",
  },
  {
    icon: Heart,
    title: "E-commerce & Platform",
    description:
      "대규모 이커머스와 디자인 플랫폼 개발 경험으로 안정적인 서비스 구축 노하우를 보유합니다.",
  },
] as const;

export const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            대규모 이커머스, 디자인 플랫폼, CRM 시스템 개발 경험을 보유한 소프트웨어 엔지니어입니다.
            성능 최적화와 사용자 경험 개선에 전문성을 가지고 현실적인 문제 해결에 집중합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="text-8xl opacity-30">👨‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              롯데쇼핑 이커머스 플랫폼에서 번들 사이즈 50% 감소를 달성하고, 미리디 캔버스 에디터에서
              복잡한 그래픽 렌더링 시스템을 구축했습니다. WeStudy CRM 시스템 개발을 통해 풀스택 개발
              역량을 기른 경험 있는 소프트웨어 엔지니어입니다.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              React, TypeScript, Node.js를 중심으로 한 현대적인 웹 기술 스택을 활용하여 확장
              가능하고 유지보수가 용이한 애플리케이션을 개발합니다. 성능 최적화와 사용자 경험 개선에
              특별한 관심을 가지고 지속적으로 학습하며 성장하고 있습니다.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">5+</span>
                <span className="text-gray-300 ml-2">Years Experience</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">50%</span>
                <span className="text-gray-300 ml-2">Bundle Size Reduction</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">3</span>
                <span className="text-gray-300 ml-2">Major Companies</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            함께 일해요
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});
