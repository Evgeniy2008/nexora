"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Check, Globe, Smartphone, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  const t = useTranslations("services");
  const webFeatures = t.raw("web.features") as string[];
  const mobileFeatures = t.raw("mobile.features") as string[];

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ServiceCard
            icon={<Globe size={26} />}
            title={t("web.title")}
            desc={t("web.desc")}
            features={webFeatures}
            accent="from-violet-deep/25 to-transparent"
            delay={0}
          />
          <ServiceCard
            icon={<Smartphone size={26} />}
            title={t("mobile.title")}
            desc={t("mobile.desc")}
            features={mobileFeatures}
            accent="from-blue-bright/25 to-transparent"
            delay={0.1}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="card-glow mt-6 flex flex-col items-start gap-5 overflow-hidden rounded-3xl glass p-8 sm:flex-row sm:items-center sm:gap-7 sm:p-10">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-deep to-cyan text-white shadow-glow">
              <Sparkles size={26} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                {t("engines.title")}
              </h3>
              <p className="mt-2 max-w-3xl text-mute">{t("engines.desc")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  features,
  accent,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  accent: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-8 sm:p-10"
      >
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent} blur-3xl transition-opacity duration-500 group-hover:opacity-150`}
        />
        <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan transition-colors group-hover:text-white">
          {icon}
        </div>
        <h3 className="font-display relative mt-6 text-2xl font-semibold">
          {title}
        </h3>
        <p className="relative mt-3 text-mute">{desc}</p>

        <ul className="relative mt-7 space-y-3 border-t border-white/5 pt-6">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/85">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-deep to-blue-bright text-white">
                <Check size={13} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </motion.div>
    </Reveal>
  );
}
