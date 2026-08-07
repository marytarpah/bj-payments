"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { COMPANY, SITE_NAME, WHATSAPP_LINK } from "@/lib/config";

const LINK_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Hong Kong", href: "/#services" },
      { label: "US LLC", href: "/#services" },
      { label: "Panama", href: "/#services" },
      { label: "United Kingdom", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Process", href: "/#process" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "WhatsApp Contact", href: WHATSAPP_LINK },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Legal Notice", href: "/legal-notice" },
    ],
  },
];

export function Footer() {
  return (
    <div className="px-5 pb-10 sm:px-6 sm:pb-14">
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="liquid-glass font-liquid mx-auto w-full max-w-6xl rounded-3xl p-6 text-white/70 md:p-10"
      >
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <a href="/#top" className="flex items-center">
              <Image
                src="/logo-full.png"
                alt="B&J Payments"
                width={987}
                height={286}
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              B&amp;J Payments handles your company formation abroad
              including bank, PayPal, and payment infrastructure – fast,
              hassle-free, all from one place.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Contact
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {LINK_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-6 text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} {SITE_NAME} ({COMPANY.legalName}) — not affiliated
            with PayPal, Payoneer, or any other providers mentioned.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
