import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center sm:py-40">
        <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
          404
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
          The page you&apos;re looking for may have been moved or never
          existed. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_-8px_var(--accent)] transition-transform duration-300 hover:scale-[1.03]"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
