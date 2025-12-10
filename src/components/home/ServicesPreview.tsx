"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Layers, Code2, Palette } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    icon: Layers,
    title: "SAP S/4HANA",
    description:
      "Migration, implementasyon ve optimizasyon hizmetleri ile dijital dönüşümünüzü hızlandırın.",
    features: ["Brownfield Migration", "Greenfield Implementation", "System Optimization"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    number: "02",
    icon: Code2,
    title: "ABAP Geliştirme",
    description:
      "Custom SAP uygulamaları, report geliştirme ve sistem entegrasyonları.",
    features: ["Custom Development", "Enhancement & Modification", "Interface Development"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Palette,
    title: "Fiori & UI5",
    description:
      "Modern, kullanıcı dostu arayüzler ile SAP deneyiminizi yeniden tanımlayın.",
    features: ["Fiori Elements", "Custom UI5 Apps", "Launchpad Configuration"],
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#12121a] relative">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Hizmetlerimiz</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            SAP ekosisteminde ihtiyacınız olan tüm çözümler.
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`
                  relative rounded-2xl glass glass-hover p-8 
                  flex flex-col lg:flex-row gap-8 items-start lg:items-center
                  ${isEven ? 'lg:flex-row-reverse' : ''}
                `}>
                  {/* Number */}
                  <div className="hidden lg:block absolute top-8 left-8 text-6xl font-bold text-zinc-800/50">
                    {service.number}
                  </div>

                  {/* Icon Container */}
                  <div className={`
                    flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient}
                    flex items-center justify-center glow
                  `}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:pl-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 max-w-xl">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Link */}
                  <Link
                    href="/hizmetler"
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center
                              group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500
                              transition-all duration-300"
                  >
                    <ArrowRight className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            href="/hizmetler"
            variant="outline"
            size="lg"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600"
          >
            Tüm Hizmetleri Görüntüle
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
