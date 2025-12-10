import blogData from "@/data/blog-data.json";

export interface BlogPostSimple {
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // Detay sayfası için eklendi
  date: string;
  category: string;
  author: string; // JSON'da author alanı var
  readTime?: string; // JSON'da readTime alanı var
}

export function getAllPosts(): BlogPostSimple[] {
  // Tarihe göre yeniden eskiye sırala
  return (blogData.posts as BlogPostSimple[]).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getRecentPosts(limit: number = 3): BlogPostSimple[] {
  return getAllPosts().slice(0, limit);
}

export function getBlogPost(slug: string): BlogPostSimple | undefined {
  return (blogData.posts as BlogPostSimple[]).find((post) => post.slug === slug);
}
