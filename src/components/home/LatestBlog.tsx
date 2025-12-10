"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, ArrowUpRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getRecentPosts } from "@/lib/blog-data";

export default function LatestBlog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const posts = getRecentPosts(3);

  const categoryColors: Record<string, string> = {
    "S/4HANA": "from-indigo-500 to-purple-500",
    "ABAP": "from-purple-500 to-pink-500",
    "Fiori": "from-amber-500 to-orange-500",
    "Cloud": "from-cyan-500 to-blue-500",
  };

  return (
    <section className="py-24 bg-[#12121a] relative">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              Blog
            </h2>
            <p className="text-lg text-zinc-400">
              SAP dünyasından güncel içerikler
            </p>
          </div>
          <Button
            asChild
            href="/blog"
            variant="outline"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50"
          >
            Tümünü Gör
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="h-full glass rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`
                      inline-block px-3 py-1 text-xs font-medium rounded-full
                      bg-gradient-to-r ${categoryColors[post.category] || 'from-zinc-600 to-zinc-500'}
                      text-white
                    `}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-zinc-400 text-sm mb-4 flex-1 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
