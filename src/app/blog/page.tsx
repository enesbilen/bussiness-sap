import * as React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { getAllPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Aerisap - SAP & ABAP İpuçları ve Rehberler",
  description:
    "SAP dünyasındaki son gelişmeler, teknik ipuçları, en iyi uygulamalar ve rehberler.",
};

const categoryColors: Record<string, string> = {
  "S/4HANA": "from-indigo-500 to-purple-500",
  "ABAP": "from-purple-500 to-pink-500",
  "Fiori": "from-amber-500 to-orange-500",
  "Cloud": "from-cyan-500 to-blue-500",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section spacing="xl" background="primary" className="pt-32 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              SAP dünyasındaki son gelişmeler, teknik ipuçları ve en iyi
              uygulamalar hakkındaki <span className="text-white font-medium">güncel yazılarımız</span>.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="secondary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} hover className="h-full flex flex-col group border-zinc-800">
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className={`
                        inline-block px-3 py-1 text-xs font-medium rounded-full
                        bg-gradient-to-r ${categoryColors[post.category] || 'from-zinc-600 to-zinc-500'}
                        text-white
                      `}>
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-gradient transition-all duration-300">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <span className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                        Oku
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
