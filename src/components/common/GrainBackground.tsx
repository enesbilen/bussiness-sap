"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GrainBackgroundProps {
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

export default function GrainBackground({
  className,
  intensity = "light",
}: GrainBackgroundProps) {
  const opacity = {
    light: "opacity-[0.03]",
    medium: "opacity-[0.05]",
    strong: "opacity-[0.08]",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        opacity[intensity],
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
      aria-hidden="true"
    />
  );
}

