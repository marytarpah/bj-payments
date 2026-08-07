export type ServicePackage = {
  name: "Basic" | "Premium";
  features: string[];
};

export type Jurisdiction = {
  id: string;
  flag: string;
  country: string;
  entity: string;
  tagline: string;
  highlight?: string;
  packages: ServicePackage[];
};

export const jurisdictions: Jurisdiction[] = [
  {
    id: "hong-kong",
    flag: "🇭🇰",
    country: "Hong Kong",
    entity: "Hong Kong Limited",
    tagline: "The standard for global e-commerce and payment setups.",
    highlight: "Most Popular",
    packages: [
      {
        name: "Basic",
        features: [
          "Hong Kong Limited company formation",
          "Bank account opening",
          "PayPal Business account",
          "Personal account manager",
        ],
      },
      {
        name: "Premium",
        features: [
          "Everything in Basic",
          "Payment provider included (card payments/checkout integration)",
          "Nominee service (director/shareholder)",
          "Dedicated PayPal manager",
          "Priority support & faster processing",
        ],
      },
    ],
  },
  {
    id: "us-llc",
    flag: "🇺🇸",
    country: "US LLC",
    entity: "US LLC",
    tagline: "International credibility with US bank connectivity.",
    packages: [
      {
        name: "Basic",
        features: [
          "US LLC formation (state registration, EIN)",
          "Bank account opening",
          "PayPal Business account",
          "Personal account manager",
        ],
      },
      {
        name: "Premium",
        features: [
          "Everything in Basic",
          "Nominee service (registered agent / manager structure)",
          "Dedicated PayPal manager",
          "Priority support & faster processing",
        ],
      },
    ],
  },
  {
    id: "panama",
    flag: "🇵🇦",
    country: "Panama",
    entity: "Panama Corporation",
    tagline: "A discreet structure with strong asset protection.",
    packages: [
      {
        name: "Basic",
        features: [
          "Panama Corporation formation",
          "Bank account opening",
          "PayPal Business account",
          "Personal account manager",
        ],
      },
      {
        name: "Premium",
        features: [
          "Everything in Basic",
          "Nominee service (director/shareholder)",
          "Dedicated PayPal manager",
          "Priority support & faster processing",
        ],
      },
    ],
  },
  {
    id: "united-kingdom",
    flag: "🇬🇧",
    country: "United Kingdom",
    entity: "UK Ltd",
    tagline: "Established reputation in the European market.",
    packages: [
      {
        name: "Basic",
        features: [
          "UK Ltd company formation",
          "Bank account opening",
          "PayPal Business account",
          "Personal account manager",
        ],
      },
      {
        name: "Premium",
        features: [
          "Everything in Basic",
          "Nominee service (director/shareholder)",
          "Dedicated PayPal manager",
          "Priority support & faster processing",
        ],
      },
    ],
  },
];

export const includedInEvery = [
  "Bank account",
  "PayPal account",
  "Personal account manager",
];

export const hongKongOnly = ["Payment provider (payment processing/checkout)"];

export const addOns = ["Nominee service", "Dedicated PayPal manager"];
