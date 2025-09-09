"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export function TypewriterEffect({
  texts,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}