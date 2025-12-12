"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    id: "1",
    name: "Ahmet Yılmaz",
    company: "TechCorp A.Ş.",
    position: "IT Direktörü",
    content:
      "Aerisap ile çalışmak, SAP S/4HANA migration projemizde aldığımız en iyi karardı. Profesyonel ekibi ve derin teknik bilgileri sayesinde projemiz zamanında ve sorunsuz tamamlandı.",
  },
  {
    id: "2",
    name: "Zeynep Demir",
    company: "Global Manufacturing",
    position: "SAP Müdürü",
    content:
      "ABAP geliştirme ihtiyaçlarımızda Aerisap'ın uzman ekibi her zaman yanımızda oldu. Modern tekniklerle geliştirdikleri çözümler, iş süreçlerimizi önemli ölçüde iyileştirdi.",
  },
  {
    id: "3",
    name: "Mehmet Kaya",
    company: "Finance Solutions",
    position: "CTO",
    content:
      "Fiori uygulamalarımızın geliştirilmesinde Aerisap'ın katkıları paha biçilmez. Kullanıcı deneyimini ön planda tutan yaklaşımları ve teknik uzmanlıkları ile projelerimizde fark yarattılar.",
  },
  {
    id: "4",
    name: "Ayşe Öztürk",
    company: "Retail Group",
    position: "SAP Proje Yöneticisi",
    content:
      "15 yıllık deneyimleri gerçekten hissediliyor. Aerisap ekibi, sadece teknik çözümler sunmakla kalmayıp, iş süreçlerimizi de anlayarak stratejik önerilerde bulunuyor. Kesinlikle tavsiye ederim.",
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
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Başarı hikayelerimiz, müşteri memnuniyetimizin en büyük kanıtı.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-copper-600 mb-4" />
                      <p className="text-slate-700 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

