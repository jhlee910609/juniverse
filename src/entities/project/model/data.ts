import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure payment processing.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Firebase", "Framer Motion", "DnD Kit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that provides detailed weather information with interactive charts and location-based forecasts.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];