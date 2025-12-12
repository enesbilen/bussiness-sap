"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "SAP Uygulama Geliştirme",
    description:
      "İşletmenizin ihtiyaçlarına özel SAP uygulamaları geliştiriyoruz. ABAP programlama ve özel çözümler ile iş süreçlerinizi optimize ediyoruz.",
  },
  {
    title: "SAP Danışmanlık",
    description:
      "Sistemlerinizin yapılandırması, entegrasyonu ve güncelleştirilmesi konusunda uzman danışmanlık hizmetleri sunuyoruz.",
  },
  {
    title: "Paket Çözümler",
    description:
      "E-Fatura, E-İrsaliye, E-Arşiv ve E-Defter paket çözümlerimizle dijital dönüşümünüzü hızlandırın.",
  },
];

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            SAP ekosisteminde ihtiyacınız olan tüm hizmetleri tek çatı altında
            sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center text-copper-600 hover:text-copper-700 font-medium text-sm transition-colors"
                  >
                    Detayları Görün
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
          <Button asChild href="/hizmetler" variant="primary" size="lg">
            Tüm Hizmetlerimizi Görün
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

