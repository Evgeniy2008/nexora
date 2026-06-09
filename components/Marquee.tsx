"use client";

import { useTranslations } from "next-intl";
import { marqueeTech } from "@/lib/site";

export function Marquee() {
  const t = useTranslations("marquee");
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="relative border-y border-white/5 bg-white/[0.015] py-6">
      <div className="mx-auto mb-4 max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-mute-2">
          {t("label")}
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display whitespace-nowrap text-xl font-medium text-white/35 transition-colors hover:text-white sm:text-2xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
