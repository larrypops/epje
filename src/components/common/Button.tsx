"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-brand-blue/20",
      secondary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-brand-orange/20",
      outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 shadow-transparent",
      ghost: "text-brand-anthracite hover:bg-brand-lightgray/50 shadow-transparent"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg font-medium",
      xl: "px-10 py-5 text-xl font-semibold"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 shadow-lg",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export const MotionButton = motion.create(Button);

export default Button;
