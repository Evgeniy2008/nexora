"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);

  // Pointer-driven 3D tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), {
    stiffness: 120,
    damping: 18,
  });

  // Scroll parallax (hero drifts up + fades as you scroll past).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const pills = [
    t("pills.web"),
    t("pills.mobile"),
    t("pills.modern"),
  ];

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        {/* ---- Copy ---- */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-mute backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {t("badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-soft">{t("titleLead")} </span>
            <span className="text-gradient">{t("titleHighlight")}</span>
            <br className="hidden sm:block" />
            <span className="text-gradient-soft"> {t("titleTail")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg lg:mx-0"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-deep via-indigo to-blue-bright px-7 py-3.5 text-base font-medium text-white shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <WhatsAppIcon size={19} />
              {t("ctaPrimary")}
            </a>
            <a
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              {t("ctaSecondary")}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {pills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-mute"
              >
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ---- 3D logo stage ---- */}
        <div className="relative flex items-center justify-center [perspective:1400px]">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <FloatingChip
              className="-left-6 top-6 sm:-left-10"
              mx={mx}
              my={my}
              depth={70}
              label="< / >"
            />
            <FloatingChip
              className="-right-4 top-1/4 sm:-right-12"
              mx={mx}
              my={my}
              depth={95}
              label="React Native"
            />
            <FloatingChip
              className="bottom-8 -left-2 sm:-left-8"
              mx={mx}
              my={my}
              depth={55}
              label="Next.js"
            />
            <FloatingChip
              className="-bottom-2 right-2 sm:right-0"
              mx={mx}
              my={my}
              depth={80}
              label="Node.js"
            />

            <div
              className="relative grid aspect-square w-[18rem] place-items-center rounded-[2.5rem] glass sm:w-[24rem] lg:w-[26rem]"
              style={{ transform: "translateZ(20px)" }}
            >
              {/* rotating conic ring */}
              <div
                className="absolute inset-6 rounded-full opacity-40 animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(139,92,246,0.8), rgba(34,211,238,0.6), transparent 60%)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                }}
              />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-deep/10 to-blue-bright/10" />

              <motion.div
                style={{ transform: "translateZ(60px)" }}
                className="animate-float"
              >
                <Image
                  src="/logo.png"
                  alt="Nexora logo"
                  width={320}
                  height={320}
                  priority
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_60px_rgba(124,58,237,0.55)] sm:h-56 sm:w-56"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-mute-2 sm:flex"
      >
        <MousePointer2 size={16} className="animate-float" />
        {t("scroll")}
      </motion.a>
    </section>
  );
}

function FloatingChip({
  label,
  className,
  mx,
  my,
  depth,
}: {
  label: string;
  className: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
}) {
  const x = useTransform(mx, [-0.5, 0.5], [-depth / 3, depth / 3]);
  const y = useTransform(my, [-0.5, 0.5], [-depth / 3, depth / 3]);
  return (
    <motion.div
      style={{ x, y, transform: `translateZ(${depth}px)` }}
      className={`absolute z-10 hidden rounded-2xl glass px-4 py-2.5 text-sm font-medium text-white/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] sm:block ${className}`}
    >
      <span className="font-display bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
        {label}
      </span>
    </motion.div>
  );
}
