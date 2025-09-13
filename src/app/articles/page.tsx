"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArticleCard } from "@/features/articles/ui/article-card";
import { ArticleSearch } from "@/features/articles/ui/article-search";
import { ArticleMetadata } from "@/shared/types/article";
import { useTheme } from "@/shared/hooks";

// Mock data - 실제로는 API나 파일에서 가져올 예정
const mockArticles: ArticleMetadata[] = [
  {
    id: "1",
    title: "React 18의 새로운 기능들",
    description:
      "React 18에서 새롭게 추가된 Concurrent Features와 Suspense의 개선사항에 대해 알아봅시다.",
    tags: ["React", "JavaScript", "Frontend"],
    category: "Frontend",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readingTime: 8,
    slug: "react-18-new-features",
  },
  {
    id: "2",
    title: "TypeScript 고급 타입 활용법",
    description:
      "TypeScript의 고급 타입 시스템을 활용하여 더 안전하고 표현력 있는 코드를 작성하는 방법을 소개합니다.",
    tags: ["TypeScript", "JavaScript", "Type Safety"],
    category: "Backend",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-12",
    readingTime: 12,
    slug: "typescript-advanced-types",
  },
  {
    id: "3",
    title: "Next.js 앱 라우터로 마이그레이션하기",
    description:
      "Next.js 13의 앱 라우터로 기존 페이지 라우터 기반 프로젝트를 마이그레이션하는 실무 가이드입니다.",
    tags: ["Next.js", "React", "Migration"],
    category: "Frontend",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-08",
    readingTime: 15,
    slug: "nextjs-app-router-migration",
  },
];

export default function ArticlesPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = useMemo(() => {
    return Array.from(new Set(mockArticles.map((article) => article.category)));
  }, []);

  const allTags = useMemo(() => {
    return Array.from(new Set(mockArticles.flatMap((article) => article.tags)));
  }, []);

  const filteredArticles = useMemo(() => {
    return mockArticles.filter((article) => {
      const matchesSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || article.category === selectedCategory;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => article.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleArticleClick = (slug: string) => {
    router.push(`/articles/${slug}`);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedTags([]);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Articles</span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            개발 경험과 학습한 내용을 공유합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <ArticleSearch
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            categories={categories}
            allTags={allTags}
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onTagToggle={handleTagToggle}
            onClearFilters={handleClearFilters}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ArticleCard article={article} onClick={handleArticleClick} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-2">
                검색 결과가 없습니다
              </h3>
              <p
                className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
              >
                다른 키워드로 검색하거나 필터를 조정해보세요.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
