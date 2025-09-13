"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "깨끗한 코드",
    description: "시간이 지나도 유지보수가 가능하고 확장성 있는 깨끗한 코드를 작성하는 것을 믿어요.",
  },
  {
    icon: Palette,
    title: "UI 매직",
    description: "예외적인 사용자 경험을 제공하는 아름답고 직관적인 인터페이스를 만들어요.",
  },
  {
    icon: Zap,
    title: "성능 최적화",
    description: "부드러운 사용자 상호작용을 위해 애플리케이션의 속도와 효율성을 최적화해요.",
  },
  {
    icon: Heart,
    title: "열정",
    description: "프론트엔드 개발과 지속적인 학습에 진정으로 열정을 가지고 있어요.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            놀라운 디지털 경험을 만드는 것을 좋아하는 프론트엔드 개발자입니다. <br/>
            현대적인 웹 기술과 사용자 중심 디자인에 집중하여, 아이디어를 코드로 현실로 만들어냅니다.
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
            <p className="text-foreground text-lg leading-relaxed">
              5년 이상의 프론트엔드 개발 경험을 바탕으로 React, Next.js, TypeScript를 사용하여 
              현대적인 웹 애플리케이션 제작을 전문으로 하고 있어요. 깨끗한 코드 작성과 
              예외적인 경험을 제공하는 아름다운 인터페이스 제작에 열정을 가지고 있어요.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              코딩을 하지 않을 때는 새로운 기술을 탐구하거나, 오픈소스 프로젝트에 기여하거나, 
              개발자 커뮤니티와 지식을 공유하는 시간을 보내요.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">5+</span>
                <span className="text-foreground ml-2">년 경력</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">50+</span>
                <span className="text-foreground ml-2">프로젝트 완성</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">100%</span>
                <span className="text-foreground ml-2">고객 만족도</span>
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
                className="bg-card border border-border rounded-lg p-6 text-center hover:bg-muted transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
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
}