'use client';

import { type ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  blur?: boolean;
};

const directions: Record<
  NonNullable<ScrollRevealProps["from"]>,
  { x: number; y: number }
> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  from = "up",
  once = true,
  blur = true,
}: ScrollRevealProps) {
  const offset = directions[from];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: blur ? "blur(8px)" : "blur(0px)",
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

