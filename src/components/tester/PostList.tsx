import Link from "next/link";

import HoverCard from "@/components/tester/HoverCard";
import TagsContainer from "@/components/tester/TagsContainer";
import type { Post } from "@/types/file";
import formatDate from "@/utils/formatDate";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-6">
      <div className="mb-8 text-center">
        <h2 className="text-primary mb-2 text-3xl font-bold">Latest Posts</h2>
        <p className="text-muted">최신 블로그 포스트들을 확인해보세요</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {posts.map((post, index) => (
          <HoverCard key={post.slug} animationDelay={`${index * 0.1}s`}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <Link
                  href={`/${post.slug}`}
                  className="hover:text-primary group flex-1 text-lg font-bold transition-colors duration-200 sm:text-xl"
                >
                  <span className="decoration-primary decoration-2 underline-offset-4 group-hover:underline">
                    {post.meta.title}
                  </span>
                </Link>
                <time
                  className="text-muted hidden items-center gap-1 self-start text-sm whitespace-nowrap sm:flex sm:self-auto"
                  dateTime={formatDate(post.meta.uploadedAt)}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {formatDate(post.meta.uploadedAt)}
                </time>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <TagsContainer tags={post.meta.tags} />

                <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-0">
                  <time
                    className="text-muted flex items-center gap-1 text-sm whitespace-nowrap sm:hidden"
                    dateTime={formatDate(post.meta.uploadedAt)}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {formatDate(post.meta.uploadedAt)}
                  </time>

                  <Link
                    href={`/${post.slug}`}
                    className="text-primary hover:text-primary-hover group flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                  >
                    Read more
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
