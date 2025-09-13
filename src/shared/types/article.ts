export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  slug: string;
}

export interface ArticleMetadata {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  slug: string;
}

export interface ArticleSearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  page?: number;
  limit?: number;
}