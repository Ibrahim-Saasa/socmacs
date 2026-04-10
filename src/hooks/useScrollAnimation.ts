import { useEffect, useRef, useState } from "react";

export interface ScrollAnimationOptions {
  threshold?: number;
  margin?: string;
  once?: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param options - Configuration options for animation behavior
 * @returns ref to attach to the element and isVisible state
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    margin = "0px 0px -50px 0px",
    once = true,
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: margin,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, margin, once]);

  return { elementRef, isVisible };
};
