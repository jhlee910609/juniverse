import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Lotte ON 상품 전시 프로젝트",
    description:
      "Lotte e-Commerce에서 개발한 대규모 이커머스 플랫폼의 상품 전시 및 관리 시스템. 수백만 사용자를 대상으로 하는 안정적이고 확장 가능한 솔루션 구축. 사용자 경험 최적화에 중점을 둔 프론트엔드 개발.",
    image: "/api/placeholder/600/400",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Performance Optimization",
      "E-commerce",
    ],
    liveUrl: "https://www.lotteon.com/p/display/main/lotteon?mall_no=1",
    githubUrl: [],
  },
  {
    id: "2",
    title: "Miri Canvas 디자인 플랫폼",
    description:
      "Miridih에서 개발한 온라인 디자인 플랫폼. 복잡한 Canvas API와 WebGL을 활용한 그래픽 렌더링 시스템 구축. 사용자가 직관적으로 디자인을 제작할 수 있는 캔버스 에디터 기능 개발. 창작자들을 위한 고성능 디자인 툴 제공.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Canvas API", "WebGL", "UI/UX Development", "Graphics Rendering"],
    liveUrl: "https://www.miricanvas.com",
    githubUrl: [],
  },
  {
    id: "3",
    title: "Tims 학사관리솔루션",
    description:
      "WeStudy에서 개발한 교육 플랫폼의 학사 관리 시스템. 학생과 선생님을 위한 효율적인 학사 관리 도구 개발. React를 기반으로 한 모던한 사용자 인터페이스 구축. 교육 산업의 디지털 트랜스포메이션에 기여.",
    image: "/api/placeholder/600/400",
    tags: ["React", "JavaScript", "HTML/CSS", "Frontend Development", "Education Platform"],
    liveUrl: "",
    githubUrl: [],
  },
];
