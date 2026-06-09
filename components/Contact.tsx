"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, childVariants } from "./Reveal";

export function Contact() {
  const t = useTranslations("contact");

  const cards = [
    {
      icon: WhatsAppIcon,
      label: t("whatsapp.label"),
      value: t("whatsapp.value"),
      action: t("whatsapp.action"),
      href: site.whatsappUrl,
      external: true,
      accent: "from-violet-deep to-indigo",
    },
    {
      icon: InstagramIcon,
      label: t("instagram.label"),
      value: t("instagram.value"),
      action: t("instagram.action"),
      href: site.instagramUrl,
      external: true,
      accent: "from-indigo to-blue-bright",
    },
    {
      icon: Mail,
      label: t("email.label"),
      value: t("email.value"),
      action: t("email.action"),
      href: site.emailUrl,
      external: false,
      accent: "from-blue-bright to-cyan",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="card-glow relative overflow-hidden rounded-[2.5rem] glass p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-deep/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-bright/25 blur-[120px]" />

          <div className="relative">
            <SectionHeading
              tag={t("tag")}
              title={t("title")}
              subtitle={t("subtitle")}
            />

            <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
              {cards.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  variants={childVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center transition-colors hover:bg-white/[0.06]"
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-glow transition-transform group-hover:scale-110`}
                  >
                    <c.icon size={24} />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-wider text-mute-2">
                    {c.label}
                  </div>
                  <div className="font-display mt-1.5 text-base font-semibold text-white">
                    {c.value}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan">
                    {c.action}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </motion.a>
              ))}
            </RevealGroup>

            <RevealGroup className="mt-8 flex justify-center">
              <motion.div
                variants={childVariants}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80"
              >
                <MapPin size={16} className="text-cyan" />
                {t("location.value")}
              </motion.div>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
