import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";
import { COMPANY, WHATSAPP_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for B&J Payments, operated by Ben & Jerome Limited, Hong Kong SAR.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="August 2026">
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By using this website or engaging {COMPANY.tradingAs} ({COMPANY.legalName})
          for our services, you agree to these Terms of Service. If you do not
          agree, please do not use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Description of Services">
        <p>
          {COMPANY.tradingAs} provides facilitation and consulting services for
          offshore company formation, business bank account setup assistance, and
          payment infrastructure setup assistance (including PayPal Business
          accounts and payment processors) across the jurisdictions listed on
          this website. We act as an intermediary connecting clients with
          independent third-party institutions and do not ourselves provide
          banking or payment-processing services.
        </p>
      </LegalSection>

      <LegalSection title="3. No Guarantee of Outcome">
        <p>
          Final decisions on company registration, bank account approval, PayPal
          account approval, or payment-processor approval rest solely with the
          relevant government authority, bank, or payment provider. We do not
          guarantee approval or any specific outcome. Timelines shown on this
          website (such as the setup timeline) are estimates only and may vary
          depending on your jurisdiction and individual circumstances.
        </p>
      </LegalSection>

      <LegalSection title="4. Eligibility & Client Obligations">
        <LegalList
          items={[
            "You must be at least 18 years old to engage our services.",
            "You must provide accurate, complete, and truthful information and documentation.",
            "You must comply with the KYC/AML requirements of your chosen jurisdiction and any relevant third-party institution.",
            "You must use our services only for lawful purposes, and must not use them to facilitate money laundering, fraud, or the sale of illegal goods or services.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Fees & Payment">
        <p>
          Fees are quoted individually based on your chosen jurisdiction, package,
          and add-ons, and are confirmed with you via WhatsApp before work begins.
          Pricing examples shown on this website are indicative and may vary
          depending on your specific circumstances. Payment terms, including any
          refund eligibility, will be communicated to you individually and
          confirmed before services start.
        </p>
      </LegalSection>

      <LegalSection title="6. No Financial, Legal, or Tax Advice">
        <p>
          Information provided on this website and during consultations is
          general in nature. {COMPANY.tradingAs} does not provide licensed
          financial, legal, or tax advisory services. We recommend seeking
          independent professional advice for your specific situation.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by the laws of Hong Kong, our liability
          arising from the services is limited to the fees actually paid by you
          for the specific service giving rise to the claim. We are not liable
          for indirect or consequential loss, or for the acts, omissions,
          decisions, or delays of third-party banks, payment providers, or
          government authorities.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual Property">
        <p>
          All content on this website, including text, graphics, and logos, is
          the property of {COMPANY.legalName} and may not be reproduced without
          our prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          We reserve the right to decline or discontinue providing services at
          any time, including where we suspect fraud, non-compliance with these
          Terms, or unlawful use of our services.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing Law & Jurisdiction">
        <p>
          These Terms are governed by the laws of the Hong Kong Special
          Administrative Region, and the courts of Hong Kong shall have exclusive
          jurisdiction over any dispute arising from them.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated revision date.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          For any questions about these Terms, please contact us via{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            WhatsApp
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
