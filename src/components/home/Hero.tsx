"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import GrainBackground from "@/components/common/GrainBackground";
import AnimatedGradient from "@/components/common/AnimatedGradient";

export default function Hero() {
  return (
    <Section spacing="xl" background="default" className="relative overflow-hidden">
      <GrainBackground intensity="light" />
      <AnimatedGradient variant="subtle" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold text-copper-600 mb-4"
            >
              2017'den Beri SAP Çözümleri
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Şirketinizi Geleceğe Taşıyacak
              <br />
              <span className="text-copper-600">e-Çözümler ve SAP Uygulamaları</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              AERISAP olarak, SAP kurulum, geliştirme ve entegrasyon hizmetleri sunuyoruz. 
              QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan çözümlerimizle 
              dijital dönüşümünüzde yanınızdayız.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                asChild
                href="/iletisim"
                variant="primary"
                size="lg"
                className="group"
              >
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                asChild
                href="/hizmetler"
                variant="outline"
                size="lg"
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                "SAP Uygulama Geliştirme",
                "SAP Danışmanlık",
                "Paket Çözümler",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center justify-center space-x-2 text-slate-700"
                >
                  <CheckCircle className="h-5 w-5 text-copper-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

