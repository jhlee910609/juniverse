"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn, scrollToElement } from "@/shared/lib";
import { useScroll, useTheme } from "@/shared/hooks";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Project", href: "/project" },
  { name: "Article", href: "/articles" },
] as const;

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const { isScrolled, isVisible } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const elementId = href.substring(1);
      scrollToElement(elementId);
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, position: "fixed" }}
      animate={{
        opacity: 1,
        position: "fixed",
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        "top-8 sm:top-10 left-0 right-0 z-50 transition-all duration-300 w-full",
        className
      )}
    >
      {/* Glassmorphism Container */}
      <div className="w-full px-4 pt-4">
        <motion.nav
          className={cn(
            "mx-auto transition-all duration-500 ease-out",
            "backdrop-blur-xl border border-white/20 dark:border-white/10",
            "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
            "dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
            isScrolled
              ? "max-w-4xl bg-white/30 dark:bg-black/40 rounded-2xl px-6 py-2 shadow-lg"
              : "max-w-6xl bg-white/10 dark:bg-black/20 rounded-3xl px-8 py-4"
          )}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#home")}
              className="cursor-pointer"
            >
              <motion.h1
                className={cn(
                  "font-bold transition-all duration-300 relative overflow-hidden",
                  " dark:text-white",
                  isScrolled ? "text-lg" : "text-xl"
                )}
                style={{
                  textShadow:
                    theme === "dark"
                      ? "0 2px 4px rgba(255,255,255,0.1)"
                      : "0 2px 4px rgba(0,0,0,0.1)",
                  background:
                    theme === "dark"
                      ? "linear-gradient(90deg, #ffffff 0%, #a855f7 25%, #3b82f6 50%, #06b6d4 75%, #ffffff 100%)"
                      : "linear-gradient(90deg, #1f2937 0%, #7c3aed 25%, #2563eb 50%, #0891b2 75%, #1f2937 100%)",
                  backgroundSize: "200% auto",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Juniverse
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 rounded-xl font-medium transition-all duration-200",
                      "text-gray-800 dark:text-white",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                      "hover:bg-white/10 dark:hover:bg-white/10"
                    )}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className={cn(
                    "p-3 rounded-xl transition-all duration-200",
                    "text-gray-800 dark:text-white",
                    "hover:bg-white/10 dark:hover:bg-white/10",
                    "ml-2"
                  )}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-xl text-gray-800 dark:text-white hover:bg-white/10"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl text-gray-800 dark:text-white hover:bg-white/10"
                >
                  <motion.div
                    animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            )}
          </div>
        </motion.nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4">
            <motion.div
              className={cn(
                "mt-2 mx-auto max-w-6xl",
                "bg-white/10 dark:bg-black/10 backdrop-blur-xl",
                "border border-white/20 dark:border-white/10",
                "rounded-2xl p-4",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                "dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              )}
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-xl",
                      "text-gray-800 dark:text-white font-medium",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                      "transition-all duration-200"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20,
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
});
