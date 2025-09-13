#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '..', 'public', 'articles');

function createArticle(options) {
  const {
    title,
    description,
    category = 'Frontend',
    tags = [],
    slug,
    readingTime = 5
  } = options;

  if (!title || !description || !slug) {
    console.error('Error: title, description, and slug are required');
    process.exit(1);
  }

  const publishedAt = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: "${title}"
description: "${description}"
category: "${category}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
publishedAt: "${publishedAt}"
updatedAt: "${publishedAt}"
readingTime: ${readingTime}
---

# ${title}

${description}

## 개요

여기에 글의 개요를 작성하세요.

## 주요 내용

### 섹션 1

내용을 작성하세요.

\`\`\`javascript
// 코드 예제
console.log('Hello, World!');
\`\`\`

### 섹션 2

더 많은 내용을 작성하세요.

> **참고**: 중요한 정보는 인용구로 표시하세요.

## 결론

글의 결론을 작성하세요.
`;

  const filename = `${slug}.md`;
  const filepath = path.join(articlesDir, filename);

  // articles 디렉토리가 없으면 생성
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  // 파일이 이미 존재하는지 확인
  if (fs.existsSync(filepath)) {
    console.error(`Error: Article with slug "${slug}" already exists`);
    process.exit(1);
  }

  // 파일 생성
  fs.writeFileSync(filepath, frontmatter);

  console.log(`✅ Article created successfully: ${filepath}`);
  console.log(`📝 Title: ${title}`);
  console.log(`🏷️  Tags: ${tags.join(', ')}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🔗 Slug: ${slug}`);
}

// CLI 인자 파싱
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];

    switch (arg) {
      case '--title':
      case '-t':
        options.title = nextArg;
        i++;
        break;
      case '--description':
      case '-d':
        options.description = nextArg;
        i++;
        break;
      case '--category':
      case '-c':
        options.category = nextArg;
        i++;
        break;
      case '--tags':
        options.tags = nextArg ? nextArg.split(',').map(tag => tag.trim()) : [];
        i++;
        break;
      case '--slug':
      case '-s':
        options.slug = nextArg;
        i++;
        break;
      case '--reading-time':
      case '-r':
        options.readingTime = parseInt(nextArg) || 5;
        i++;
        break;
      case '--help':
      case '-h':
        showHelp();
        process.exit(0);
        break;
    }
  }

  return options;
}

function showHelp() {
  console.log(`
📝 Article Creator

Usage: node scripts/create-article.js [options]

Options:
  -t, --title <title>           Article title (required)
  -d, --description <desc>      Article description (required)
  -s, --slug <slug>            Article slug (required)
  -c, --category <category>    Article category (default: Frontend)
  --tags <tags>                Comma-separated tags
  -r, --reading-time <time>    Reading time in minutes (default: 5)
  -h, --help                   Show this help message

Examples:
  node scripts/create-article.js \\
    --title "React Hooks Guide" \\
    --description "Complete guide to React Hooks" \\
    --slug "react-hooks-guide" \\
    --category "Frontend" \\
    --tags "React,JavaScript,Hooks" \\
    --reading-time 10

  node scripts/create-article.js \\
    -t "TypeScript Tips" \\
    -d "Useful TypeScript tips and tricks" \\
    -s "typescript-tips" \\
    --tags "TypeScript,JavaScript"
`);
}

// 대화형 모드
async function interactiveMode() {
  const readline = await import('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt) => new Promise((resolve) => {
    rl.question(prompt, resolve);
  });

  try {
    console.log('📝 Article Creator - Interactive Mode\n');

    const title = await question('Article title: ');
    const description = await question('Description: ');
    const slug = await question('Slug: ');
    const category = await question('Category (default: Frontend): ') || 'Frontend';
    const tagsInput = await question('Tags (comma-separated): ');
    const readingTimeInput = await question('Reading time in minutes (default: 5): ');

    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
    const readingTime = parseInt(readingTimeInput) || 5;

    createArticle({
      title,
      description,
      slug,
      category,
      tags,
      readingTime
    });
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

// 메인 실행
if (process.argv.length === 2) {
  // 인자가 없으면 대화형 모드
  interactiveMode();
} else {
  // 인자가 있으면 CLI 모드
  const options = parseArgs();
  createArticle(options);
}