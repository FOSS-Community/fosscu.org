// src/components/ui/background-gradient.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundGradientProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[22px] opacity-0 group-hover/card:opacity-100 transition duration-500" />
      <div className="relative">{children}</div>
    </div>
  );
};