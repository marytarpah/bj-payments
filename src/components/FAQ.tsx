"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "Am I actually legally protected with a company setup?",
    a: "Yes. By separating your private identity from your business through a proper company structure, you're no longer personally liable with your private assets for business risks. That's exactly what the structure is built for — your business operates through the company, not through you.",
  },
  {
    q: "What is a nominee director/shareholder and do I need one?",
    a: "A nominee is an officially registered person (director/shareholder) who appears on the public company register, while you retain full control of your business behind the scenes. If privacy matters to you and you don't want your name publicly tied to the business, this is the standard building block in our packages.",
  },
  {
    q: "I'm currently dealing with holds on Shopify Payments — will this help?",
    a: "Yes, this is one of the most common reasons clients come to us. With a clean company structure and the right payment providers included in our packages, you get access to more stable payment solutions that are far less likely to trigger holds or reserves than a personal Shopify Payments account.",
  },
  {
    q: "Can I sell high-risk products with this?",
    a: "Yes. Many standard payment providers exclude certain product categories or shut accounts down quickly. Through our company structures, you gain access to payment providers built for high-risk industries, so you can offer products that would otherwise be difficult to process.",
  },
  {
    q: "How long does setup take and when can I start?",
    a: "Timelines vary depending on the jurisdiction you choose (Hong Kong, US, Panama, UK). Once setup is complete, you get direct access to your account manager as well as your PayPal and bank account, so you're ready to go immediately.",
  },
  {
    q: "Which jurisdiction is best for me as an e-commerce/dropshipping business owner?",
    a: "It depends on your business model, target market, and priorities (taxes, privacy, payment access). Our account manager will advise you individually so you choose the structure that best fits your setup.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal className="mb-8 text-center sm:mb-10">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">FAQ</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-surface transition-colors duration-300",
                    isOpen ? "border-accent/40" : "border-border-subtle"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-medium text-foreground sm:text-base">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border",
                        isOpen
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border-subtle text-muted"
                      )}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
