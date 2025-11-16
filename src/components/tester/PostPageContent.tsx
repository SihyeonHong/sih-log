// 디자인 참고용

"use client";

import TagsContainer from "@/components/tester/TagsContainer";

const title = "Hello World";
const content = "This is a test content";
const formattedDate = "2025-01-01";
const tags = ["test", "example"];

export default function PostPageContent() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <article className="mx-auto max-w-3xl bg-[var(--surface)] px-4 py-12">
        {/* Title */}
        <h1 className="mb-4 text-4xl leading-tight font-bold text-[var(--text-primary)]">
          {title}
        </h1>

        {/* Metadata */}
        <div className="mb-8 flex items-center gap-4 border-b border-[var(--border)] pb-6">
          <time className="text-sm text-[var(--text-muted)]">
            Published on {formattedDate}
          </time>
        </div>

        {/* Content */}
        <div
          className="prose prose-p:whitespace-pre-wrap prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:py-2 prose-blockquote:px-4 prose-code:before:content-none prose-code:after:content-none prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:text-[var(--primary-hover)] hover:prose-a:underline prose-code:bg-[var(--surface)] prose-code:text-[var(--primary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--surface)] prose-pre:border prose-pre:border-[var(--border)] prose-blockquote:border-[var(--primary)] prose-blockquote:bg-[var(--surface)] prose-blockquote:text-[var(--text-secondary)] prose-hr:border-[var(--border)] prose-img:rounded-lg prose-img:border prose-img:border-[var(--border)] max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Tags */}
        <div className="mt-12 border-t border-[var(--border)] pt-8">
          <TagsContainer tags={tags} />
        </div>
      </article>
    </div>
  );
}
