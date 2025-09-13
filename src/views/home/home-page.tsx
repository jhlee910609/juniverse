"use client";

import { memo } from "react";
import { HeroSection } from "@/features/hero";
import { ExperienceSection } from "@/features/experience";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import { AboutSection } from "@/features/about";

export const HomePage = memo(function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </>
  );
});
