"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { JurisdictionCard } from "@/components/JurisdictionCard";
import { jurisdictions } from "@/lib/services";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Service Overview
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Company Setup Services
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Company formation abroad including payment infrastructure – for
            clients who need a fast, hassle-free international company
            structure with bank and PayPal connectivity.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {jurisdictions.map((jurisdiction) => (
            <motion.div key={jurisdiction.id} variants={revealItem}>
              <JurisdictionCard jurisdiction={jurisdiction} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
