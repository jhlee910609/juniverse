"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { ArticleMetadata } from "@/shared/types/article";
import { useTheme } from "@/shared/hooks";

interface ArticleCardProps {
  article: ArticleMetadata;
  onClick: (slug: string) => void;
}

export const ArticleCard = memo(function ArticleCard({
  article,
  onClick,
}: ArticleCardProps) {
  const { theme } = useTheme();

  return (
    <motion.article
      whileHover={{ y: -5 }}
      onClick={() => onClick(article.slug)}
      className={`rounded-lg p-6 cursor-pointer transition-all duration-300 ${
        theme === "dark"
          ? "bg-white/5 border border-white/10 hover:bg-white/10"
          : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-400 text-sm font-semibold">
            {article.category}
          </span>
          <div className={`flex items-center text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>
        </div>

        <h3 className={`text-xl font-semibold mb-2 line-clamp-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {article.title}
        </h3>

        <p className={`mb-4 line-clamp-3 flex-grow ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className={`flex items-center text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            <Clock className="w-4 h-4 mr-1" />
            {article.readingTime}분 읽기
          </div>

          {article.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className={`w-4 h-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`} />
              <div className="flex gap-2">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {article.tags.length > 2 && (
                  <span className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    +{article.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
});