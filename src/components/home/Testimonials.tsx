"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    id: "1",
    name: "Ahmet Yılmaz",
    company: "TechCorp A.Ş.",
    position: "IT Direktörü",
    content:
      "S/4HANA migration projemizde aldığımız en iyi karardı. Profesyonel ekip ve derin teknik bilgi.",
    rating: 5,
  },
  {
    id: "2",
    name: "Zeynep Demir",
    company: "Global Manufacturing",
    position: "SAP Müdürü",
    content:
      "ABAP geliştirme ihtiyaçlarımızda her zaman yanımızdaydılar. İş süreçlerimiz önemli ölçüde iyileşti.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mehmet Kaya",
    company: "Finance Solutions",
    position: "CTO",
    content:
      "Fiori uygulamalarımızın geliştirilmesinde paha biçilmez katkılar. UX odaklı yaklaşım.",
    rating: 5,
  },
  {
    id: "4",
    name: "Ayşe Öztürk",
    company: "Retail Group",
    position: "Proje Yöneticisi",
    content:
      "Sadece teknik çözümler değil, iş süreçlerini de anlayarak stratejik öneriler sundular.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Müşteri <span className="text-gradient">Yorumları</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Başarı hikayelerimiz, müşteri memnuniyetimizin en büyük kanıtı.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="h-full glass rounded-2xl p-6 relative group hover:border-zinc-700 transition-colors">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-indigo-500/50 mb-4" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-zinc-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-zinc-800 transition-colors"
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="h-5 w-5 text-zinc-400" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-zinc-800 transition-colors"
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="h-5 w-5 text-zinc-400" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
