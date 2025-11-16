"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import StaticCard from "@/components/tester/StaticCard";
import TagsContainer from "@/components/tester/TagsContainer";
import type { Post } from "@/types/file";
import formatDate from "@/utils/formatDate";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { resolvedTheme } = useTheme();
  const { content } = post;
  const { title, tags, uploadedAt } = post.meta;

  const formattedDate = formatDate(uploadedAt);

  // 테마에 따른 highlight.js CSS 동적 로드 (코드 블록만)
  useEffect(() => {
    const loadHighlightCSS = () => {
      // 기존 highlight.js CSS 링크 제거
      const existingLinks = document.querySelectorAll(
        'link[href*="highlight.js"]',
      );
      existingLinks.forEach((link) => link.remove());

      // 새로운 CSS 링크 생성
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        resolvedTheme === "dark"
          ? "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github-dark.min.css"
          : "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/github.min.css";

      document.head.appendChild(link);
    };

    if (resolvedTheme) {
      loadHighlightCSS();
    }
  }, [resolvedTheme]);

  return (
    <article className="animate-fade-in-up">
      <StaticCard>
        <header className="mb-12">
          <h1 className="border-border border-b pb-4 text-3xl leading-tight font-bold sm:text-4xl">
            {title}
          </h1>
        </header>
        <div
          className="text-foreground prose prose-p:whitespace-pre-wrap prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:px-4 code-style max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </StaticCard>

      <StaticCard className="mt-6 p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="text-muted flex items-center gap-2">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Published on</span>
            <time
              className="text-primary text-sm font-semibold"
              dateTime={formattedDate}
            >
              {formattedDate}
            </time>
          </div>
          <TagsContainer tags={tags} />
        </div>
      </StaticCard>
    </article>
  );
}
