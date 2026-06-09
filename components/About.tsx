"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  Gauge,
  HeartHandshake,
  MapPin,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealGroup, childVariants } from "./Reveal";

const points: { key: string; icon: LucideIcon }[] = [
  { key: "quality", icon: ShieldCheck },
  { key: "speed", icon: Gauge },
  { key: "care", icon: HeartHandshake },
  { key: "modern", icon: Rocket },
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md [perspective:1200px]">
            <motion.div
              initial={{ rotateY: 14, rotateX: 6 }}
              whileInView={{ rotateY: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square rounded-[2.5rem] glass p-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-deep/15 to-blue-bright/10" />
              <div
                className="absolute inset-10 rounded-full opacity-30 animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 90deg, transparent, rgba(34,211,238,0.7), rgba(124,58,237,0.7), transparent 65%)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                }}
              />
              <div className="relative grid h-full place-items-center">
                <Image
                  src="/logo.png"
                  alt="Nexora"
                  width={220}
                  height={220}
                  className="h-40 w-40 object-contain drop-shadow-[0_20px_50px_rgba(124,58,237,0.5)] animate-float sm:h-48 sm:w-48"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-ink/60 px-4 py-2 text-sm text-white/90 backdrop-blur">
                <MapPin size={15} className="text-cyan" />
                Sibiu · Transylvania
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-cyan">
              {t("tag")}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient-soft">{t("title")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              {t("lead")}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 leading-relaxed text-mute">{t("body")}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map(({ key, icon: Icon }) => (
              <motion.div
                key={key}
                variants={childVariants}
                className="flex gap-3.5 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-deep to-blue-bright text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold">
                    {t(`points.${key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-mute">
                    {t(`points.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
