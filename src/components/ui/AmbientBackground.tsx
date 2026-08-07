export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute right-[-10%] top-[45%] h-[380px] w-[380px] rounded-full bg-accent-2/[0.06] blur-[150px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}
