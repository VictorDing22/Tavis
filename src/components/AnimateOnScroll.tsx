"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const presets: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface Props {
  children: ReactNode;
  variant?: keyof typeof presets;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: Props) {
  return (
    <motion.div
      variants={presets[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
