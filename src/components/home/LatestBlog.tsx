"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getRecentPosts } from "@/lib/blog-data";

export default function LatestBlog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const posts = getRecentPosts(3);

  return (
    <Section spacing="lg" background="slate">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Son Blog Yazılarımız
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            SAP dünyasındaki son gelişmeler, ipuçları ve en iyi uygulamalar
            hakkında yazılarımızı keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
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
                      className="inline-flex items-center text-sky-500 hover:text-sky-600 font-medium text-sm transition-colors"
                    >
                      Devamını Oku
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild href="/blog" variant="primary" size="lg">
            Tüm Blog Yazılarını Görün
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

