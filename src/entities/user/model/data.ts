import { Experience, UserProfile } from "./types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Lotte Shopping",
    location: "Seoul, South Korea",
    period: "2024.05 - Present",
    description: "E-commerce platform development and maintenance. Reduced bundle size by 50% through optimization techniques and improved overall performance. Developing scalable solutions for millions of users.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Webpack", "Performance Optimization"],
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Miridih",
    location: "Seoul, South Korea",
    period: "2022.03 - 2024.04",
    description: "Canvas editor development for online design platform. Built complex UI components and maintained high-performance graphics rendering systems. Enhanced user experience for creative professionals.",
    skills: ["React", "TypeScript", "Canvas API", "WebGL", "JavaScript", "UI/UX Development"],
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "WeStudy",
    location: "Seoul, South Korea",
    period: "2019.12 - 2022.02",
    description: "CRM system development and maintenance. Full-stack development including backend API design and database management. Implemented efficient data processing and user management systems.",
    skills: ["React", "Node.js", "JavaScript", "MySQL", "REST APIs", "Full-stack Development"],
  },
];

export const userProfile: UserProfile = {
  name: "JunHee Lee",
  title: "Software Engineer",
  description: "E-commerce, 디자인 플랫폼, CRM 시스템 개발 경험을 보유한 소프트웨어 엔지니어입니다. React, TypeScript, Node.js를 활용한 풀스택 개발과 성능 최적화에 전문성을 가지고 있습니다. 번들 사이즈 50% 감소 등 실질적인 성과를 통해 사용자 경험을 개선합니다.",
  skills: ["React", "Next.js", "TypeScript", "Node.js", "JavaScript", "Webpack", "MySQL", "Performance Optimization", "Canvas API", "Full-stack Development"],
  experiences,
};