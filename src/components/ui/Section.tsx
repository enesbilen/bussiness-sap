import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "slate" | "white";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = "lg",
      background = "default",
      children,
      ...props
    },
    ref
  ) => {
    const spacings = {
      none: "py-0",
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-24 lg:py-28",
      xl: "py-24 sm:py-32 lg:py-40",
    };

    const backgrounds = {
      default: "bg-slate-50",
      slate: "bg-slate-100",
      white: "bg-white",
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

