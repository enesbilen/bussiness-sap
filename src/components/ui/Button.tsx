import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      asChild,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-copper-600 text-white hover:bg-copper-700 active:bg-copper-800 shadow-md hover:shadow-lg",
      secondary:
        "bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-950 shadow-md hover:shadow-lg",
      outline:
        "border-2 border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg",
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      isLoading && "cursor-wait",
      className
    );

    if (asChild && href) {
      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Yükleniyor...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

