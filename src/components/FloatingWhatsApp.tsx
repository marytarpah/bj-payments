"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { WHATSAPP_LINK } from "@/lib/config";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-glow-pulse blur-md" />
      <WhatsAppIcon size={28} className="relative" />
    </motion.a>
  );
}
