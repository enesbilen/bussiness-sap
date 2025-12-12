"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section spacing="lg" background="default">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-copper-600 to-copper-800 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              SAP Projelerinizde Birlikte Çalışalım
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 text-white/90 leading-relaxed"
            >
              2017'den beri SAP çözümleri sunan AERISAP olarak, QNB eFinans iş birliğiyle 
              150'den fazla firmada kullanılan çözümlerimizle dijital dönüşümünüzde yanınızdayız. 
              Ücretsiz danışmanlık için hemen iletişime geçin.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                href="/iletisim"
                variant="secondary"
                size="lg"
                className="bg-white text-copper-700 hover:bg-copper-50 group"
              >
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 text-white/90">
                <a
                  href="tel:+905333474633"
                  className="flex items-center justify-center space-x-2 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">+90 533 347 46 33</span>
                </a>
                <a
                  href="mailto:turgut.bakir@aerisap.com"
                  className="flex items-center justify-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">turgut.bakir@aerisap.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

