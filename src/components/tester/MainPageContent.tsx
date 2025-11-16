// 디자인 참고용

"use client";

import Link from "next/link";

const featuredPosts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "This is a test excerpt",
    date: "2025-01-01",
    tags: ["test", "example"],
  },
];
const allPosts = [
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "This is a test excerpt",
    date: "2025-01-01",
    tags: ["test", "example"],
  },
  {
    slug: "hello-world-2",
    title: "Hello World 2",
    excerpt: "This is a test excerpt 2",
    date: "2025-01-02",
    tags: ["test", "example"],
  },
];
const selectedTag = undefined;

const onTagSelect = (tag: string | undefined) => {
  console.log(tag);
};

export default function MainPageContent() {
  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags)),
  ).sort();

  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
              Featured Posts
            </h2>
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--primary)]"
                >
                  <Link href={`/${post.slug}`}>
                    <h3 className="mb-2 text-xl font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mb-3 line-clamp-2 text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <time className="text-[var(--text-muted)]">
                      {post.date}
                    </time>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-[var(--tag-background)] px-2 py-1 text-xs text-[var(--tag-foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
            All Posts
          </h2>

          {/* Tag Filter */}
          <div className="mb-6 border-b border-[var(--border)] pb-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onTagSelect(undefined)}
                className={`rounded px-3 py-1.5 text-sm transition-colors ${
                  !selectedTag
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--tag-background)] text-[var(--tag-foreground)] hover:bg-[var(--tag-hover)]"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagSelect(tag)}
                  className={`rounded px-3 py-1.5 text-sm transition-colors ${
                    selectedTag === tag
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--tag-background)] text-[var(--tag-foreground)] hover:bg-[var(--tag-hover)]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-[var(--border-light)] pb-6 last:border-b-0"
              >
                <Link href={`/${post.slug}`}>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]">
                    {post.title}
                  </h3>
                </Link>
                <p className="mb-3 line-clamp-2 text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                  <time>{post.date}</time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[var(--primary)]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="py-8 text-center text-[var(--text-muted)]">
              No posts found with this tag.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
