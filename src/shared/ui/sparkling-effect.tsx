"use client";

import { memo, useEffect, useState } from "react";

interface SparkleProps {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
}

const Sparkle = memo(function Sparkle({ size, left, top, delay }: SparkleProps) {
  return (
    <div
      className="absolute pointer-events-none animate-sparkle"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    >
      <div className="w-full h-full bg-white rounded-full opacity-70 animate-pulse" />
    </div>
  );
});

export const SparklingEffect = memo(function SparklingEffect() {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: SparkleProps[] = [];

      for (let i = 0; i < 80; i++) {
        newSparkles.push({
          id: i,
          size: Math.random() * 3 + 1,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
        });
      }

      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
    </div>
  );
});