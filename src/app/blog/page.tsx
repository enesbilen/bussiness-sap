import * as React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { blogPosts } from "@/lib/blog-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "SAP Uygulama Geliştirme, SAP Danışmanlık, E-Fatura, E-İrsaliye, E-Arşiv ve E-Defter paket çözümleri hakkında teknik ipuçları, rehberler ve en iyi uygulamalar. AERISAP'ın deneyimlerinden çıkardığımız dersler.",
  openGraph: {
    title: "Blog | AERISAP - SAP & e-Çözümler Rehberleri",
    description:
      "SAP uygulama geliştirme, danışmanlık ve paket çözümler hakkında teknik rehberler ve ipuçları.",
    url: "https://aerisap.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Section spacing="xl" background="default" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              SAP dünyasındaki son gelişmeler, teknik ipuçları, en iyi
              uygulamalar ve rehberler. 15 yıllık deneyimimizden çıkardığımız
              dersleri sizlerle paylaşıyoruz.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} hover className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-copper-100 text-copper-700 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-copper-600 hover:text-copper-700 font-medium text-sm transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

