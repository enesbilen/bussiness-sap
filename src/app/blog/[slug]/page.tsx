import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getBlogPost, getAllSlugs } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 160) + "...",
    keywords: [
      "SAP",
      "ABAP",
      "S/4HANA",
      "SAP blog",
      "SAP makale",
      ...(post.tags || []),
    ],
    authors: [{ name: post.author || "SAPport Bilişim" }],
    openGraph: {
      title: `${post.title} | SAPport Blog`,
      description: post.excerpt || post.content.substring(0, 160) + "...",
      url: `https://sapport.com.tr/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "SAPport Bilişim"],
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.content.substring(0, 160) + "...",
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Markdown içeriğini HTML'e dönüştür (basit bir yaklaşım)
  const formatContent = (content: string) => {
    let html = content;

    // Başlıkları işle (önce h2, sonra h3)
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-display font-medium tracking-tight text-[#000000] mt-10 mb-6 leading-[1.3]">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-display font-medium tracking-tight text-[#000000] mt-8 mb-4 leading-[1.3]">$1</h3>');

    // Kalın metinleri işle
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-[#000000]">$1</strong>');

    // Listeleri işle - önce list item'ları bul, sonra ul içine al
    const lines = html.split('\n');
    let inList = false;
    let processedLines: string[] = [];

    lines.forEach((line, index) => {
      const listMatch = line.match(/^\*   (.*)$/);
      if (listMatch) {
        if (!inList) {
          processedLines.push('<ul class="list-disc space-y-2 my-4 ml-6">');
          inList = true;
        }
        processedLines.push(`<li class="mb-2 text-[#666666] font-body">${listMatch[1]}</li>`);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        processedLines.push(line);
      }
    });

    if (inList) {
      processedLines.push('</ul>');
    }

    html = processedLines.join('\n');

    // Paragrafları işle
    const paragraphs = html.split('\n\n');
    html = paragraphs
      .map((p) => {
        const trimmed = p.trim();
        if (trimmed && !trimmed.startsWith('<') && !trimmed.startsWith('*')) {
          return `<p class="text-base leading-[1.7] text-[#666666] font-body mb-4">${trimmed}</p>`;
        }
        return p;
      })
      .join('\n\n');

    return html;
  };

  const formattedContent = formatContent(post.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="pt-8 pb-4 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#666666] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Blog'a Dön</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] text-xs font-body font-semibold text-white">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#666666] font-body mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-semibold">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1F1F1F] px-8 py-3.5 text-sm font-body font-bold text-white shadow-sm hover:bg-black transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Blog Yazılarına Dön</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

