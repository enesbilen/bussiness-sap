import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "primary" | "secondary" | "elevated";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "lg",
      background = "primary",
      children,
      ...props
    },
    ref
  ) => {
    const spacings = {
      none: "py-0",
      sm: "py-8 sm:py-12",
      md: "py-10 sm:py-16",
      lg: "py-12 sm:py-20",
      xl: "py-16 sm:py-24",
    };

    const backgrounds = {
      primary: "bg-[#0a0a0f]",
      secondary: "bg-[#12121a]",
      elevated: "bg-[#16161f]",
    };

    return (
      <section
        ref={ref}
        className={cn(spacings[spacing], backgrounds[background], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
