import type { Experience, UserProfile } from "./types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Front-end Developer",
    company: "Lotte e-Commerce",
    location: "Seoul, South Korea",
    period: "2022.03 - Present",
    description:
      "Lotte ON 상품 전시 프로젝트 개발. 대규모 이커머스 플랫폼의 프론트엔드 개발 및 사용자 경험 최적화를 담당. 수백만 사용자를 대상으로 하는 안정적이고 확장 가능한 솔루션 구축.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Webpack", "Performance Optimization"],
  },
  {
    id: "2",
    title: "Front-end Developer",
    company: "Miridih",
    location: "Seoul, South Korea",
    period: "2020.01 - 2022.02",
    description:
      "Miri Canvas 디자인 플랫폼 개발. 온라인 디자인 툴의 복잡한 UI 컴포넌트와 캔버스 기반 편집 기능 구현. 창작자들을 위한 직관적이고 성능 최적화된 사용자 경험 제공.",
    skills: ["React", "TypeScript", "Canvas API", "WebGL", "JavaScript", "UI/UX Development"],
  },
  {
    id: "3",
    title: "Front-end Developer",
    company: "WeStudy",
    location: "Seoul, South Korea",
    period: "2019.05 - 2019.11",
    description:
      "Tims (학사관리솔루션) 프론트엔드 개발. 교육 플랫폼의 사용자 인터페이스와 학사 관리 시스템 구축. React 기반의 모던한 웹 애플리케이션 개발.",
    skills: ["React", "JavaScript", "HTML/CSS", "Frontend Development"],
  },
];

export const userProfile: UserProfile = {
  name: "JunHee Lee",
  title: "Front-end Developer",
  description:
    "사용자와 가장 맞닿아 있는 Front-end 개발자입니다. 매일 조금씩이라도 더 성장하려고 노력하며, 사용자 경험을 최우선으로 생각하는 개발자입니다. Lotte e-Commerce, Miridih, WeStudy에서 다양한 프로젝트 경험을 쌓았으며, React와 TypeScript를 활용한 현대적인 웹 개발에 전문성을 가지고 있습니다.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Canvas API",
    "WebGL",
    "HTML/CSS",
    "Performance Optimization",
    "UI/UX Development",
    "Frontend Development",
  ],
  experiences,
};
