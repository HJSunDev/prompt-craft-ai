"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-transparent transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_0%,var(--indigo-300)_15%,var(--purple-400)_25%,var(--violet-200)_35%,var(--blue-400)_50%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:400%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[20px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[20px] opacity-100 will-change-transform
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,var(--transparent)_80%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};