"use client";

import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { Building2, ShieldCheck, CreditCard } from "lucide-react";
import styles from "./Hero.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

type BeamState = "p1" | "splash" | "p2" | "idle";

const DURATIONS: Record<BeamState, number> = {
  p1: 800,
  splash: 800,
  p2: 800,
  idle: 1000,
};

export function Hero() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const beamGlowRef = useRef<SVGPathElement>(null);
  const beamCoreRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    let state: BeamState = "p1";
    let lastStateChange = performance.now();

    const updatePath = () => {
      const pipeline = pipelineRef.current;
      const nodeStack = nodeStackRef.current;
      const nodeX = nodeXRef.current;
      const nodeShield = nodeShieldRef.current;
      if (!pipeline || !nodeStack || !nodeX || !nodeShield) return;

      const pRect = pipeline.getBoundingClientRect();
      const sRect = nodeStack.getBoundingClientRect();
      const xRect = nodeX.getBoundingClientRect();
      const shRect = nodeShield.getBoundingClientRect();

      const startX = sRect.left + sRect.width / 2 - pRect.left;
      const startY = sRect.top + sRect.height / 2 - pRect.top;
      const midX = xRect.left + xRect.width / 2 - pRect.left;
      const midY = xRect.top + xRect.height / 2 - pRect.top;
      const endX = shRect.left + shRect.width / 2 - pRect.left;
      const endY = shRect.top + shRect.height / 2 - pRect.top;

      const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;
      beamGlowRef.current?.setAttribute("d", d);
      beamCoreRef.current?.setAttribute("d", d);
    };

    const setGradientWindow = (percentage: number) => {
      const gradient = gradientRef.current;
      if (!gradient) return;
      const halfWidth = 5;
      const center = percentage * 100;
      gradient.setAttribute("x1", `${center - halfWidth}%`);
      gradient.setAttribute("x2", `${center + halfWidth}%`);
      gradient.setAttribute("y1", "0%");
      gradient.setAttribute("y2", "0%");
    };

    const setActive = (el: HTMLDivElement | null, active: boolean) => {
      if (!el) return;
      el.classList.toggle(styles.active, active);
    };

    const loop = (now: number) => {
      const elapsed = now - lastStateChange;

      if (state === "p1") {
        const t = Math.min(elapsed / DURATIONS.p1, 1);
        const percentage = t * 0.5;
        setGradientWindow(percentage);
        setActive(nodeStackRef.current, percentage < 0.4);
        if (t >= 1) {
          state = "splash";
          lastStateChange = now;
          if (beamGlowRef.current) beamGlowRef.current.style.opacity = "0";
          if (beamCoreRef.current) beamCoreRef.current.style.opacity = "0";
          splashRef.current?.classList.add(styles.animate);
        }
      } else if (state === "splash") {
        if (elapsed >= DURATIONS.splash) {
          state = "p2";
          lastStateChange = now;
          splashRef.current?.classList.remove(styles.animate);
          if (beamGlowRef.current) beamGlowRef.current.style.opacity = "";
          if (beamCoreRef.current) beamCoreRef.current.style.opacity = "";
        }
      } else if (state === "p2") {
        const t = Math.min(elapsed / DURATIONS.p2, 1);
        const percentage = 0.5 + t * 0.5;
        setGradientWindow(percentage);
        setActive(nodeShieldRef.current, percentage > 0.6);
        if (t >= 1) {
          setActive(nodeShieldRef.current, false);
          state = "idle";
          lastStateChange = now;
        }
      } else if (state === "idle") {
        if (elapsed >= DURATIONS.idle) {
          state = "p1";
          lastStateChange = now;
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    updatePath();
    rafId = requestAnimationFrame(loop);
    window.addEventListener("resize", updatePath);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  return (
    <section id="top" className={`${styles["hero-wrapper"]} ${inter.className}`}>
      <div className={`${styles["hero-arc"]} animate-arc-drift`} />
      <div className={styles["hero-grid"]} />
      <div className={styles["hero-card"]}>
        <div className={styles["icon-pipeline"]} ref={pipelineRef}>
          <svg className={styles["beam-svg"]}>
            <defs>
              <filter id="bj-beam-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="blur" in2="SourceGraphic" operator="over" />
              </filter>
              <linearGradient
                id="bj-beam-gradient"
                ref={gradientRef}
                gradientUnits="userSpaceOnUse"
                x1="-5%"
                y1="0%"
                x2="5%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#b04090" stopOpacity="0" />
                <stop offset="20%" stopColor="#b04090" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                <stop offset="80%" stopColor="#c8a0e0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c8a0e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              ref={beamGlowRef}
              className={styles["beam-glow"]}
              stroke="url(#bj-beam-gradient)"
              strokeWidth={2}
              fill="none"
              filter="url(#bj-beam-glow)"
            />
            <path
              ref={beamCoreRef}
              className={styles["beam-core"]}
              stroke="url(#bj-beam-gradient)"
              strokeWidth={0.8}
              fill="none"
            />
          </svg>

          <div
            ref={nodeStackRef}
            className={`${styles["icon-node"]} ${styles["node-light-right"]}`}
          >
            <Building2 size={20} strokeWidth={1.5} />
          </div>

          <div className={styles["pipeline-line"]} />

          <div className={styles["center-wrapper"]}>
            <div ref={splashRef} className={styles.splash} />
            <div ref={nodeXRef} className={styles["icon-node-center"]}>
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
          </div>

          <div className={`${styles["pipeline-line"]} ${styles.right}`} />

          <div
            ref={nodeShieldRef}
            className={`${styles["icon-node"]} ${styles["node-light-left"]}`}
          >
            <CreditCard size={20} strokeWidth={1.5} />
          </div>
        </div>

        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-heading"]}>
            The privacy-first setup
            <strong>for e-commerce &amp; high-risk brands</strong>
          </h1>
          <p className={styles["hero-sub"]}>
            Nominee director &amp; shareholder structure keeps your name off
            the public record,
            <br />
            while high-risk-friendly payment providers keep your store
            running — without the Shopify Payments holds.
          </p>

          <div className={styles["trust-badges"]}>
            <span className={styles["trust-badge"]}>🔒 Bank &amp; PayPal included</span>
            <span className={styles["trust-badge"]}>✅ Personal account manager</span>
            <span className={styles["trust-badge"]}>🌍 Hong Kong, US, Panama &amp; UK</span>
            <span className={styles["trust-badge"]}>⚡ Fast, hassle-free setup</span>
          </div>

          <div className={styles["cta-row"]}>
            <a href="#configurator" className={styles["btn-cta"]}>
              Configure Your Setup Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
