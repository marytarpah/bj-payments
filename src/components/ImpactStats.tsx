"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="relative border-y border-border-subtle bg-surface/40 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 divide-y divide-border-subtle sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-2 py-4 text-center sm:py-0">
                <p className="text-gradient text-2xl font-bold tracking-tight sm:text-4xl">
                  <Counter to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-xs text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
