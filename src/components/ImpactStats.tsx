"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

const STATS = [
  { to: 3000, prefix: "", suffix: "+", label: "Stores Helped" },
  { to: 125, prefix: "€", suffix: "M+", label: "Recovered From Holds & Freezes" },
  { to: 23, prefix: "", suffix: "+", label: "Countries Served" },
  { to: 1300, prefix: "", suffix: "+", label: "Setups Completed" },
];

function Counter({
  to,
  prefix,
  suffix,
}: {
  to: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="liquid-glass font-liquid mx-auto max-w-6xl rounded-3xl p-6 sm:p-10">
        <RevealGroup className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={revealItem}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center sm:p-6"
            >
              <p className="text-gradient text-2xl font-bold tracking-tight sm:text-4xl">
                <Counter to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-white/60 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
