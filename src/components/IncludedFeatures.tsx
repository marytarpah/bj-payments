"use client";

import { CheckCircle2, CreditCard, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { includedInEvery, hongKongOnly, addOns } from "@/lib/services";

type Block = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  accent: boolean;
};

const BLOCKS: Block[] = [
  {
    icon: CheckCircle2,
    title: "Included in every package",
    description: "Basic & Premium – every jurisdiction",
    items: includedInEvery,
    accent: false,
  },
  {
    icon: CreditCard,
    title: "Hong Kong exclusive",
    description: "Payment processing on board from day one",
    items: hongKongOnly,
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Add-on",
    description: "Available as add-on or part of Premium",
    items: addOns,
    accent: false,
  },
];

export function IncludedFeatures() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What exactly is included?
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Full transparency across every package – so you know exactly
            what you&apos;re getting.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {BLOCKS.map((block) => (
            <motion.div
              key={block.title}
              variants={revealItem}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={
                block.accent
                  ? "card-glow relative rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-surface p-6 sm:p-7"
                  : "card-glow relative rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7"
              }
            >
              <div
                className={
                  block.accent
                    ? "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_20px_-4px_var(--accent)]"
                    : "mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface-2"
                }
              >
                <block.icon
                  className={block.accent ? "h-5 w-5 text-white" : "h-5 w-5 text-accent"}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
              <p className="mt-1 text-sm text-muted">{block.description}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
