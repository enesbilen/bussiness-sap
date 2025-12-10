"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/components/ui/Container";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 15, label: "Yıllık Deneyim", suffix: "+" },
  { value: 200, label: "Tamamlanan Proje", suffix: "+" },
  { value: 50, label: "Mutlu Müşteri", suffix: "+" },
  { value: 98, label: "Müşteri Memnuniyeti", suffix: "%" },
];

function Counter({ value, suffix, prefix }: { value: number; suffix?: string; prefix?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step <= steps) {
        setDisplayValue((prev) => {
          const next = Math.min(increment * step, value);
          return Math.floor(next);
        });
      } else {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12121a] via-[#0a0a0f] to-[#12121a]" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="gradient-border p-8 text-center h-full flex flex-col items-center justify-center bg-[#16161f] rounded-2xl">
                  <div className="mb-3">
                    <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="text-base font-medium text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
