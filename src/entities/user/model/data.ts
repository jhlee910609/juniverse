import { Experience, UserProfile } from "./types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "Seoul, South Korea",
    period: "2022 - Present",
    description: "Leading frontend development team, architecting scalable React applications with Next.js and TypeScript. Improved performance by 40% and user engagement by 25%.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Seoul, South Korea",
    period: "2020 - 2022",
    description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX/UI designers to create pixel-perfect user interfaces.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS", "REST APIs"],
  },
  {
    id: "3",
    title: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Seoul, South Korea",
    period: "2019 - 2020",
    description: "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
];

export const userProfile: UserProfile = {
  name: "JunHee Lee",
  title: "Frontend Developer",
  description: "React, Next.js, TypeScript를 전문으로 하는 열정적인 프론트엔드 개발자입니다. 현대적인 웹 기술로 매력적인 사용자 경험을 만들어냅니다.",
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  experiences,
};