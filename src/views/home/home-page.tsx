"use client";

import { memo } from "react";
import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";

export const HomePage = memo(function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
});
