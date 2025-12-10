"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-[128px] float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] float" style={{ animationDelay: '-1.5s' }} />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-zinc-300">
                SAP & ABAP Uzmanı
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            >
              <span className="text-white">SAP Projelerinizi</span>
              <br />
              <span className="text-gradient">Geleceğe Taşıyoruz</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
            >
              S/4HANA migration, ABAP geliştirme ve Fiori uygulamalarında
              uzman ekibimizle dijital dönüşümünüzü hızlandırın.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                href="/iletisim"
                variant="primary"
                size="lg"
                className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 hover:from-indigo-600 hover:via-purple-600 hover:to-purple-700 border-0 glow-hover"
              >
                Proje Başlatalım
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                asChild
                href="/hizmetler"
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600"
              >
                Hizmetleri Keşfet
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-zinc-800"
            >
              {[
                { value: "200+", label: "Tamamlanan Proje" },
                { value: "50+", label: "Mutlu Müşteri" },
                { value: "15+", label: "Yıllık Tecrübe" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
