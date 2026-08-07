"use client";

import { Building2, MapPin, Wallet, Globe2, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: Building2,
    days: "2–3 days",
    title: "Hong Kong Company Formation",
    description:
      "We register your Hong Kong Limited company with full compliance, positioning you for banking and payment approval.",
  },
  {
    icon: MapPin,
    days: "1 day",
    title: "Business Address & Compliance",
    description:
      "A compliant Hong Kong business address and all required documentation are prepared alongside your formation.",
  },
  {
    icon: Wallet,
    days: "1–2 days",
    title: "PayPal HK Business Account",
    description:
      "We complete your PayPal Hong Kong Business verification, connecting you to PayPal's global payment network.",
  },
  {
    icon: Globe2,
    days: "1 day",
    title: "Multi-Currency Account",
    description:
      "Your multi-currency business account is opened for seamless global payouts and currency conversion.",
  },
  {
    icon: CreditCard,
    days: "2 days",
    title: "Payment Provider Activation",
    description:
      "Your dedicated Hong Kong payment provider account goes live, ready to process card payments and checkout.",
  },
];

export function SetupTimeline() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            How It Works
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Zero to a Live Hong Kong Payment Setup
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Most clients are fully set up and processing payments within{" "}
            <span className="font-semibold text-foreground">7–9 business days</span>.
          </p>
        </Reveal>

        <RevealGroup className="relative flex flex-col gap-5">
          <div className="pointer-events-none absolute bottom-6 left-[27px] top-6 hidden w-px bg-gradient-to-b from-transparent via-border-subtle to-transparent sm:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={revealItem}
              className="relative flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface p-5 sm:gap-5 sm:p-6"
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface-2">
                <step.icon className="h-5 w-5 text-accent" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-[10px] font-semibold text-white">
                  {i + 1}
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <span className="rounded-full border border-border-subtle bg-surface-2 px-2.5 py-0.5 text-[11px] font-medium text-muted">
                    {step.days}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
