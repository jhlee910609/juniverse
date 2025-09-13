"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "@/shared/hooks";

interface ArticleSearchProps {
  searchQuery: string;
  selectedCategory: string;
  selectedTags: string[];
  categories: string[];
  allTags: string[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export const ArticleSearch = memo(function ArticleSearch({
  searchQuery,
  selectedCategory,
  selectedTags,
  categories,
  allTags,
  onSearchChange,
  onCategoryChange,
  onTagToggle,
  onClearFilters,
}: ArticleSearchProps) {
  const { theme } = useTheme();
  const hasActiveFilters = selectedCategory || selectedTags.length > 0;

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-400 transition-colors ${
            theme === "dark"
              ? "bg-white/5 border border-white/10 text-white placeholder-gray-400"
              : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => onCategoryChange("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory
                ? "bg-blue-500 text-white"
                : theme === "dark"
                ? "bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                : "bg-gray-100 border border-gray-300 text-gray-700 hover:text-gray-900"
            }`}
          >
            전체
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : theme === "dark"
                  ? "bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                  : "bg-gray-100 border border-gray-300 text-gray-700 hover:text-gray-900"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tags */}
      {allTags.length > 0 && (
        <div>
          <h4
            className={`text-sm font-medium mb-3 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            태그
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                onClick={() => onTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-purple-500 text-white"
                    : theme === "dark"
                    ? "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                    : "bg-gray-100 border border-gray-300 text-gray-600 hover:text-gray-900"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onClearFilters}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
        >
          <X className="w-4 h-4" />
          필터 초기화
        </motion.button>
      )}
    </div>
  );
});
