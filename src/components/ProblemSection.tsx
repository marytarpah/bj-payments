"use client";

import { AlertTriangle, Lock, RotateCcw, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

const BAR_HEIGHTS = [38, 55, 44, 70, 100, 60, 46];

export function ProblemSection() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-medium text-red-400">
            <AlertTriangle className="h-3.5 w-3.5" />A Common Business Risk
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-red-400 to-rose-300 bg-clip-text text-transparent">
              Why Traditional Processors
            </span>
            <br />
            <span className="text-foreground">Hold Growing Businesses Back</span>
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Mainstream payment processors are built for small, predictable
            volume — the moment your business scales, the problems start.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {/* card 1: chart */}
          <motion.div
            variants={revealItem}
            className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-surface p-6"
          >
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-500/10 to-transparent" />
            <div className="relative mb-5 rounded-xl border border-border-subtle bg-surface-2 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold text-red-400">$28,910.00</p>
                  <p className="text-xs text-muted">Monthly Revenue</p>
                </div>
              </div>
              <div className="relative mt-4 flex h-20 items-end gap-2">
                {BAR_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${
                      i === 4
                        ? "bg-gradient-to-t from-accent to-accent-2"
                        : "bg-white/10"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
                <span className="absolute -top-2 right-6 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  Under Review
                </span>
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Scaling triggers sudden reviews
            </h3>
            <p className="mt-2 text-sm text-muted">
              Rapid growth can trip automated risk flags, leading to instant
              account reviews and freezes — even on completely legitimate
              sales.
            </p>
          </motion.div>

          {/* card 2: hold */}
          <motion.div
            variants={revealItem}
            className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-surface p-6"
          >
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-500/10 to-transparent" />
            <div className="relative mb-5 flex items-center justify-between rounded-xl border border-border-subtle bg-surface-2 p-4">
              <div>
                <p className="text-xl font-bold text-red-400">$547.39</p>
                <p className="text-xs text-muted">Pending Payout</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                <Lock className="h-4 w-4" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Funds held without warning
            </h3>
            <p className="mt-2 text-sm text-muted">
              Traditional processors can hold your funds for weeks or months
              at a time, often with little to no explanation.
            </p>
          </motion.div>

          {/* card 3: wide, disputes */}
          <motion.div
            variants={revealItem}
            className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-surface p-6 md:col-span-2"
          >
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-500/10 to-transparent" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-sm">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  Disputes often favor the buyer
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Chargebacks and refunds are frequently approved
                  automatically, leaving you to absorb the loss — even for
                  legitimate sales.
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border-subtle bg-surface-2 p-4">
                <div>
                  <p className="text-xl font-bold text-red-400">$245.27</p>
                  <p className="text-xs text-muted">Order #4721</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  <RotateCcw className="h-3 w-3" />
                  Refunded
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  );
}
