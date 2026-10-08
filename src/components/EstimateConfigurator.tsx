"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Zap, Clock3, Wallet, PenLine, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { jurisdictions } from "@/lib/services";
import { buildWhatsAppLink } from "@/lib/config";

type Tier = "Basic" | "Premium";
type Priority = "standard" | "express";

const TIERS: { value: Tier; label: string; description: string }[] = [
  {
    value: "Basic",
    label: "Basic",
    description: "Company formation, bank account, PayPal & account manager.",
  },
  {
    value: "Premium",
    label: "Premium",
    description: "Plus nominee service, dedicated PayPal manager & priority processing.",
  },
];

const ADDONS = [
  { id: "nominee", label: "Nominee Service (Director/Shareholder)" },
  { id: "paypalManager", label: "Dedicated PayPal Manager" },
] as const;

type AddonId = (typeof ADDONS)[number]["id"];

const BUDGET_MIN = 1000;
const BUDGET_MAX = 10000;
const BUDGET_STEP = 500;

const UNSURE_ID = "unsure";

// Approximate ranges per jurisdiction — actual quotes vary by add-ons and
// individual circumstances, confirmed 1:1 on WhatsApp.
const JURISDICTION_RANGES: Record<string, [number, number]> = {
  "hong-kong": [3500, 5000],
  "us-llc": [1500, 2500],
  panama: [2000, 3000],
  "united-kingdom": [2000, 3500],
};

// Blended fallback while the visitor hasn't picked a jurisdiction yet.
const UNSURE_RANGE: [number, number] = [1500, 5000];

// Hong Kong runs higher once a nominee director/shareholder is involved:
// standard processing stays in the lower part, express opens the full range.
const HONG_KONG_NOMINEE_STANDARD: [number, number] = [4200, 5200];
const HONG_KONG_NOMINEE_EXPRESS: [number, number] = [4200, 6200];

// US LLC uses fixed ranges per nominee/priority instead of the tier formula.
const US_RANGES: Record<"plain" | "nominee", Record<Priority, [number, number]>> = {
  plain: { standard: [1500, 2000], express: [1500, 2500] },
  nominee: { standard: [4200, 5000], express: [5000, 6200] },
};

function estimateRange(
  jurisdictionId: string,
  isUnsure: boolean,
  tier: Tier,
  addonsCount: number,
  priority: Priority,
  hasNominee: boolean
): [number, number] {
  if (jurisdictionId === "us-llc") {
    return US_RANGES[hasNominee ? "nominee" : "plain"][priority];
  }

  if (jurisdictionId === "hong-kong" && hasNominee) {
    return priority === "express"
      ? HONG_KONG_NOMINEE_EXPRESS
      : HONG_KONG_NOMINEE_STANDARD;
  }

  const [baseLow, baseHigh] = isUnsure
    ? UNSURE_RANGE
    : JURISDICTION_RANGES[jurisdictionId] ?? UNSURE_RANGE;
  const span = baseHigh - baseLow;

  let low = baseLow;
  let high = baseHigh;

  if (tier === "Basic") {
    // Basic sits in the lower part of the range; standalone add-ons nudge it up.
    high = baseLow + span * 0.6;
    low += addonsCount * span * 0.12;
    high += addonsCount * span * 0.12;
  } else {
    // Premium already bundles both add-ons and sits in the upper part of the range.
    low = baseLow + span * 0.4;
  }

  if (priority === "express") {
    low += span * 0.08;
    high += span * 0.08;
  }

  low = Math.min(low, baseHigh);
  high = Math.min(high, baseHigh);

  return [Math.round(low / 50) * 50, Math.round(high / 50) * 50];
}

export function EstimateConfigurator() {
  const [jurisdictionId, setJurisdictionId] = useState(jurisdictions[0].id);
  const [tier, setTier] = useState<Tier>("Premium");
  const [addons, setAddons] = useState<Record<AddonId, boolean>>({
    nominee: false,
    paypalManager: false,
  });
  const [priority, setPriority] = useState<Priority>("standard");
  const [budget, setBudget] = useState(3000);
  const [situation, setSituation] = useState("");

  const isUnsure = jurisdictionId === UNSURE_ID;
  const jurisdiction = jurisdictions.find((j) => j.id === jurisdictionId);
  const addonsIncluded = tier === "Premium";
  const addonsCount = addonsIncluded
    ? 0
    : (addons.nominee ? 1 : 0) + (addons.paypalManager ? 1 : 0);
  const hasNominee = addonsIncluded || addons.nominee;
  const [rangeLow, rangeHigh] = estimateRange(
    jurisdictionId,
    isUnsure,
    tier,
    addonsCount,
    priority,
    hasNominee
  );

  const message = useMemo(() => {
    const lines = [
      "Hi, I'd like a personalized quote for the following configuration at B&J Payments:",
      isUnsure
        ? "- Country: Not sure yet — please advise"
        : `- Country: ${jurisdiction?.flag} ${jurisdiction?.country}`,
      `- Package: ${tier}`,
    ];
    const selectedAddons = ADDONS.filter(
      (a) => addonsIncluded || addons[a.id]
    ).map((a) => a.label);
    if (selectedAddons.length > 0) {
      lines.push(`- Add-ons: ${selectedAddons.join(", ")}`);
    }
    lines.push(
      `- Priority: ${priority === "express" ? "Express processing" : "Standard processing"}`
    );
    if (isUnsure) {
      lines.push(`- My budget: up to €${budget.toLocaleString("en-US")}`);
    }
    if (situation.trim()) {
      lines.push(`- My situation: ${situation.trim()}`);
    }
    lines.push("Let's discuss what makes the most sense for me.");
    return lines.join("\n");
  }, [isUnsure, jurisdiction, tier, addons, addonsIncluded, priority, budget, situation]);

  const whatsappLink = buildWhatsAppLink(message);

  function toggleAddon(id: AddonId) {
    if (addonsIncluded) return;
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function selectTier(next: Tier) {
    setTier(next);
  }

  return (
    <section id="configurator" className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Configurator
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Put together your own company formation
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Choose country, package and add-ons – we&apos;ll get back to you
            with a personal quote on WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border-subtle lg:grid-cols-2">
            {/* left: form */}
            <div className="divide-y divide-border-subtle bg-surface p-6 lg:p-10">
              {/* jurisdiction */}
              <div className="pb-6 lg:pb-8">
                <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                  Which country would you like to form your company in?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {jurisdictions.map((j) => {
                    const active = j.id === jurisdictionId;
                    return (
                      <button
                        key={j.id}
                        type="button"
                        onClick={() => setJurisdictionId(j.id)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                          active
                            ? "border-accent/60 bg-accent/10 text-foreground"
                            : "border-border-subtle text-muted hover:border-white/15 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                            active ? "border-accent" : "border-white/20"
                          }`}
                        >
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                        </span>
                        <span className="text-base leading-none">{j.flag}</span>
                        {j.country}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setJurisdictionId(UNSURE_ID)}
                    className={`col-span-2 flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                      isUnsure
                        ? "border-accent/60 bg-accent/10 text-foreground"
                        : "border-border-subtle text-muted hover:border-white/15 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                        isUnsure ? "border-accent" : "border-white/20"
                      }`}
                    >
                      {isUnsure && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    </span>
                    <HelpCircle className="h-4 w-4 shrink-0" />
                    I don&apos;t know — please consult me on WhatsApp
                  </button>
                </div>
              </div>

              {/* tier */}
              <div className="py-6 lg:py-8">
                <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                  Which package fits you best?
                </h3>
                <div className="flex flex-col gap-3">
                  {TIERS.map((t) => {
                    const active = t.value === tier;
                    return (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => selectTier(t.value)}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                          active
                            ? "border-accent/60 bg-accent/10"
                            : "border-border-subtle hover:border-white/15"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                            active ? "border-accent" : "border-white/20"
                          }`}
                        >
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {t.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {t.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* addons */}
              <div className="py-6 lg:py-8">
                <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                  Add-ons
                </h3>
                <div className="flex flex-col gap-3">
                  {ADDONS.map((addon) => {
                    const checked = addonsIncluded || addons[addon.id];
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        disabled={addonsIncluded}
                        className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                          checked
                            ? "border-accent/60 bg-accent/10 text-foreground"
                            : "border-border-subtle text-muted hover:border-white/15"
                        } ${addonsIncluded ? "cursor-default" : ""}`}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
                              checked
                                ? "border-accent bg-gradient-to-br from-accent to-accent-2"
                                : "border-white/20"
                            }`}
                          >
                            {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                          </span>
                          <span className="min-w-0">{addon.label}</span>
                        </span>
                        {addonsIncluded && (
                          <span className="ml-8 shrink-0 text-[11px] uppercase tracking-wide text-accent sm:ml-0">
                            included in Premium
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* priority */}
              <div className="py-6 lg:py-8">
                <h3 className="mb-4 text-sm font-semibold text-foreground sm:text-base">
                  How fast do you need this processed?
                </h3>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setPriority("standard")}
                    className={`flex flex-1 items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      priority === "standard"
                        ? "border-accent/60 bg-accent/10 text-foreground"
                        : "border-border-subtle text-muted hover:border-white/15"
                    }`}
                  >
                    <Clock3 className="h-4 w-4 shrink-0" />
                    Standard processing
                  </button>
                  <button
                    type="button"
                    onClick={() => setPriority("express")}
                    className={`flex flex-1 items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      priority === "express"
                        ? "border-accent/60 bg-accent/10 text-foreground"
                        : "border-border-subtle text-muted hover:border-white/15"
                    }`}
                  >
                    <Zap className="h-4 w-4 shrink-0" />
                    Express processing
                  </button>
                </div>
              </div>

              {/* budget — only relevant when the visitor doesn't know which setup they need */}
              {isUnsure && (
                <div className="py-6 lg:py-8">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
                    <Wallet className="h-4 w-4 text-accent" />
                    What&apos;s your budget?
                  </h3>
                  <div className="rounded-xl border border-border-subtle px-4 py-4">
                    <p className="mb-3 text-center text-2xl font-semibold text-accent">
                      up to €{budget.toLocaleString("en-US")}
                    </p>
                    <input
                      type="range"
                      min={BUDGET_MIN}
                      max={BUDGET_MAX}
                      step={BUDGET_STEP}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[var(--accent)]"
                      aria-label="Budget"
                    />
                    <div className="mt-1.5 flex items-center justify-between text-xs text-muted">
                      <span>€{BUDGET_MIN.toLocaleString("en-US")}</span>
                      <span>€{BUDGET_MAX.toLocaleString("en-US")}+</span>
                    </div>
                  </div>
                </div>
              )}

              {/* situation */}
              <div className="pt-6 lg:pt-8">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
                  <PenLine className="h-4 w-4 text-accent" />
                  Tell us about your situation{" "}
                  <span className="font-normal text-muted">(optional)</span>
                </h3>
                <textarea
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  placeholder="e.g. current business, monthly volume, why you're looking for a new setup..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border-subtle bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent/50 focus:outline-none"
                />
              </div>
            </div>

            {/* right: summary */}
            <div className="flex flex-col justify-between bg-surface-2 p-6 lg:p-10">
              <div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  Your request at a glance
                </h3>

                <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4">
                  <p className="text-xs text-muted">Estimated range</p>
                  <p className="text-2xl font-semibold text-accent">
                    €{rangeLow.toLocaleString("en-US")} – €{rangeHigh.toLocaleString("en-US")}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Rough estimate only — actual pricing can vary depending
                    on your personal situation and request. We&apos;ll
                    confirm your exact quote on WhatsApp.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <SummaryCard
                    title="Traditional law firm / agency"
                    description="Often slow processing, bank and payment integration usually not included."
                  />
                  <SummaryCard
                    title="Doing it yourself (DIY)"
                    description="Time-consuming, high risk of paperwork mistakes, no local support on the ground."
                  />
                  <motion.div
                    layout
                    className="rounded-2xl bg-gradient-to-r from-accent to-accent-2 p-6 text-white"
                  >
                    <p className="text-sm font-medium opacity-90">With B&J Payments</p>
                    <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0" />
                        {isUnsure
                          ? "Country: not sure yet"
                          : `${jurisdiction?.flag} ${jurisdiction?.country}`}{" "}
                        · {tier}
                      </li>
                      {(addonsIncluded || addons.nominee) && (
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0" />
                          Nominee Service
                        </li>
                      )}
                      {(addonsIncluded || addons.paypalManager) && (
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0" />
                          Dedicated PayPal Manager
                        </li>
                      )}
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0" />
                        {priority === "express" ? "Express processing" : "Standard processing"}
                      </li>
                      {isUnsure && (
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0" />
                          Budget: up to €{budget.toLocaleString("en-US")}
                        </li>
                      )}
                    </ul>
                    <p className="mt-3 text-xs opacity-80">
                      Bank, PayPal & personal account manager always included.
                    </p>
                  </motion.div>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_28px_-10px_var(--accent)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Request a Personal Quote on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SummaryCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-surface/80 p-6">
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted">{description}</p>
    </div>
  );
}
