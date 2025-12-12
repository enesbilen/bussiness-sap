"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  FileText,
  Package,
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
    title: "SAP Uygulama Geliştirme",
    description:
      "ABAP programlama ve özel çözümler ile işletmenizin ihtiyaçlarına özel SAP uygulamaları geliştiriyoruz.",
  },
  {
    icon: FileText,
    title: "SAP Danışmanlık",
    description:
      "Sistemlerinizin yapılandırması, entegrasyonu ve güncelleştirilmesi konusunda uzman danışmanlık hizmetleri.",
  },
  {
    icon: Package,
    title: "Paket Çözümler",
    description:
      "E-Fatura, E-İrsaliye, E-Arşiv ve E-Defter paket çözümlerimizle dijital dönüşümünüzü destekliyoruz.",
  },
  {
    icon: Zap,
    title: "QNB E-Solutions İş Birliği",
    description:
      "Dijital dönüşüm süreçlerinde iş ortağımız QNB E-Solutions ile entegre ve yenilikçi çözümler sunuyoruz.",
  },
  {
    icon: Users,
    title: "150+ Firmada Kullanılan Çözümler",
    description:
      "QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan güvenilir ve sürdürülebilir çözümlerimiz.",
  },
  {
    icon: TrendingUp,
    title: "SAP Geliştirme Ortağı",
    description:
      "SAP A.G tarafından geliştirme ortağı olarak tanınan AERISAP, sektörde güvenilir bir iş ortağıdır.",
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
            2017'den beri SAP çözümleri sunan AERISAP olarak, QNB eFinans iş birliğiyle 
            150'den fazla firmada kullanılan çözümlerimizle dijital dönüşümünüzde yanınızdayız.
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
                        <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-copper-600" />
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

