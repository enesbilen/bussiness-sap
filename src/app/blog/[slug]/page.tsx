import * as React from "react";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { getBlogPost } from "@/lib/blog-data";
import { type Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı | Aerisap",
    };
  }

  return {
    title: `${post.title} | Aerisap Blog`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "S/4HANA": "from-indigo-500 to-purple-500",
  "ABAP": "from-purple-500 to-pink-500",
  "Fiori": "from-amber-500 to-orange-500",
  "Cloud": "from-cyan-500 to-blue-500",
};

// Basit Markdown parser
const SimpleMarkdown = ({ content }: { content: string }) => {
  if (!content) return null;

  const lines = content.split('\n');
  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        // Headers
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-zinc-800 pb-2">{line.replace('## ', '')}</h2>;
        }
        // List items
        if (line.startsWith('* ') || line.startsWith('- ')) {
          return (
            <div key={index} className="flex items-start ml-4 mb-2">
              <span className="mr-2 text-indigo-500">•</span>
              <span className="text-zinc-300">{line.substring(2)}</span>
            </div>
          );
        }
        // Numbered list (basit check)
        if (/^\d+\.\s/.test(line)) {
          return (
            <div key={index} className="flex items-start ml-4 mb-2">
              <span className="mr-2 text-indigo-500 font-bold">{line.split('.')[0]}.</span>
              <span className="text-zinc-300">{line.split('.').slice(1).join('.').trim()}</span>
            </div>
          );
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        // Paragraphs
        return <p key={index} className="text-zinc-400 leading-relaxed">{line}</p>;
      })}
    </div>
  );
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section spacing="xl" background="primary" className="pt-32 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Blog'a Dön
            </Link>

            <div className="mb-6">
              <span className={`
                inline-block px-4 py-1.5 text-sm font-medium rounded-full
                bg-gradient-to-r ${categoryColors[post.category] || 'from-zinc-600 to-zinc-500'}
                text-white shadow-lg
              `}>
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-400 border-b border-zinc-800 pb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs uppercase">
                  {post.author.charAt(0)}
                </div>
                <span className="text-zinc-300 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" background="secondary">
        <Container>
          <article className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-xl text-zinc-300 font-medium leading-relaxed border-l-4 border-indigo-500 pl-6 italic">
                {post.excerpt}
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {post.content ? (
                <SimpleMarkdown content={post.content} />
              ) : (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 rounded-lg">
                  İçerik hazırlanıyor...
                </div>
              )}
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-800">
              <div className="bg-[#16161f] rounded-2xl p-8 text-center border border-zinc-800/50">
                <h3 className="text-2xl font-bold text-white mb-4">SAP Yolculuğunuzda Desteğe mi İhtiyacınız Var?</h3>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                  Uzman ekibimizle projenizi analiz edelim ve size en uygun çözümü sunalım.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild href="/iletisim" variant="primary">
                    Ücretsiz Danışmanlık Alın
                  </Button>
                  <Button asChild href="/blog" variant="outline">
                    Diğer Yazıları İncele
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
