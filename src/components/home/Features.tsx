"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: Code,
    title: "ABAP Geliştirme",
    description:
      "Modern ABAP teknikleri ile ölçeklenebilir, performanslı ve bakımı kolay SAP uygulamaları geliştiriyoruz.",
  },
  {
    icon: Database,
    title: "S/4HANA Migration",
    description:
      "Eski SAP sistemlerinizi S/4HANA'ya sorunsuz geçiş için kapsamlı planlama ve uzman ekibimizle yanınızdayız.",
  },
  {
    icon: Shield,
    title: "Güvenlik & Uyumluluk",
    description:
      "Enterprise-grade güvenlik standartları ve sektör uyumluluk gereksinimlerini karşılayan çözümler sunuyoruz.",
  },
  {
    icon: Zap,
    title: "Performans Optimizasyonu",
    description:
      "SAP sistemlerinizin performansını analiz edip, optimize ederek iş süreçlerinizin hızını artırıyoruz.",
  },
  {
    icon: Users,
    title: "Eğitim & Destek",
    description:
      "Ekibinizin SAP sistemlerini etkin kullanması için kapsamlı eğitim programları ve 7/24 destek hizmeti.",
  },
  {
    icon: TrendingUp,
    title: "Stratejik Danışmanlık",
    description:
      "SAP yatırımlarınızın ROI'sini maksimize etmek için stratejik danışmanlık ve roadmap oluşturma hizmetleri.",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section spacing="lg" background="white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Neden Aerisap?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            15 yıllık deneyimimiz ve uzman ekibimizle, SAP projelerinizde
            güvenilir çözüm ortağınız olmaktan gurur duyuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-sky-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

