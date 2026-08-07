import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  durationClassName?: string;
};

export function Marquee({ items, className, reverse }: MarqueeProps) {
  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-14 animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {track.map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
