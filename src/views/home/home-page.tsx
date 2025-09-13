"use client";

import { memo } from "react";
import { AboutSection } from "@/features/about";
import { HeroSection } from "@/features/hero";

export const HomePage = memo(function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
});
