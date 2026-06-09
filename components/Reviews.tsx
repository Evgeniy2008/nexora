"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, childVariants } from "./Reveal";

type Review = { name: string; role: string; text: string };

const gradients = [
  "from-violet-deep to-indigo",
  "from-indigo to-blue-bright",
  "from-blue-bright to-cyan",
];

export function Reviews() {
  const t = useTranslations("reviews");
  const items = t.raw("items") as Review[];

  return (
    <section id="reviews" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((review, i) => (
            <motion.figure
              key={review.name}
              variants={childVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="card-glow relative flex h-full flex-col rounded-3xl glass p-7 sm:p-8"
            >
              <Quote
                size={40}
                className="absolute right-6 top-6 text-white/5"
                strokeWidth={1.5}
              />
              <div className="flex gap-0.5 text-cyan">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 grow text-[15px] leading-relaxed text-white/85">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/5 pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} font-display text-sm font-semibold text-white`}
                >
                  {review.name.charAt(0)}
                </span>
                <div>
                  <div className="font-display text-sm font-semibold">
                    {review.name}
                  </div>
                  <div className="text-xs text-mute-2">{review.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
