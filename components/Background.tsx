"use client";

import { motion, useScroll, useTransform } from "motion/react";

/**
 * Site-wide animated backdrop: a faint grid, drifting aurora orbs and a soft
 * scroll-driven parallax. Sits fixed behind all content.
 */
export function Background() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />

      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-violet-deep/30 blur-[140px] animate-aurora"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-48 top-1/3 h-[40rem] w-[40rem] rounded-full bg-blue-bright/25 blur-[150px] animate-aurora"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-cyan/15 blur-[150px] animate-aurora"
      />

      <div className="noise absolute inset-0 opacity-[0.025] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink" />
    </div>
  );
}
