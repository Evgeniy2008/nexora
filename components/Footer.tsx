"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  const socials = [
    { icon: WhatsAppIcon, href: site.whatsappUrl, label: "WhatsApp", external: true },
    { icon: InstagramIcon, href: site.instagramUrl, label: "Instagram", external: true },
    { icon: Mail, href: site.emailUrl, label: "Email", external: false },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink-2/60 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Nexora"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-semibold">Nexora</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              {tf("tagline")}
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-mute transition-colors hover:border-violet/50 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              {tf("links")}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-mute transition-colors hover:text-white"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              {t("contact")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-mute">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.emailUrl}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-mute-2 sm:flex-row sm:text-left">
          <p>
            © 2026 Nexora. {tf("rights")}
          </p>
          <p>{tf("madeIn")}</p>
        </div>
      </div>
    </footer>
  );
}
