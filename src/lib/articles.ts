import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article, ArticleMetadata } from "@/shared/types/article";

const articlesDirectory = path.join(process.cwd(), "public/articles");

export function getArticleFiles(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md"));
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fileName = `${slug}.md`;
    const fullPath = path.join(articlesDirectory, fileName);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // 필수 필드 검증
    if (!data.title || !data.description) {
      throw new Error(`Invalid frontmatter in ${fileName}`);
    }

    return {
      id: data.id || slug,
      title: data.title,
      description: data.description,
      content,
      tags: data.tags || [],
      category: data.category || "Uncategorized",
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt || data.publishedAt || new Date().toISOString(),
      readingTime: data.readingTime || calculateReadingTime(content),
      slug,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleMetadata[] {
  const files = getArticleFiles();

  const articles = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const article = getArticleBySlug(slug);

      if (!article) return null;

      // content 제외한 메타데이터만 반환
      const { content, ...metadata } = article;
      return metadata;
    })
    .filter(Boolean) as ArticleMetadata[];

  // 날짜순으로 정렬 (최신순)
  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticlesByCategory(category: string): ArticleMetadata[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): ArticleMetadata[] {
  return getAllArticles().filter((article) => article.tags.includes(tag));
}

export function searchArticles(query: string): ArticleMetadata[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.description.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const categories = articles.map((article) => article.category);
  return Array.from(new Set(categories));
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = articles.flatMap((article) => article.tags);
  return Array.from(new Set(tags));
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // 평균 읽기 속도
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
