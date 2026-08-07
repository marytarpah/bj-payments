import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";
import { COMPANY, WHATSAPP_LINK } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How B&J Payments (Ben & Jerome Limited) collects, uses, and protects your personal data, in line with Hong Kong's Personal Data (Privacy) Ordinance.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="August 2026">
      <LegalSection title="Introduction">
        <p>
          This Privacy Policy explains how {COMPANY.legalName}, trading as{" "}
          {COMPANY.tradingAs} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), collects, uses,
          discloses, and protects personal data when you visit this website or
          contact us. We are based in {COMPANY.registrationLocation} and handle
          personal data in accordance with the Personal Data (Privacy) Ordinance
          (Cap. 486) of Hong Kong (&ldquo;PDPO&rdquo;).
        </p>
      </LegalSection>

      <LegalSection title="What Personal Data We Collect">
        <LegalList
          items={[
            "Contact and identification data you provide to us, such as your name, and any business details, jurisdiction preference, or budget you share via WhatsApp or the on-site configurator.",
            "The content of messages you send us, for example via WhatsApp.",
            "Technical and usage data collected automatically when you browse this website, such as IP address, browser and device type, pages viewed, and referral source.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How We Use Your Data">
        <LegalList
          items={[
            "To respond to your inquiries and provide the consultation or quote you requested.",
            "To prepare and deliver the company formation and payment infrastructure setup services you engage us for.",
            "To operate, maintain, and improve this website.",
            "To measure and optimize our advertising campaigns on platforms such as Meta (Facebook/Instagram) and TikTok, including through retargeting.",
            "To comply with applicable legal and regulatory obligations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Data Protection Principles">
        <p>
          We handle personal data in line with the six Data Protection Principles
          of the PDPO: data is collected fairly and lawfully for a specified
          purpose, used only consistently with that purpose (unless further
          consent is obtained), kept accurate, retained no longer than necessary,
          kept secure, and processed transparently.
        </p>
      </LegalSection>

      <LegalSection title="How We Share Your Data">
        <LegalList
          items={[
            <>
              <strong className="text-foreground/90">WhatsApp / Meta Platforms Ireland Ltd.</strong>{" "}
              — as our messaging provider. Messages sent via WhatsApp are also
              subject to WhatsApp&apos;s own privacy policy.
            </>,
            <>
              <strong className="text-foreground/90">Banks, PayPal, and payment providers</strong>{" "}
              — only the information necessary to process your application, and
              only once you engage our services.
            </>,
            <>
              <strong className="text-foreground/90">Advertising partners</strong> (Meta
              Platforms Ireland Ltd., TikTok Information Technologies UK Ltd.) —
              where advertising or tracking tools such as the Meta Pixel or TikTok
              Pixel are used on this site, to measure ad performance and show
              relevant ads. These partners process data under their own privacy
              policies.
            </>,
          ]}
        />
        <p>We do not sell your personal data to third parties.</p>
      </LegalSection>

      <LegalSection title="International Data Transfers">
        <p>
          Because we use international communication and advertising tools, your
          data may be transferred to and processed in jurisdictions outside Hong
          Kong (for example, the United States, the European Economic Area, or
          Singapore) that may have different data protection standards than Hong
          Kong. We take reasonable steps to ensure your data remains protected
          wherever it is processed.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes described in this policy, or as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Cookies & Tracking Technologies">
        <p>
          This website may use cookies and similar technologies for essential
          site functionality and, where enabled, for analytics and advertising
          purposes (including the Meta Pixel and TikTok Pixel). Continued use of
          this website indicates your acceptance of this use; you can control or
          disable cookies at any time through your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights">
        <p>
          Under the PDPO, you have the right to request access to, and correction
          of, the personal data we hold about you. To exercise these rights,
          please contact us via WhatsApp.
        </p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          Our services are intended for individuals aged 18 and over and are not
          directed at children.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          For any questions about this Privacy Policy or your personal data,
          please contact us via{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            WhatsApp
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
