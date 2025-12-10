"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedGradientProps {
  className?: string;
  variant?: "subtle" | "medium" | "strong";
}

export default function AnimatedGradient({
  className,
  variant = "subtle",
}: AnimatedGradientProps) {
  const variants = {
    subtle: "from-sky-500/10 via-blue-500/5 to-transparent",
    medium: "from-sky-500/20 via-blue-500/10 to-transparent",
    strong: "from-sky-500/30 via-blue-500/15 to-transparent",
  };

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        "bg-gradient-to-br",
        variants[variant],
        className
      )}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      aria-hidden="true"
    />
  );
}

