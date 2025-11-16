import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

import type {
  Post,
  PostMeta,
  GitHubFile,
  GitHubApiResponse,
} from "@/types/file";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const POSTS_PATH = process.env.POSTS_PATH;

// private repo 접근을 위해 토큰 필수 체크
if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN is required for private repository access");
}

if (!REPO_OWNER || !REPO_NAME) {
  throw new Error(
    "GITHUB_OWNER and GITHUB_REPO must be set in environment variables",
  );
}

// 특정 폴더의 파일 목록 가져오기
export async function getMarkdownFiles(): Promise<GitHubFile[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${POSTS_PATH}`,
      { headers: getHeaders() },
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("GitHub token is invalid or expired");
      } else if (response.status === 404) {
        throw new Error(
          `Repository ${REPO_OWNER}/${REPO_NAME} or path ${POSTS_PATH} not found`,
        );
      } else if (response.status === 403) {
        throw new Error("Access denied. Check your token permissions");
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const files: GitHubFile[] = await response.json();
    return files.filter((file: GitHubFile) => file.name.endsWith(".md"));
  } catch (error) {
    console.error("Error fetching markdown files:", error);
    return [];
  }
}

// 특정 마크다운 파일 내용 가져오기
export async function getMarkdownContent(
  fileName: string,
): Promise<Post | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${POSTS_PATH}/${fileName}`,
      { headers: getHeaders() },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const file: GitHubApiResponse = await response.json();
    const content = Buffer.from(file.content, "base64").toString("utf-8");

    // front matter 파싱
    const { data, content: markdownContent } = matter(content);

    // 마크다운을 HTML로 변환
    const processedContent = await remark()
      .use(remarkBreaks) // 옵시디언의 여러 줄바꿈을 <br> 태그로 변환
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight, {
        detect: true, // 자동 언어 감지
        ignoreMissing: true, // 언어가 감지되지 않아도 에러 없이 처리
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(markdownContent);
    return {
      meta: data as PostMeta,
      content: processedContent.toString(),
      slug: fileName.replace(".md", ""),
    };
  } catch (error) {
    console.error(`Error fetching ${fileName}:`, error);
    return null;
  }
}

// 모든 포스트 메타데이터 가져오기
export async function getAllPosts(): Promise<Post[]> {
  const files = await getMarkdownFiles();
  const posts: Post[] = [];

  for (const file of files) {
    const postData = await getMarkdownContent(file.name);
    if (postData) {
      posts.push({
        slug: postData.slug,
        meta: postData.meta,
        content: postData.content,
      });
    }
  }

  // 날짜순으로 정렬
  return posts.sort((a, b) => {
    return (
      new Date(b.meta.uploadedAt).getTime() -
      new Date(a.meta.uploadedAt).getTime()
    );
  });
}

// GitHub API 헤더 설정
const getHeaders = () => {
  const headers: { Accept: string; Authorization?: string } = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers["Authorization"] = `token ${GITHUB_TOKEN}`;
  }

  return headers;
};
