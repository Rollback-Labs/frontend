
import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
  children: React.ReactNode;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  speed = 40,
  children,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--duration:40s]",
        className
      )}
      style={{ ["--duration" as any]: `${speed}s` }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
};
