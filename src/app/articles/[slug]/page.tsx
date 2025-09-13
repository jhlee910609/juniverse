"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MarkdownRenderer } from "@/features/articles/ui/markdown-renderer";
import { useTheme } from "@/shared/hooks";
import type { Article } from "@/shared/types/article";

// Mock data - 실제로는 API나 파일에서 가져올 예정
const mockArticleData: Record<string, Article> = {
  "react-18-new-features": {
    id: "1",
    title: "React 18의 새로운 기능들",
    description:
      "React 18에서 새롭게 추가된 Concurrent Features와 Suspense의 개선사항에 대해 알아봅시다.",
    content: `# React 18의 새로운 기능들

React 18은 많은 새로운 기능과 개선사항을 포함하고 있습니다. 이 글에서는 주요 변경사항들을 살펴보겠습니다.

## Concurrent Features

React 18의 가장 큰 변화는 **Concurrent Features**의 도입입니다.

### Automatic Batching

React 18부터는 모든 업데이트가 자동으로 배치됩니다:

\`\`\`javascript
// React 18에서는 자동으로 배치됩니다
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React는 이 두 상태 업데이트를 배치하여 한 번만 리렌더링합니다
}
\`\`\`

### Suspense 개선사항

Suspense가 더욱 강력해졌습니다:

- Server-side rendering 지원
- 중첩된 Suspense 경계
- 더 나은 에러 처리

> **참고**: 이러한 기능들은 점진적으로 도입할 수 있습니다.

## 새로운 Hooks

### useId

고유한 ID를 생성하는 훅:

\`\`\`javascript
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
}
\`\`\`

### useDeferredValue

값의 업데이트를 지연시킬 수 있습니다:

\`\`\`javascript
function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <SearchResults query={deferredQuery} />
    </div>
  );
}
\`\`\`

## 마이그레이션 가이드

React 18로 업그레이드하는 방법:

1. **패키지 업데이트**
2. **createRoot 사용**
3. **StrictMode 활용**

더 자세한 내용은 [공식 문서](https://react.dev)를 참고하세요.`,
    tags: ["React", "JavaScript", "Frontend"],
    category: "Frontend",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readingTime: 8,
    slug: "react-18-new-features",
  },
  "typescript-advanced-types": {
    id: "2",
    title: "TypeScript 고급 타입 활용법",
    description:
      "TypeScript의 고급 타입 시스템을 활용하여 더 안전하고 표현력 있는 코드를 작성하는 방법을 소개합니다.",
    content: `# TypeScript 고급 타입 활용법

TypeScript의 타입 시스템은 매우 강력합니다. 이 글에서는 고급 타입 기능들을 살펴보겠습니다.

## 유틸리티 타입

### Partial<T>

모든 속성을 선택적으로 만듭니다:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }
\`\`\`

### Pick<T, K>

특정 속성만 선택합니다:

\`\`\`typescript
type UserBasic = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }
\`\`\`

## 조건부 타입

조건에 따라 타입을 결정할 수 있습니다:

\`\`\`typescript
type ApiResponse<T> = T extends string
  ? { message: T }
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
\`\`\`

## 템플릿 리터럴 타입

문자열 템플릿을 타입으로 사용할 수 있습니다:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type MouseEvent = EventName<'click'>; // 'onClick'
type KeyEvent = EventName<'keyPress'>; // 'onKeyPress'
\`\`\`

이러한 고급 타입들을 잘 활용하면 더 안전하고 표현력 있는 코드를 작성할 수 있습니다.`,
    tags: ["TypeScript", "JavaScript", "Type Safety"],
    category: "Backend",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-12",
    readingTime: 12,
    slug: "typescript-advanced-types",
  },
  "nextjs-app-router-migration": {
    id: "3",
    title: "Next.js 앱 라우터로 마이그레이션하기",
    description:
      "Next.js 13의 앱 라우터로 기존 페이지 라우터 기반 프로젝트를 마이그레이션하는 실무 가이드입니다.",
    content: `# Next.js 앱 라우터로 마이그레이션하기

Next.js 13에서 도입된 앱 라우터는 많은 새로운 기능을 제공합니다. 이 글에서는 기존 프로젝트를 마이그레이션하는 방법을 다룹니다.

## 앱 라우터의 장점

- **향상된 라우팅**: 폴더 기반 라우팅
- **레이아웃 시스템**: 중첩된 레이아웃 지원
- **서버 컴포넌트**: 기본적으로 서버에서 렌더링
- **스트리밍**: 점진적 페이지 로딩

## 마이그레이션 단계

### 1. 프로젝트 구조 변경

기존 \`pages\` 디렉토리를 \`app\` 디렉토리로 이동:

\`\`\`
// 기존 구조
pages/
  index.js
  about.js
  blog/
    [slug].js

// 새로운 구조
app/
  page.js
  about/
    page.js
  blog/
    [slug]/
      page.js
\`\`\`

### 2. 레이아웃 파일 생성

루트 레이아웃 파일 생성:

\`\`\`javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### 3. 페이지 컴포넌트 변경

기존 페이지를 새로운 형식으로 변경:

\`\`\`javascript
// app/page.js
export default function HomePage() {
  return <h1>홈페이지</h1>;
}

export const metadata = {
  title: '홈페이지',
  description: '웹사이트의 홈페이지입니다.',
};
\`\`\`

### 4. 데이터 페칭 업데이트

서버 컴포넌트에서 직접 데이터를 가져올 수 있습니다:

\`\`\`javascript
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function PostPage() {
  const data = await getData();

  return <div>{/* 컴포넌트 렌더링 */}</div>;
}
\`\`\`

## 주의사항

- **클라이언트 컴포넌트**: 상호작용이 필요한 경우 \`'use client'\` 지시어 사용
- **라우팅 변경**: \`useRouter\` 훅의 일부 API가 변경됨
- **미들웨어**: 미들웨어 파일 위치와 설정 확인

## 결론

앱 라우터는 Next.js의 미래입니다. 점진적으로 마이그레이션하여 새로운 기능들을 활용해보세요.`,
    tags: ["Next.js", "React", "Migration"],
    category: "Frontend",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-08",
    readingTime: 15,
    slug: "nextjs-app-router-migration",
  },
};

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제로는 API에서 데이터를 가져올 예정
    const loadArticle = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 시뮬레이션
      const articleData = mockArticleData[params.slug];
      setArticle(articleData || null);
      setIsLoading(false);
    };

    loadArticle();
  }, [params.slug]);

  const handleShare = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // 폴백: 클립보드에 복사
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 클립보드에 복사되었습니다!");
    }
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            게시글을 불러오는 중...
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-2">게시글을 찾을 수 없습니다</h1>
          <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            요청하신 게시글이 존재하지 않습니다.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/articles")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            게시글 목록으로 돌아가기
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className={`flex items-center mb-6 transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            뒤로 가기
          </button>

          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
            <p className={`text-xl mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              {article.description}
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-6">
              <div
                className={`flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.publishedAt).toLocaleDateString("ko-KR")}
              </div>
              <div
                className={`flex items-center ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                {article.readingTime}분 읽기
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Tag
                  className={`w-4 h-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                />
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleShare}
                className={`flex items-center gap-2 transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Share2 className="w-4 h-4" />
                공유
              </button>
            </div>
          </div>
        </motion.div>

        {/* 콘텐츠 */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <MarkdownRenderer content={article.content} />
        </motion.article>

        {/* 하단 네비게이션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/articles")}
            className={`px-8 py-3 rounded-lg transition-colors ${
              theme === "dark"
                ? "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                : "bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-900"
            }`}
          >
            다른 글 보기
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
