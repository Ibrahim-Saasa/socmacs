import React from "react";
import { Button, Container } from "../index";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  backgroundImage?: string;
  backgroundGradient?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText = "Get Started",

  backgroundImage,
  backgroundGradient = true,
}) => {
  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
        backgroundGradient ? "bg-gradient-hero" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Overlay for better text readability - premium dark overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      )}

      {/* Content */}
      <Container className="relative z-10 text-center py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up tracking-tight leading-tight drop-shadow-lg">
          {headline}
        </h1>
        <p
          className="text-lg md:text-2xl lg:text-3xl text-gray-50 mb-10 max-w-3xl mx-auto animate-slide-up font-light tracking-wide drop-shadow-md"
          style={{ animationDelay: "0.2s" }}
        >
          {subheadline}
        </p>
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="secondary" size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
