import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import {
  StripeIcon,
  WiseIcon,
  ShopifyIcon,
  PayPalIcon,
} from "@/components/icons/BrandIcons";
import type { ComponentType, SVGProps } from "react";

type Partner = {
  name: string;
  icon?: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
};

const PARTNERS: Partner[] = [
  { name: "Stripe", icon: StripeIcon },
  { name: "Airwallex" },
  { name: "Wise", icon: WiseIcon },
  { name: "Shopify", icon: ShopifyIcon },
  { name: "PayPal", icon: PayPalIcon },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-border-subtle bg-surface/40 py-6 sm:py-8">
      <Reveal>
        <p className="mb-6 px-5 text-center text-xs text-muted sm:mb-8 sm:text-sm">
          Connected to the world&apos;s leading payment and commerce platforms
        </p>
      </Reveal>
      <Marquee
        items={PARTNERS.map((partner) => (
          <span
            key={partner.name}
            className="flex items-center gap-2.5 text-lg font-medium tracking-tight text-muted/70 transition-colors hover:text-foreground"
          >
            {partner.icon && <partner.icon size={20} />}
            {partner.name}
          </span>
        ))}
      />
    </section>
  );
}
