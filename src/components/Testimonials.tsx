"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  name: string;
  flag: string;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "David",
    flag: "🇩🇪",
    text: "Hey Leong, just wanted to thank you properly for all the support you gave me in setting up my HK company. From start to finish, the process was way smoother than I expected — and that's 100% thanks to you. You were super clear, always available to answer my questions, and really made everything feel straightforward.",
  },
  {
    name: "Anis",
    flag: "🇬🇧",
    text: "The perfect partner for all e-commerce solutions. Especially when it comes to Hong Kong setups, B&J offers the best and most affordable service in the area. A big thank you; I can only recommend them to everyone and would gladly use them again!",
  },
  {
    name: "Samuel",
    flag: "🇦🇹",
    text: "Working with B&J Limited has been absolutely amazing! They handled our HK setup professionally from start to finish.",
  },
  {
    name: "Felix",
    flag: "🇩🇪",
    text: "I had an amazing experience with B&J Limited – their service is absolutely outstanding. They helped me set up a Hong Kong company (HKA), open a bank account, and navigate the whole process with impressive speed and efficiency. Compared to other providers, their pricing is unbeatable – it's honestly a no-brainer.",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-4 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Testimonials
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our clients come first
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={trackRef}
          className="scrollbar-none mx-auto mt-8 flex max-w-[100vw] snap-x snap-mandatory cursor-grab gap-4 overflow-x-auto px-5 pb-4 active:cursor-grabbing sm:mt-10 sm:snap-none sm:gap-6 sm:px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="card-glow flex w-[82vw] shrink-0 snap-center flex-col rounded-2xl border border-border-subtle bg-surface p-5 sm:w-[300px] sm:snap-align-none sm:p-6"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {t.name} {t.flag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
