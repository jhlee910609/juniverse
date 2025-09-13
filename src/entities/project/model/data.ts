import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Lotte Shopping E-commerce Platform",
    description: "대규모 이커머스 플랫폼 개발 및 유지보수. 번들 사이즈 50% 감소를 통한 성능 최적화 달성. 웹팩 설정 개선과 코드 스플리팅으로 로딩 속도 향상. 수백만 사용자를 대상으로 하는 안정적인 서비스 구축.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Next.js", "TypeScript", "Webpack", "Performance Optimization", "JavaScript"],
    liveUrl: "https://www.lotteshopping.com",
    githubUrl: "",
  },
  {
    id: "2",
    title: "Miridih Canvas Editor",
    description: "온라인 디자인 플랫폼의 캔버스 에디터 개발. 복잡한 그래픽 렌더링과 실시간 편집 기능 구현. WebGL과 Canvas API를 활용한 고성능 UI 컴포넌트 개발. 창작자들을 위한 직관적인 사용자 경험 제공.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Canvas API", "WebGL", "UI/UX Development", "Graphics Rendering"],
    liveUrl: "https://www.miricanvas.com",
    githubUrl: "",
  },
  {
    id: "3",
    title: "WeStudy CRM System",
    description: "교육 플랫폼의 CRM 시스템 풀스택 개발. 사용자 관리, 데이터 처리, API 설계를 포함한 종합적인 백엔드 시스템 구축. MySQL 데이터베이스 설계 및 최적화. 효율적인 고객 관계 관리 도구 개발.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Node.js", "JavaScript", "MySQL", "REST APIs", "Full-stack Development"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "4",
    title: "Portfolio Site with FSD Architecture",
    description: "Feature-Sliced Design 아키텍처를 활용한 현대적인 포트폴리오 사이트. Next.js 15와 React 19의 최신 기능 적용. 글래스모피즘 디자인과 부드러운 애니메이션으로 매력적인 사용자 경험 구현.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "FSD Architecture"],
    liveUrl: "",
    githubUrl: "https://github.com",
  },
];