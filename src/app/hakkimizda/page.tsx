"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Target,
  Handshake,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description:
      "SAP tabanlı çözümlerle firmaların dijital dönüşümünü desteklemek, iş süreçlerini verimli hale getirmek ve ihtiyaçlara özel yazılımlar sunmaktır.",
  },
  {
    icon: Award,
    title: "SAP Geliştirme Ortağı",
    description:
      "SAP A.G tarafından geliştirme ortağı olarak tanınan AERISAP, sektörde güvenilir bir iş ortağıdır.",
  },
  {
    icon: Users,
    title: "150+ Firma",
    description:
      "QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan çözümler üretmekteyiz.",
  },
  {
    icon: TrendingUp,
    title: "Sürekli Gelişim",
    description:
      "eFatura, eArşiv, eİrsaliye ve eDefter gibi alanlarda sürekli gelişen ürünlerimizle müşterilerimize güvenilir hizmetler sağlıyoruz.",
  },
];

export default function AboutPage() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Section spacing="xl" background="default" className="pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Şirketinizi geleceğe taşıyacak e-Çözümler ve SAP uygulamaları
              geliştiren, güvenilir iş ortağınız.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Biz Kimiz */}
      <Section spacing="lg" background="white">
        <Container>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-copper-100 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-copper-600" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Biz Kimiz?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p>
                    AERISAP Yazılım ve Danışmanlık A.Ş., 2017'de kurulan ve
                    2019'dan bu yana anonim şirket olarak faaliyet gösteren
                    Ankara merkezli bir SAP danışmanlık firmasıdır. SAP kurulum,
                    geliştirme ve entegrasyon hizmetleri sunmakta; QNB eFinans
                    iş birliğiyle 150'den fazla firmada kullanılan çözümler
                    üretmektedir.
                  </p>
                  <p>
                    SAP A.G tarafından geliştirme ortağı olarak tanınan
                    AERISAP, sektörde güvenilir bir iş ortağıdır.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Misyonumuz */}
      <Section spacing="lg" background="slate">
        <Container>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-copper-600 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  Misyonumuz
                </h2>
                <p className="text-lg text-black/90 leading-relaxed">
                  Misyonumuz; SAP tabanlı çözümlerle firmaların dijital
                  dönüşümünü desteklemek, iş süreçlerini verimli hale getirmek
                  ve ihtiyaçlara özel yazılımlar sunmaktır. eFatura, eArşiv,
                  eİrsaliye ve eDefter gibi alanlarda geliştirdiğimiz
                  ürünlerle müşterilerimize güvenilir, sürdürülebilir ve entegre
                  hizmetler sağlıyoruz. SAP danışmanlık hizmetlerimizle de
                  firmaların her adımında yanlarında olmayı hedefliyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* QNB E-Solutions */}
      <Section spacing="lg" background="white">
        <Container>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-copper-50 to-copper-100 border-copper-200">
              <CardContent className="p-8 sm:p-12">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-lg bg-copper-600 flex items-center justify-center">
                      <Handshake className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                      QNB E-Solutions - Dijital Dönüşüm Partnerimiz
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Dijital dönüşüm süreçlerinde iş ortağımız olan QNB
                      E-Solutions ile birlikte, müşterilerimize entegre ve
                      yenilikçi çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Değerlerimiz */}
      <Section spacing="lg" background="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Değerlerimiz ve Özelliklerimiz
            </h2>
            <p className="text-lg text-slate-600">
              AERISAP olarak sunduğumuz hizmetlerin temelinde yatan değerler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-copper-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" background="slate">
        <Container>
          <div className="bg-gradient-to-br from-copper-600 to-copper-800 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projeniz İçin Hemen İletişime Geçin
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              SAP projeleriniz için ücretsiz danışmanlık ve özel teklif almak
              için bizimle iletişime geçin.
            </p>
            <Button
              asChild
              href="/iletisim"
              variant="secondary"
              size="lg"
              className="bg-white text-copper-700 hover:bg-copper-50"
            >
              İletişime Geçin
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

