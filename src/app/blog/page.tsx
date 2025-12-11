import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "SAP, S/4HANA, ABAP, Fiori, Daisy portal ve bulut teknolojileri hakkında güncel blog yazıları, rehberler ve SAP danışmanlık ipuçları.",
  keywords: [
    "SAP blog",
    "SAP makaleleri",
    "ABAP rehberi",
    "S/4HANA",
    "SAP Fiori",
    "SAP teknolojileri",
    "SAP ipuçları",
    "SAP eğitim",
    "SAP haberleri",
    "SAP danışmanlık blog",
  ],
  openGraph: {
    title: "Blog | SAPport - SAP Teknolojileri",
    description: "SAP, S/4HANA, ABAP, Fiori ve bulut teknolojileri hakkında güncel blog yazıları ve rehberler.",
    url: "https://sapport.com.tr/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate py-20 sm:py-32 px-6 lg:px-8 overflow-hidden">
        {/* Background Image - hero-main.png */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/sap-images/hero/hero-main.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Hero-base.svg */}
        <div className="absolute inset-0 z-[-2]">
          <Image
            src="/sap-images/hero/hero-base.svg"
            alt="Hero Base"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm mb-6">
              <span>Blog</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Blog Yazılarımız
            </h1>
            <p className="text-lg sm:text-xl leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              SAP teknolojileri, S/4HANA geçişi, ABAP geliştirme ve dijital dönüşüm hakkında 
              güncel içerikler ve uzman görüşleri.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-brand-green group"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] text-xs font-body font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-3 leading-[1.3] group-hover:text-brand-green transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm leading-[1.7] text-[#666666] font-body mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-[#666666] font-body mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>

                {/* Author */}
                <div className="text-xs text-[#666666] font-body mb-4">
                  <span className="font-semibold">{post.author}</span>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-sm font-body font-semibold text-brand-green group-hover:gap-3 transition-all">
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

