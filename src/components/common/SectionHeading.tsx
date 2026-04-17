"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = false,
  className,
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-12 sm:mb-16", centered && "mx-auto text-center", className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4 border",
            light ? "border-white/20 text-brand-orange bg-white/5" : "border-brand-blue/10 text-brand-blue bg-brand-blue/5"
          )}
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]", light ? "text-white" : "text-brand-dark")}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("text-lg md:text-xl leading-relaxed", light ? "text-brand-lightgray/70" : "text-brand-secondary")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
