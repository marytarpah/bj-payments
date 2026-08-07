import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { COMPANY, WHATSAPP_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice and company information for B&J Payments, operated by Ben & Jerome Limited, Hong Kong SAR.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage eyebrow="Legal" title="Legal Notice" updated="August 2026">
      <LegalSection title="Company Information">
        <p>This website is operated by:</p>
        <div className="rounded-2xl border border-border-subtle bg-surface p-5">
          <dl className="space-y-2">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="w-40 shrink-0 text-foreground/80">Legal entity name</dt>
              <dd>
                {COMPANY.legalName} (trading as &ldquo;{COMPANY.tradingAs}&rdquo;)
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="w-40 shrink-0 text-foreground/80">Registered in</dt>
              <dd>{COMPANY.registrationLocation}</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="w-40 shrink-0 text-foreground/80">Legal form</dt>
              <dd>{COMPANY.legalForm}</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="w-40 shrink-0 text-foreground/80">Business Registration No.</dt>
              <dd>{COMPANY.registrationNumber}</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
              <dt className="w-40 shrink-0 text-foreground/80">Registered office</dt>
              <dd>{COMPANY.registeredOffice}</dd>
            </div>
          </dl>
        </div>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For all inquiries, including legal, privacy, and support requests, please
          contact us via WhatsApp:{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            +1 (772) 722-8152
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Nature of Our Services">
        <p>
          {COMPANY.legalName} operates {COMPANY.tradingAs} as a business facilitation
          and consulting service. We assist clients with offshore company formation
          and with accessing banking and payment infrastructure (including business
          bank accounts, PayPal Business accounts, and payment processors) offered by
          independent third-party institutions.
        </p>
        <p>
          {COMPANY.tradingAs} is not a licensed bank, financial institution, payment
          institution, or money service operator, and does not itself hold, transmit,
          or process client funds. All banking and payment-processing services
          referenced on this website are provided directly by independent third-party
          institutions. Account approval, onboarding, and account terms are determined
          solely by those institutions in accordance with their own policies and
          applicable law.
        </p>
        <p>
          Nothing on this website constitutes legal, tax, or financial advice. Clients
          should seek independent professional advice where appropriate.
        </p>
      </LegalSection>

      <LegalSection title="Liability for Content">
        <p>
          We take reasonable care to keep the information on this website accurate
          and up to date, but we do not guarantee the completeness, accuracy, or
          timeliness of the content. Timelines, pricing examples, and estimates shown
          on this website are indicative only and may vary depending on your specific
          circumstances. This website may contain links to third-party websites; we
          are not responsible for the content or practices of those external sites.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          This legal notice and the use of this website are governed by the laws of
          the Hong Kong Special Administrative Region.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
