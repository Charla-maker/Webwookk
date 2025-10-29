import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  fullWidth = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
};
