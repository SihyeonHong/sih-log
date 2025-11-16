import Container from "@/components/tester/Container";
import Footer from "@/components/tester/Footer";
import Header from "@/components/tester/Header";
import Post from "@/components/tester/Post";
import { getAllPosts, getMarkdownContent } from "@/utils/github";

export default async function Page() {
  // 루트 페이지와 /slug 페이지의 기존 디자인을 보여주기 위해
  // 첫 번째 포스트를 가져와서 Post 컴포넌트에 표시
  const posts = await getAllPosts();
  const firstPost =
    posts.length > 0 ? await getMarkdownContent(`${posts[0].slug}.md`) : null;

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* 루트 페이지 디자인 */}
      <div className="mb-12">
        <Header />
        <Container />
        <Footer />
      </div>

      {/* /slug 페이지 디자인 */}
      {firstPost && (
        <div className="bg-background min-h-screen">
          <Header />
          <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <Post post={firstPost}></Post>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
