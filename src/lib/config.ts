export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bjpayments.com";

export const WHATSAPP_BASE_URL = "https://wa.me/17727228152";
export const WHATSAPP_MESSAGE =
  "Hi B&J Payments, I'm interested in company formation incl. payment infrastructure.";

export function buildWhatsAppLink(message: string = WHATSAPP_MESSAGE) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink();

export const SITE_NAME = "B&J Payments";

export const COMPANY = {
  legalName: "Ben & Jerome Limited",
  tradingAs: "B&J Payments",
  registrationLocation: "Hong Kong SAR",
  legalForm: "Private Limited Company (Companies Ordinance, Cap. 622)",
  registeredOffice:
    "Unit 909, Prosperity Millennia Plaza, 663 King's Road, Quarry Bay, Hong Kong",
  registrationNumber: "7942918",
};
