import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background?: "white" | "light" | "dark" | "gradient" | "hero";
  size?: "sm" | "md" | "lg";
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  background = "white",
  size = "md",
  className = "",
  id,
  ...props
}) => {
  const backgroundClasses = {
    white: "bg-transparent dark:bg-gray-950",
    light: "bg-gradient-sunlit dark:bg-gray-900",
    dark: "bg-gray-900 dark:bg-gray-950 text-white",
    gradient: "bg-gradient-light dark:bg-gray-900/50",
    hero: "bg-gradient-hero text-white",
  };

  const sizeClasses = {
    sm: "py-8 md:py-12 px-4 md:px-8",
    md: "py-16 md:py-24 px-4 md:px-8",
    lg: "py-20 md:py-32 px-4 md:px-8",
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
