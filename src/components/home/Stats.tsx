"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 15, label: "Yıllık Deneyim", suffix: "+" },
  { value: 200, label: "Tamamlanan Proje", suffix: "+" },
  { value: 50, label: "Mutlu Müşteri", suffix: "+" },
  { value: 100, label: "Uzman Ekip", suffix: "%" },
];


function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setDisplayValue(Math.floor(current));

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-bold text-sky-500">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
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
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-lg font-medium text-slate-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

