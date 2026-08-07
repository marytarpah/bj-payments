"use client";

import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/config";

type Tier = {
  name: string;
  tagline: string;
  highlight: string;
  featured?: boolean;
  features: string[];
  price?: { ownName: number; nominee: number; originalOwnName: number; originalNominee: number };
  ctaLabel: string;
  ctaNote?: string;
};

const BONUS_SAVINGS = 200;

const TIERS: Tier[] = [
  {
    name: "Starter Shield",
    tagline: "Perfect for testing new markets",
    highlight: "HK Company + Airwallex Only",
    features: ["Full Hong Kong company registration", "Airwallex banking account"],
    price: {
      ownName: 2300,
      nominee: 3700,
      originalOwnName: 2300 + BONUS_SAVINGS,
      originalNominee: 3700 + BONUS_SAVINGS,
    },
    ctaLabel: "Get Started in 5 Days",
  },
  {
    name: "Fortress Package",
    tagline: "Complete protection for serious sellers",
    highlight: "Everything you need to scale",
    featured: true,
    features: [
      "Hong Kong company registration",
      "PayPal Business account with priority support",
      "Airwallex account",
      "Payoneer account plus 5+ additional banking options",
      "Direct access to our PayPal account specialists",
      "Ongoing support for PayPal reactivations",
    ],
    price: {
      ownName: 3500,
      nominee: 5000,
      originalOwnName: 3500 + BONUS_SAVINGS,
      originalNominee: 5000 + BONUS_SAVINGS,
    },
    ctaLabel: "Get Started",
  },
  {
    name: "Titanium Protection",
    tagline: "Maximum security for high-volume sellers",
    highlight: "The ultimate safety net",
    features: [
      "Everything in the Fortress Package, plus:",
      "Additional payment provider integration for lower dispute exposure",
      "Legal support letter for fund holds, included",
      "Priority support queue",
      "Dedicated account manager",
    ],
    ctaLabel: "Book a Consultation",
    ctaNote: "For sellers doing €50k+/month",
  },
];

export function PricingTiers() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Packages
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Protection Level
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Every package includes full company formation and banking. Add a
            nominee director for complete privacy and separation from your
            personal name.
          </p>
          <p className="mt-2 text-xs text-muted/70">
            Pricing shown is an example for Hong Kong setups — costs vary by
            jurisdiction. Message us on WhatsApp for a quote tailored to your
            situation.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mb-4 max-w-2xl sm:mb-5">
          <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 text-left">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2">
              <ShieldCheck className="h-4.5 w-4.5 text-white" />
            </span>
            <p className="text-sm text-foreground">
              🇩🇪 <span className="font-semibold">The only provider with German nominees</span> —
              direct, native-language communication instead of the Chinese
              nominees most other providers use.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mb-10 max-w-2xl sm:mb-14">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-surface px-5 py-4 text-left">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Bonus: Set Up This Week, Save €{BONUS_SAVINGS}
              </p>
              <p className="text-xs text-muted">
                Applies to Starter Shield &amp; Fortress Package — limited to
                the next 10 sign-ups.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={revealItem}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                tier.featured
                  ? "border-accent/50 bg-gradient-to-b from-accent/10 to-surface"
                  : "border-border-subtle bg-surface"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_0_16px_-4px_var(--accent)]">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
              <p className="mt-3 text-sm font-medium text-accent">{tier.highlight}</p>

              <div className="mt-5 border-t border-border-subtle pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
                  What&apos;s Included
                </p>
                <ul className="flex flex-1 flex-col gap-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex-1" />

              {tier.price ? (
                <div
                  className={`mb-5 rounded-xl p-4 ${
                    tier.featured ? "bg-gradient-to-br from-accent/20 to-accent-2/20" : "bg-surface-2"
                  }`}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <p className="text-xs text-muted">Your Investment</p>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      Save €{BONUS_SAVINGS} today
                    </span>
                  </div>
                  <p className="text-sm text-foreground">
                    Own Name:{" "}
                    <span className="text-xs text-muted/60 line-through">
                      €{tier.price.originalOwnName.toLocaleString("en-US")}
                    </span>{" "}
                    <span className="font-semibold text-accent">
                      €{tier.price.ownName.toLocaleString("en-US")}
                    </span>
                  </p>
                  <p className="text-sm text-foreground">
                    With Nominee:{" "}
                    <span className="text-xs text-muted/60 line-through">
                      €{tier.price.originalNominee.toLocaleString("en-US")}
                    </span>{" "}
                    <span className="font-semibold text-accent">
                      €{tier.price.nominee.toLocaleString("en-US")}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="mb-5 rounded-xl bg-surface-2 p-4">
                  <p className="text-sm text-foreground">
                    Custom pricing for high-volume setups — message us on
                    WhatsApp for a free consultation.
                  </p>
                  {tier.ctaNote && (
                    <p className="mt-1 text-xs text-muted">{tier.ctaNote}</p>
                  )}
                </div>
              )}

              <a
                href={buildWhatsAppLink(
                  `Hi, I'm interested in the ${tier.name} package at B&J Payments.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] ${
                  tier.featured
                    ? "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_0_24px_-8px_var(--accent)]"
                    : "border border-border-subtle bg-surface-2 text-foreground hover:border-accent/50"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {tier.ctaLabel}
              </a>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs text-muted">
            No hidden add-on fees per KYC — the price you see is the price
            you pay.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
