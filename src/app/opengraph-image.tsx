import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 900px 600px at 50% 0%, #6a1f56 0%, #2a0e26 45%, #030304 80%)",
          color: "#f5f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: -1,
            marginBottom: 28,
            display: "flex",
          }}
        >
          B&amp;J Payments
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -2,
            textAlign: "center",
            maxWidth: 940,
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          The privacy-first setup for e-commerce &amp; high-risk brands
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "rgba(245,244,248,0.6)",
            display: "flex",
          }}
        >
          Company formation · Bank &amp; PayPal · Payment infrastructure
        </div>
      </div>
    ),
    { ...size }
  );
}
