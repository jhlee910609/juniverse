"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const experiences = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "Seoul, South Korea",
    period: "2022 - Present",
    description:
      "Leading frontend development team, architecting scalable React applications with Next.js and TypeScript. Improved performance by 40% and user engagement by 25%.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Seoul, South Korea",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX/UI designers to create pixel-perfect user interfaces.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS", "REST APIs"],
  },
  {
    id: "junior-web-developer",
    title: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Seoul, South Korea",
    period: "2019 - 2020",
    description:
      "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
];

export function ExperienceSection() {
  const router = useRouter();

  const handleExperienceClick = (id: string) => {
    router.push(`/experience/${id}`);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-background relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            지난 5년간 놀라운 디지털 경험을 만들어왔어요
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleExperienceClick(exp.id)}
              className="bg-card border border-border rounded-lg p-6 hover:bg-muted transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
