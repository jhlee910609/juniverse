import { Project } from "./types";

export const openSourceProjects: Project[] = [
  {
    id: "os-0",
    title: "코드스쿼드 취업 멘토링",
    description: " ",
    image: "/api/placeholder/600/400",
    tags: ["멘토링", "취업"],
    liveUrl: "",
    githubUrl: [
      {
        label: "기사",
        url: "https://www.codestates.com/blog/content/newsroom-220824",
      },
      {
        label: "멘토링 활동",
        url: "https://jhlee910609.github.io/til_everything/mentoring",
      },
    ],
  },
  {
    id: "os-1",
    title: "react-analytics-provider",
    description:
      "React wrapper component for product analytics tracking. Received encouragement award from National IT Industry Promotion Agency and collaborated with 10+ developers.",
    image: "/api/placeholder/600/400",
    tags: ["React", "TypeScript", "Analytics", "NPM", "Open Source"],
    liveUrl:
      "https://www.npmjs.com/package/@every-analytics/react-analytics-provider",
    githubUrl: [
      {
        label: "GitHub Repository",
        url: "https://github.com/EveryAnalytics/react-analytics-provider",
      },
    ],
  },
  {
    id: "os-2",
    title: "Web Analytics Handbook",
    description:
      "Comprehensive handbook for web analytics implementation and best practices. Part of the react-analytics-provider ecosystem.",
    image: "/api/placeholder/600/400",
    tags: ["Documentation", "Analytics", "Web Development", "Guide"],
    liveUrl: "https://everyanalytics.github.io/web-analytics-handbook/",
    githubUrl: [
      {
        label: "GitHub Repository",
        url: "https://github.com/EveryAnalytics/web-analytics-handbook",
      },
    ],
  },
  {
    id: "os-3",
    title: "MDN Documentation Translations",
    description:
      "Contributing to MDN Web Docs by correcting Korean translations for technical documentation including Hoisting, WeakMap, and CORS.",
    image: "/api/placeholder/600/400",
    tags: ["Translation", "Documentation", "JavaScript", "MDN", "Open Source"],
    liveUrl: "https://github.com/mdn/translated-content",
    githubUrl: [
      {
        label: "Hoisting 관련 문서 오역 수정",
        url: "https://github.com/mdn/translated-content/issues/2335",
      },
      {
        label: "WeakMap 관련 문서 오역 수정",
        url: "https://github.com/mdn/translated-content/issues/2296",
      },
      {
        label: "CORS 관련 문서 오역 수정",
        url: "https://github.com/mdn/translated-content/issues/2315",
      },
    ],
  },
  {
    id: "os-4",
    title: "jspreadsheet CE",
    description:
      "Contributed to JavaScript data grid open source library by removing duplicate code and improving code quality.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "Data Grid", "Open Source", "Code Optimization"],
    liveUrl: "https://jspreadsheet.com/",
    githubUrl: [
      {
        label: "중복코드 제거",
        url: "https://github.com/jspreadsheet/ce/pull/1305",
      },
    ],
  },
];
