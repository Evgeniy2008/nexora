"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 transition-all duration-500 sm:px-4",
            scrolled
              ? "glass py-2.5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              : "py-2",
          )}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
              <Image
                src="/logo.png"
                alt="Nexora"
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
                priority
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Nexora
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3.5 py-2 text-sm text-mute transition-colors hover:bg-white/5 hover:text-white"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LocaleSwitcher className="hidden sm:flex" />
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shine hidden rounded-full bg-gradient-to-r from-violet-deep to-blue-bright px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03] md:inline-flex"
            >
              {t("cta")}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-24 rounded-3xl glass p-4"
            >
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 text-lg font-medium text-white/90 transition-colors hover:bg-white/5"
                    >
                      {t(item.key)}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <LocaleSwitcher />
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gradient-to-r from-violet-deep to-blue-bright px-5 py-2.5 text-sm font-medium text-white shadow-glow"
                >
                  {t("cta")}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
