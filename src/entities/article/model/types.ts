export interface Article {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  publishedAt: string;
  readTime: number; // in minutes
  tags: string[];
  category: string;
  featured?: boolean;
}
