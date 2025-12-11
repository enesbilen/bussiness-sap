import blogData from "../../blog.json";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime?: string;
}

export function getAllPosts(): BlogPost[] {
  // Tarihe göre yeniden eskiye sırala
  return (blogData.posts as BlogPost[]).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return (blogData.posts as BlogPost[]).find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogData.posts.map((post) => post.slug);
}

