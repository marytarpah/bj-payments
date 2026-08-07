"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/config";

const TRUST_POINTS = [
  "Personal account manager included",
  "Hong Kong payment provider included",
  "Transparent, no-surprises process",
];

export function SmartStrategySection() {
  return (
    <section className="relative px-5 py-14 text-center sm:px-6 sm:py-20">
      <Reveal className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Smart Strategy
        </span>

        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          <span className="text-emerald-400">
            Smart business owners don&apos;t leave their payments to chance.
          </span>{" "}
          <span className="text-foreground">
            They set up a proven Hong Kong PSP structure built for long-term
            stability.
          </span>
        </h2>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_28px_-10px_var(--accent)] transition-transform duration-300 hover:scale-[1.03]"
        >
          <MessageCircle className="h-4 w-4" />
          Build a Stable Payment Setup
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {TRUST_POINTS.map((point) => (
            <span
              key={point}
              className="flex items-center gap-1.5 text-sm text-muted"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              {point}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
