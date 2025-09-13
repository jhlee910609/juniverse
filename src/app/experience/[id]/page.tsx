"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Users, Award } from "lucide-react";
import { useTheme } from "@/shared/hooks";

interface ExperienceDetail {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  highlights: string[];
  responsibilities: string[];
  achievements: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    impact?: string;
  }[];
  teamSize?: string;
  website?: string;
}

const experienceDetails: Record<string, ExperienceDetail> = {
  "senior-frontend-developer": {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "Seoul, South Korea",
    period: "2022 - Present",
    description: "Leading frontend development team, architecting scalable React applications with Next.js and TypeScript. Improved performance by 40% and user engagement by 25%.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    highlights: [
      "성능 40% 향상 및 사용자 참여도 25% 증가",
      "5명의 프론트엔드 개발팀 리드",
      "마이크로 프론트엔드 아키텍처 도입",
      "코드 리뷰 프로세스 개선으로 버그 50% 감소"
    ],
    responsibilities: [
      "프론트엔드 팀 리더십 및 멘토링",
      "확장 가능한 React 애플리케이션 아키텍처 설계",
      "성능 최적화 및 코드 품질 관리",
      "신기술 도입 및 기술적 의사결정",
      "크로스 플랫폼 개발 전략 수립"
    ],
    achievements: [
      "월간 활성 사용자 200만명 서비스 개발",
      "웹 성능 점수(Lighthouse) 90점 이상 달성",
      "번들 크기 30% 최적화",
      "사용자 경험 개선으로 이탈률 15% 감소"
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "대규모 이커머스 플랫폼의 프론트엔드 아키텍처 설계 및 개발",
        technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Zustand"],
        impact: "월 매출 30% 증가에 기여"
      },
      {
        name: "Admin Dashboard",
        description: "실시간 데이터 시각화와 관리 기능을 제공하는 관리자 대시보드",
        technologies: ["React", "D3.js", "WebSocket", "Material-UI"],
        impact: "관리 업무 효율성 60% 향상"
      },
      {
        name: "Mobile-First Redesign",
        description: "모바일 우선 반응형 웹사이트 리뉴얼",
        technologies: ["React Native Web", "Styled Components", "PWA"],
        impact: "모바일 전환율 45% 증가"
      }
    ],
    teamSize: "5명",
    website: "https://techinnovators.com"
  },
  "frontend-developer": {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Seoul, South Korea",
    period: "2020 - 2022",
    description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX/UI designers to create pixel-perfect user interfaces.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS", "REST APIs"],
    highlights: [
      "10개 이상의 반응형 웹 애플리케이션 개발",
      "디자인 시스템 구축 및 문서화",
      "크로스 브라우저 호환성 100% 달성",
      "페이지 로딩 속도 50% 개선"
    ],
    responsibilities: [
      "React 및 Vue.js 기반 웹 애플리케이션 개발",
      "반응형 웹 디자인 구현",
      "REST API 연동 및 상태 관리",
      "크로스 브라우저 테스팅 및 최적화",
      "코드 리뷰 및 품질 관리"
    ],
    achievements: [
      "사용자 만족도 점수 4.8/5.0 달성",
      "웹 접근성 인증(KWCAG 2.1 AA) 획득",
      "컴포넌트 재사용성 80% 향상",
      "개발 생산성 35% 증대"
    ],
    projects: [
      {
        name: "Corporate Website",
        description: "기업용 멀티 페이지 웹사이트 개발",
        technologies: ["Vue.js", "Nuxt.js", "SCSS", "Strapi CMS"],
        impact: "브랜드 인지도 25% 상승"
      },
      {
        name: "SaaS Dashboard",
        description: "B2B SaaS 제품의 사용자 대시보드 개발",
        technologies: ["React", "Redux", "Chart.js", "Material-UI"],
        impact: "고객 리텐션 40% 향상"
      },
      {
        name: "Design System",
        description: "재사용 가능한 UI 컴포넌트 라이브러리 구축",
        technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
        impact: "개발 속도 50% 단축"
      }
    ],
    teamSize: "3명",
    website: "https://digitalsolutions.co.kr"
  },
  "junior-web-developer": {
    id: "junior-web-developer",
    title: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Seoul, South Korea",
    period: "2019 - 2020",
    description: "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    highlights: [
      "첫 직장에서 웹 개발 기초 다지기",
      "애자일 개발 방법론 습득",
      "풀스택 개발 경험 쌓기",
      "다양한 프로젝트 참여로 실무 경험 확대"
    ],
    responsibilities: [
      "회사 웹사이트 및 웹 애플리케이션 개발",
      "HTML, CSS, JavaScript를 활용한 프론트엔드 개발",
      "Node.js 및 MongoDB를 활용한 백엔드 개발",
      "웹사이트 유지보수 및 버그 수정",
      "애자일 스크럼 프로세스 참여"
    ],
    achievements: [
      "5개의 웹사이트 성공적 런칭",
      "웹사이트 성능 30% 개선",
      "사용자 피드백 기반 기능 개선",
      "개발팀 내 신규 기술 도입 제안"
    ],
    projects: [
      {
        name: "Company Portfolio",
        description: "스타트업 회사 소개 및 포트폴리오 웹사이트",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        impact: "회사 온라인 가시성 증대"
      },
      {
        name: "Task Management App",
        description: "팀 내부용 업무 관리 웹 애플리케이션",
        technologies: ["Node.js", "Express", "MongoDB", "EJS"],
        impact: "팀 생산성 20% 향상"
      },
      {
        name: "Customer Landing Page",
        description: "고객사 제품 홍보용 랜딩 페이지",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        impact: "리드 전환율 15% 증가"
      }
    ],
    teamSize: "2명",
    website: "https://startuplabs.kr"
  }
};

interface ExperienceDetailPageProps {
  params: {
    id: string;
  };
}

export default function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [experience, setExperience] = useState<ExperienceDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const experienceData = experienceDetails[params.id];
      setExperience(experienceData || null);
      setIsLoading(false);
    };

    loadExperience();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            경험 정보를 불러오는 중...
          </p>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}>
        <div className="text-center">
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-2xl font-bold mb-2">경험 정보를 찾을 수 없습니다</h1>
          <p className={`mb-6 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            요청하신 경험 정보가 존재하지 않습니다.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/experience')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            경험 목록으로 돌아가기
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className={`flex items-center mb-6 transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            뒤로 가기
          </button>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {experience.title}
            </h1>
            <h2 className="text-2xl text-blue-400 mb-4">{experience.company}</h2>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className={`flex items-center gap-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <Calendar className="w-4 h-4" />
                {experience.period}
              </div>
              <div className={`flex items-center gap-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
              {experience.teamSize && (
                <div className={`flex items-center gap-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  <Users className="w-4 h-4" />
                  팀 규모: {experience.teamSize}
                </div>
              )}
              {experience.website && (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  웹사이트
                </a>
              )}
            </div>

            <p className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              {experience.description}
            </p>
          </div>

          {/* 기술 스택 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
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
        </motion.div>

        {/* 주요 성과 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-400" />
            주요 성과
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experience.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <p className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 주요 업무 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">주요 업무</h3>
          <div className={`rounded-lg p-6 ${
            theme === "dark"
              ? "bg-gray-800/30 border border-gray-700"
              : "bg-gray-50 border border-gray-200"
          }`}>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-1">▸</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* 성과 및 결과 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">성과 및 결과</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-green-900/20 border border-green-700/50"
                    : "bg-green-50 border border-green-200"
                }`}
              >
                <p className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 주요 프로젝트 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">주요 프로젝트</h3>
          <div className="space-y-6">
            {experience.projects.map((project, index) => (
              <div
                key={index}
                onClick={() => router.push(`/experience/${params.id}/project/${project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`)}
                className={`p-6 rounded-lg cursor-pointer transition-all hover:scale-[1.02] ${
                  theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300"
                }`}
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-400 flex items-center gap-2">
                  {project.name}
                  <span className="text-sm opacity-70">→</span>
                </h4>
                <p className={`mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-medium mb-2">사용 기술:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.impact && (
                  <div className={`p-3 rounded ${
                    theme === "dark"
                      ? "bg-blue-900/20 border-l-4 border-blue-400"
                      : "bg-blue-50 border-l-4 border-blue-400"
                  }`}>
                    <p className="text-sm">
                      <span className="font-medium">임팩트:</span> {project.impact}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* 하단 네비게이션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/experience')}
            className={`px-8 py-3 rounded-lg transition-colors ${
              theme === "dark"
                ? "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                : "bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-900"
            }`}
          >
            다른 경험 보기
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}