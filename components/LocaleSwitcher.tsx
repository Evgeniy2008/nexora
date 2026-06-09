"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, localeNames, localeFlags, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={cn(
        "relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur",
        isPending && "opacity-70",
        className,
      )}
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            onClick={() => switchTo(l)}
            aria-label={localeNames[l]}
            aria-pressed={active}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              active
                ? "bg-gradient-to-r from-violet-deep to-blue-bright text-white shadow-glow"
                : "text-mute hover:text-white",
            )}
          >
            <span className="text-sm leading-none">{localeFlags[l]}</span>
            <span className="uppercase tracking-wide">{l}</span>
          </button>
        );
      })}
    </div>
  );
}
