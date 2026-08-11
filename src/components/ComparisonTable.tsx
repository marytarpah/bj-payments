import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ROWS = [
  {
    feature: "Account Stability",
    us: "Backed by a proper company structure — no random bans",
    them: "Bans and reviews with little to no warning",
  },
  {
    feature: "Fund Holds",
    us: "Transparent, predictable payouts",
    them: "Funds held for weeks or months, often unexplained",
  },
  {
    feature: "Scaling Room",
    us: "Built to grow with your volume",
    them: "Growth spikes can trigger automatic limits",
  },
  {
    feature: "Payment Access",
    us: "Bank, PayPal & payment provider included from day one",
    them: "Personal accounts get limited fast",
  },
  {
    feature: "Privacy",
    us: "Nominee director/shareholder keeps your name off the public record",
    them: "Your name is tied directly to the business",
  },
  {
    feature: "Support",
    us: "One personal account manager, not a ticket queue",
    them: "Generic support tickets, long wait times",
  },
];

export function ComparisonTable() {
  return (
    <section className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Why It&apos;s Different
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A B&amp;J Setup vs. a Standard Processor
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Standard payment processors are built for small, predictable
            volume. A proper company and payment setup is built for
            businesses that actually scale.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-border-subtle text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
              <div className="px-4 py-4 sm:px-6" />
              <div className="border-l border-border-subtle px-4 py-4 text-accent sm:px-6">
                B&amp;J Setup
              </div>
              <div className="border-l border-border-subtle px-4 py-4 sm:px-6">
                Standard Processor
              </div>
            </div>
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_1.4fr_1.4fr] text-xs sm:text-sm ${
                  i !== ROWS.length - 1 ? "border-b border-border-subtle" : ""
                }`}
              >
                <div className="px-4 py-4 font-medium text-foreground sm:px-6">
                  {row.feature}
                </div>
                <div className="flex items-start gap-2 border-l border-border-subtle px-4 py-4 text-foreground/90 sm:px-6">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span>{row.us}</span>
                </div>
                <div className="flex items-start gap-2 border-l border-border-subtle px-4 py-4 text-muted sm:px-6">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400/70" />
                  <span>{row.them}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
