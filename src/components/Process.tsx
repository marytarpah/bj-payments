"use client";

import { MessageCircle, FileText, Building2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "We discuss your requirements on WhatsApp and recommend the right jurisdiction.",
  },
  {
    icon: FileText,
    title: "Documents & KYC",
    description:
      "You send us the required documents – we take care of the entire process.",
  },
  {
    icon: Building2,
    title: "Company Formation & Bank Account",
    description:
      "Your company gets registered and your bank account plus PayPal Business account opened.",
  },
  {
    icon: Rocket,
    title: "Payment Go-Live",
    description:
      "An account manager by your side – for Hong Kong, ready to go with a payment provider included.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Process
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready in four steps
          </h2>
        </Reveal>

        <RevealGroup className="relative grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent md:block" />
          {STEPS.map((step, i) => (
            <motion.div key={step.title} variants={revealItem} className="relative flex flex-col items-center text-center">
              <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border-subtle bg-surface transition-transform duration-300 hover:scale-105 hover:border-accent/50 sm:mb-6 sm:h-[76px] sm:w-[76px]">
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-[10px] font-semibold text-white shadow-[0_0_12px_-2px_var(--accent)] sm:-top-2.5 sm:-right-2.5 sm:h-6 sm:w-6 sm:text-xs">
                  {i + 1}
                </span>
                <step.icon className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{step.title}</h3>
              <p className="mt-1.5 max-w-[200px] text-xs text-muted sm:mt-2 sm:max-w-[240px] sm:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
