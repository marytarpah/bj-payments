"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/config";
import type { Jurisdiction } from "@/lib/services";

export function JurisdictionCard({ jurisdiction }: { jurisdiction: Jurisdiction }) {
  const [active, setActive] = useState<"Basic" | "Premium">("Basic");
  const pkg = jurisdiction.packages.find((p) => p.name === active)!;

  const whatsappLink = buildWhatsAppLink(
    `Hi, I'm interested in ${jurisdiction.entity} (${active}) at B&J Payments.`
  );

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="card-glow group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-5 transition-colors duration-300 hover:border-white/10 sm:p-7"
    >
      {jurisdiction.highlight && (
        <div className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-[11px] font-medium text-white shadow-[0_0_16px_-4px_var(--accent)] sm:left-7 sm:text-xs">
          <Star className="h-3 w-3 fill-current" />
          {jurisdiction.highlight}
        </div>
      )}

      <div className="mb-1 flex items-center gap-2.5">
        <span className="text-2xl leading-none">{jurisdiction.flag}</span>
        <h3 className="text-lg font-semibold text-foreground sm:text-xl">{jurisdiction.country}</h3>
      </div>
      <p className="mb-5 text-sm text-muted sm:mb-6">{jurisdiction.tagline}</p>

      <div className="mb-6 inline-flex w-full rounded-full border border-border-subtle bg-surface-2 p-1">
        {jurisdiction.packages.map((p) => (
          <button
            key={p.name}
            onClick={() => setActive(p.name)}
            className={cn(
              "relative flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
              active === p.name ? "text-white" : "text-muted hover:text-foreground"
            )}
          >
            {active === p.name && (
              <motion.span
                layoutId={`pill-${jurisdiction.id}`}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-2"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{p.name}</span>
          </button>
        ))}
      </div>

      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-2 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 group-hover:border-accent/50 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-2 group-hover:text-white"
      >
        <MessageCircle className="h-4 w-4" />
        Request Now
      </a>
    </motion.div>
  );
}
