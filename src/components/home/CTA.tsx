"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-border p-8 sm:p-12 lg:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <MessageCircle className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-zinc-300">
                Ücretsiz Danışmanlık
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              SAP Projenizi
              <br />
              <span className="text-gradient">Birlikte Hayata Geçirelim</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto"
            >
              Projelerinizi konuşmak ve size özel çözümler sunmak için buradayız.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            >
              <Button
                asChild
                href="/iletisim"
                variant="primary"
                size="lg"
                className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 hover:from-indigo-600 hover:via-purple-600 hover:to-purple-700 border-0 glow"
              >
                Görüşme Planlayın
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-zinc-400"
            >
              <a
                href="tel:+902121234567"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-zinc-600">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+90 (212) 123 45 67</span>
              </a>
              <a
                href="mailto:info@aerisap.com"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:border-zinc-600">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">info@aerisap.com</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
