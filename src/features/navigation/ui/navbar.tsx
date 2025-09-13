"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn, scrollToElement } from "@/shared/lib";
import { useScroll, useTheme } from "@/shared/hooks";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
] as const;

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const isScrolled = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    const elementId = href.substring(1);
    scrollToElement(elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500",
          "mt-4 backdrop-blur-md",
          isScrolled
            ? "max-w-4xl bg-white/95 dark:bg-black/90 rounded-3xl px-8 py-4 border border-gray-300/50 dark:border-gray-600/50"
            : "max-w-7xl bg-transparent rounded-none px-4 py-4 border-0"
        )}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn(
            "text-xl font-bold transition-colors duration-300",
            isScrolled
              ? theme === "dark"
                ? "text-white"
                : "text-gray-900"
              : theme === "dark"
                ? "text-white"
                : "text-gray-900"
          )}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              whileHover={{ y: -2 }}
              className={cn(
                "hover:text-blue-400 transition-colors duration-200",
                isScrolled
                  ? theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-800"
                  : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-800"
              )}
            >
              {item.name}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled
                ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                : "hover:bg-white/10"
            )}
          >
            {theme === "dark" ? (
              <Sun className={cn(
                "w-5 h-5 transition-colors",
                isScrolled
                  ? theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
              )} />
            ) : (
              <Moon className={cn(
                "w-5 h-5 transition-colors",
                isScrolled
                  ? theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
              )} />
            )}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled
                ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                : "hover:bg-white/10"
            )}
          >
            {theme === "dark" ? (
              <Sun className={cn(
                "w-5 h-5 transition-colors",
                isScrolled
                  ? theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
              )} />
            ) : (
              <Moon className={cn(
                "w-5 h-5 transition-colors",
                isScrolled
                  ? theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
              )} />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 transition-colors",
              isScrolled
                ? theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
                : theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn(
            "md:hidden mt-4 mx-4 px-6 py-5 rounded-2xl backdrop-blur-md",
            isScrolled
              ? "bg-white/95 dark:bg-black/90 border border-gray-300/50 dark:border-gray-600/50"
              : "bg-black/90 border border-gray-600/50"
          )}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ x: 10 }}
                className={cn(
                  "text-left px-3 py-2 rounded-lg hover:text-blue-400 transition-colors duration-200",
                  isScrolled
                    ? theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                    : theme === "dark"
                      ? "text-gray-300 hover:bg-white/10"
                      : "text-gray-700 hover:bg-white/10"
                )}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
});

