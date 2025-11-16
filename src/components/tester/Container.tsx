import PostList from "@/components/tester/PostList";
import { getAllPosts } from "@/utils/github";

export default async function Container() {
  const posts = await getAllPosts();

  return (
    <main className="bg-background min-h-screen flex-1">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
