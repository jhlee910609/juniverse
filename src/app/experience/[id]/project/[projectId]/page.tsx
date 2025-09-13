"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "@/shared/hooks";

interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  impact?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  images: string[];
  videos?: string[];
  gifs?: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration: string;
  role: string;
  teamSize: string;
}

const projectDetails: Record<string, Record<string, ProjectDetail>> = {
  "senior-frontend-developer": {
    "e-commerce-platform": {
      id: "e-commerce-platform",
      name: "E-Commerce Platform",
      description: "대규모 이커머스 플랫폼의 프론트엔드 아키텍처 설계 및 개발",
      longDescription: "월 200만명이 사용하는 대규모 이커머스 플랫폼의 전체 프론트엔드를 Next.js와 TypeScript로 재구축했습니다. 마이크로 프론트엔드 아키텍처를 도입하여 확장성과 유지보수성을 크게 개선했으며, 성능 최적화를 통해 페이지 로딩 속도를 50% 향상시켰습니다.",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Zustand"],
      impact: "월 매출 30% 증가에 기여",
      features: [
        "실시간 상품 검색 및 필터링",
        "개인화된 상품 추천 시스템",
        "원클릭 결제 시스템",
        "실시간 재고 관리",
        "다국어 지원 (한국어, 영어, 일본어)",
        "반응형 웹 디자인",
        "PWA 지원으로 오프라인 브라우징",
        "소셜 로그인 통합"
      ],
      challenges: [
        "대용량 트래픽 처리 (동시 사용자 50만명)",
        "복잡한 상품 카탈로그 구조",
        "실시간 데이터 동기화",
        "레거시 시스템과의 호환성"
      ],
      solutions: [
        "Next.js ISR과 CDN을 활용한 성능 최적화",
        "GraphQL을 통한 효율적인 데이터 페칭",
        "WebSocket을 활용한 실시간 업데이트",
        "점진적 마이그레이션 전략 수립"
      ],
      images: [
        "/images/projects/ecommerce-home.png",
        "/images/projects/ecommerce-product.png",
        "/images/projects/ecommerce-checkout.png"
      ],
      videos: ["/videos/projects/ecommerce-demo.mp4"],
      gifs: ["/gifs/projects/ecommerce-search.gif"],
      liveUrl: "https://shop.example.com",
      githubUrl: "https://github.com/example/ecommerce-frontend",
      duration: "8개월",
      role: "Frontend Lead Developer",
      teamSize: "5명 (프론트엔드 3명, 백엔드 2명)"
    },
    "admin-dashboard": {
      id: "admin-dashboard",
      name: "Admin Dashboard",
      description: "실시간 데이터 시각화와 관리 기능을 제공하는 관리자 대시보드",
      longDescription: "비즈니스 관리자들이 실시간으로 매출, 사용자 활동, 시스템 상태를 모니터링할 수 있는 대시보드를 구축했습니다. D3.js를 활용한 고급 차트와 WebSocket을 통한 실시간 업데이트로 관리 업무의 효율성을 크게 향상시켰습니다.",
      technologies: ["React", "D3.js", "WebSocket", "Material-UI"],
      impact: "관리 업무 효율성 60% 향상",
      features: [
        "실시간 매출 대시보드",
        "사용자 행동 분석 차트",
        "시스템 모니터링 알림",
        "데이터 내보내기 기능",
        "역할 기반 접근 제어",
        "커스텀 위젯 구성",
        "다크모드 지원",
        "모바일 반응형"
      ],
      challenges: [
        "대량의 실시간 데이터 처리",
        "복잡한 차트 시각화",
        "다양한 권한 관리",
        "성능 최적화"
      ],
      solutions: [
        "가상화와 메모이제이션으로 성능 개선",
        "D3.js 커스텀 컴포넌트 개발",
        "RBAC 시스템 구현",
        "WebSocket 연결 풀링"
      ],
      images: [
        "/images/projects/dashboard-overview.png",
        "/images/projects/dashboard-analytics.png",
        "/images/projects/dashboard-settings.png"
      ],
      videos: ["/videos/projects/dashboard-demo.mp4"],
      duration: "4개월",
      role: "Senior Frontend Developer",
      teamSize: "3명 (프론트엔드 2명, 백엔드 1명)"
    }
  },
  "frontend-developer": {
    "corporate-website": {
      id: "corporate-website",
      name: "Corporate Website",
      description: "기업용 멀티 페이지 웹사이트 개발",
      longDescription: "Vue.js와 Nuxt.js를 사용하여 SEO 최적화된 기업 웹사이트를 개발했습니다. Strapi CMS와 연동하여 비개발자도 쉽게 콘텐츠를 관리할 수 있도록 했으며, 웹 접근성 인증을 획득했습니다.",
      technologies: ["Vue.js", "Nuxt.js", "SCSS", "Strapi CMS"],
      impact: "브랜드 인지도 25% 상승",
      features: [
        "SEO 최적화",
        "다국어 지원",
        "CMS 기반 콘텐츠 관리",
        "웹 접근성 준수",
        "반응형 디자인",
        "Contact Form 통합",
        "소셜 미디어 연동",
        "Google Analytics 연동"
      ],
      challenges: [
        "SEO 최적화 요구사항",
        "다양한 디바이스 호환성",
        "콘텐츠 관리 시스템 연동",
        "웹 접근성 준수"
      ],
      solutions: [
        "Nuxt.js SSG로 SEO 최적화",
        "모바일 퍼스트 반응형 구현",
        "Headless CMS 아키텍처 적용",
        "KWCAG 2.1 AA 준수 구현"
      ],
      images: [
        "/images/projects/corporate-home.png",
        "/images/projects/corporate-about.png",
        "/images/projects/corporate-contact.png"
      ],
      liveUrl: "https://corporate.example.com",
      duration: "3개월",
      role: "Frontend Developer",
      teamSize: "2명 (프론트엔드 1명, 디자이너 1명)"
    }
  }
};

interface ProjectDetailPageProps {
  params: {
    id: string;
    projectId: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));

      const experienceProjects = projectDetails[params.id];
      const projectData = experienceProjects?.[params.projectId];
      setProject(projectData || null);
      setIsLoading(false);
    };

    loadProject();
  }, [params.id, params.projectId]);

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (!project?.images) return;

    if (direction === 'prev') {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            프로젝트 정보를 불러오는 중...
          </p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}>
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-2xl font-bold mb-2">프로젝트를 찾을 수 없습니다</h1>
          <p className={`mb-6 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            요청하신 프로젝트 정보가 존재하지 않습니다.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/experience/${params.id}`)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            경험 상세로 돌아가기
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
            onClick={() => router.push(`/experience/${params.id}`)}
            className={`flex items-center mb-6 transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            경험 상세로 돌아가기
          </button>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className={`text-xl mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              {project.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className={`p-4 rounded-lg ${
                theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"
              }`}>
                <h3 className="font-semibold mb-2">개발 기간</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                  {project.duration}
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"
              }`}>
                <h3 className="font-semibold mb-2">역할</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                  {project.role}
                </p>
              </div>
              <div className={`p-4 rounded-lg ${
                theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"
              }`}>
                <h3 className="font-semibold mb-2">팀 구성</h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                  {project.teamSize}
                </p>
              </div>
            </div>

            {/* 링크 버튼들 */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  라이브 사이트
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* 미디어 갤러리 */}
        {(project.images?.length > 0 || project.videos?.length > 0 || project.gifs?.length > 0) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">프로젝트 미리보기</h3>

            {/* 이미지 갤러리 */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} 스크린샷 ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleImageNavigation('prev')}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => handleImageNavigation('next')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>

                {project.images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 비디오 */}
            {project.videos && project.videos.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">데모 비디오</h4>
                <div className="relative rounded-lg overflow-hidden">
                  <video
                    className="w-full h-96 object-cover"
                    controls={isVideoPlaying}
                    muted={isVideoMuted}
                    poster="/images/video-placeholder.jpg"
                  >
                    <source src={project.videos[0]} type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* GIF */}
            {project.gifs && project.gifs.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">인터랙션 미리보기</h4>
                {project.gifs.map((gif, index) => (
                  <img
                    key={index}
                    src={gif}
                    alt={`${project.name} 데모 ${index + 1}`}
                    className="w-full rounded-lg mb-4"
                  />
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* 기술 스택 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">기술 스택</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 주요 기능 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800/30 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <p className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✨</span>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 도전 과제와 해결책 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">도전 과제</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-red-900/20 border border-red-700/50"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">⚠️</span>
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">해결책</h3>
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-green-900/20 border border-green-700/50"
                      : "bg-green-50 border border-green-200"
                  }`}
                >
                  <p className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✅</span>
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* 임팩트 */}
        {project.impact && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className={`p-6 rounded-lg text-center ${
              theme === "dark"
                ? "bg-blue-900/20 border border-blue-700/50"
                : "bg-blue-50 border border-blue-200"
            }`}>
              <h3 className="text-2xl font-bold mb-4">프로젝트 임팩트</h3>
              <p className="text-xl font-semibold text-blue-400">
                {project.impact}
              </p>
            </div>
          </motion.section>
        )}

        {/* 하단 네비게이션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push(`/experience/${params.id}`)}
            className={`px-8 py-3 rounded-lg transition-colors ${
              theme === "dark"
                ? "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                : "bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-900"
            }`}
          >
            다른 프로젝트 보기
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}