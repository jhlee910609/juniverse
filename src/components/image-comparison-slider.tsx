"use client";

import { MoreVertical } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt1?: string;
  alt2?: string;
  className?: string;
  height?: string;
}

export const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  alt1 = "Before image",
  alt2 = "After image",
  className = "",
  height = "h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px]",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
  };

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className={`w-full border rounded-3xl bg-muted border-border ${className}`}>
      <div
        ref={containerRef}
        className={`overflow-hidden ${height} w-full relative select-none cursor-col-resize`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After Image (Bottom Layer) */}
        {afterImage && (
          <img
            className="absolute top-0 left-0 z-[19] rounded-2xl w-full h-full object-cover object-left-top"
            alt={alt2}
            src={afterImage}
            draggable="false"
          />
        )}

        {/* Before Image (Top Layer, Clipped) */}
        <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
          <div
            className="absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none overflow-hidden"
            style={{ clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)` }}
          >
            {beforeImage && (
              <img
                alt={alt1}
                src={beforeImage}
                className="absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none object-cover object-left-top"
                draggable="false"
              />
            )}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="h-full w-px absolute top-0 z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{ left: `${sliderPosition}%`, zIndex: 40 }}
        >
          {/* Left Gradient Effect */}
          <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />

          {/* Cyan Glow Effect */}
          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />

          {/* Right Side Effect */}
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
            <div className="w-full h-full opacity-100">
              <div className="h-full w-full">
                <div
                  className="h-full w-full bg-gradient-to-r from-purple-400 via-blue-400 to-transparent opacity-30"
                  style={{
                    background: `linear-gradient(90deg, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Drag Handle */}
          <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-background z-30 -right-2.5 absolute flex items-center justify-center shadow-lg border border-border">
            <MoreVertical className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
