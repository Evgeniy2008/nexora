import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
}: {
  tag: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-cyan">
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="text-gradient-soft">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-mute sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
