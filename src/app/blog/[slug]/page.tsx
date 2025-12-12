import * as React from "react";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getBlogPost } from "@/lib/blog-data";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://aerisap.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section spacing="xl" background="default" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-copper-100 text-copper-700 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <article className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}

