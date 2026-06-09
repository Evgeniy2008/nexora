"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  Database,
  LayoutPanelTop,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { techGroups } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, childVariants } from "./Reveal";

const groupMeta: { key: keyof typeof techGroups; icon: LucideIcon }[] = [
  { key: "frontend", icon: LayoutPanelTop },
  { key: "backend", icon: Server },
  { key: "mobile", icon: Smartphone },
  { key: "databases", icon: Database },
];

export function TechStack() {
  const t = useTranslations("tech");

  return (
    <section id="tech" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groupMeta.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={childVariants}
              whileHover={{ y: -6 }}
              className="card-glow group relative flex flex-col rounded-3xl glass p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-deep/80 to-blue-bright/80 text-white shadow-glow">
                <Icon size={22} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold">
                {t(`groups.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {t(`groups.${key}.desc`)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                {techGroups[key].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/80 transition-colors group-hover:border-violet/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
