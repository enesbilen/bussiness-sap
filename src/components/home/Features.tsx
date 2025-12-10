"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";

const features = [
  {
    icon: Code2,
    title: "ABAP Geliştirme",
    description: "Modern ABAP teknikleri ile yüksek performanslı SAP uygulamaları.",
    gradient: "from-indigo-500 to-purple-500",
    size: "large",
  },
  {
    icon: Database,
    title: "S/4HANA Migration",
    description: "Sorunsuz geçiş ve kapsamlı planlama.",
    gradient: "from-purple-500 to-pink-500",
    size: "small",
  },
  {
    icon: Shield,
    title: "Güvenlik",
    description: "Enterprise-grade güvenlik standartları.",
    gradient: "from-emerald-500 to-teal-500",
    size: "small",
  },
  {
    icon: Zap,
    title: "Performans",
    description: "Sistem optimizasyonu ve hız artışı.",
    gradient: "from-amber-500 to-orange-500",
    size: "medium",
  },
  {
    icon: Users,
    title: "Eğitim & Destek",
    description: "Kapsamlı eğitim programları ve 7/24 destek.",
    gradient: "from-cyan-500 to-blue-500",
    size: "medium",
  },
  {
    icon: TrendingUp,
    title: "Stratejik Danışmanlık",
    description: "ROI maksimizasyonu için roadmap oluşturma.",
    gradient: "from-rose-500 to-red-500",
    size: "small",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]" />

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Neden <span className="text-gradient">Aerisap?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            SAP ekosisteminde uçtan uca çözümler sunuyoruz.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative group rounded-2xl glass glass-hover p-6 
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'lg:col-span-2' : ''}
                  flex flex-col justify-between
                  transition-all duration-300
                `}
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`
                    inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4
                    ${isLarge ? 'w-14 h-14' : 'w-12 h-12'}
                  `}>
                    <Icon className={`${isLarge ? 'h-7 w-7' : 'h-5 w-5'} text-white`} />
                  </div>

                  <h3 className={`font-semibold text-white mb-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                </div>

                <p className={`text-zinc-400 relative z-10 ${isLarge ? 'text-base' : 'text-sm'}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
