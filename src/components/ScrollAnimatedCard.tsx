import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ScrollAnimatedCardProps {
  children: React.ReactNode;
  animationType?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  className?: string;
  delay?: number;
}

const ScrollAnimatedCard: React.FC<ScrollAnimatedCardProps> = ({
  children,
  animationType = "slideUp",
  className = "",
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    margin: "0px 0px -50px 0px",
  });

  const animationClasses = {
    fade: "scroll-fade-in",
    slideUp: "scroll-slide-up",
    slideLeft: "scroll-slide-left",
    slideRight: "scroll-slide-right",
    scale: "scroll-scale-in",
  };

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animationClasses[animationType] : "opacity-0"} ${className}`}
      style={isVisible ? { animationDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedCard;
