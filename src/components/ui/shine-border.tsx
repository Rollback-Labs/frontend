
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  size?: number;
  duration?: number;
  delay?: number;
  borderWidth?: number;
  borderRadius?: number;
  colors?: string[];
  style?: CSSProperties;
  hoverAnimation?: boolean;
  offset?: number;
}

export const ShineBorder = ({
  children,
  className,
  containerClassName,
  borderClassName,
  size = 200,
  duration = 3,
  delay = 0,
  borderWidth = 2,
  borderRadius = 8,
  colors = ["hsl(var(--primary))", "#fff", "hsl(var(--primary))"],
  style,
  hoverAnimation = true,
  offset = -60,
}: ShineBorderProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <div
      className={cn("relative", containerClassName)}
      style={{ ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 [mask-image:linear-gradient(white,white)] [mask-clip:padding-box] [mask-composite:exclude]",
          borderClassName
        )}
        style={{
          borderRadius: borderRadius,
          padding: borderWidth,
        }}
      >
        <div
          className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] [background:conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"
          style={{
            animation: hoverAnimation
              ? isHovered
                ? `spin ${duration * 0.5}s linear infinite`
                : `spin ${duration}s linear infinite ${delay}s`
              : isInView
              ? `spin ${duration}s linear infinite ${delay}s`
              : "none",
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s",
            background: `conic-gradient(from 0deg, transparent 0 340deg, ${
              colors[1] || "white"
            } 360deg)`,
          }}
        />
      </div>
      <div
        className={cn("relative z-10", className)}
        style={{
          borderRadius: borderRadius ? borderRadius - borderWidth : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
};
