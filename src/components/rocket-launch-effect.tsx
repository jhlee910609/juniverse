"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RocketLaunchEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function RocketLaunchEffect({ children, className }: RocketLaunchEffectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative inline-block cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* Rocket container */}
      <div className="absolute -top-2 -right-2 pointer-events-none">
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={isHovered ? {
            y: -100,
            opacity: 0,
            rotate: -15,
            scale: [1, 1.2, 0.8]
          } : {
            y: 0,
            opacity: 0.7,
            rotate: 0,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            opacity: { delay: isHovered ? 0.3 : 0 }
          }}
          className="text-2xl"
        >
          🚀
        </motion.div>

        {/* Launch trail effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-t from-orange-400 via-red-400 to-transparent"
            style={{ height: "40px" }}
          />
        )}

        {/* Sparkle effects */}
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute -top-8 -left-4 text-yellow-400"
            >
              ✨
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -top-12 right-2 text-yellow-400"
            >
              ✨
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 right-6 text-yellow-400"
            >
              ✨
            </motion.div>
          </>
        )}
      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-lg blur-xl -z-10"
      />
    </div>
  );
}