import React from "react";
import { Button, Container, Section } from "../index";
import ScrollAnimatedCard from "../ScrollAnimatedCard";

interface CallToActionProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  background?: "gradient" | "gold" | "violet";
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  ctaText = "Learn More",
  ctaLink = "#",
  secondaryCtaText,
  secondaryCtaLink = "#",
  background = "gradient",
}) => {
  const backgroundClasses = {
    gradient: "bg-gradient-hero",
    gold: "bg-gradient-gold",
    violet: "bg-accent-600",
  };

  const textColor = background === "gold" ? "text-gray-900" : "text-white";

  return (
    <Section
      background="dark"
      size="md"
      className={`${backgroundClasses[background]}`}
      id="cta"
    >
      <Container>
        <ScrollAnimatedCard animationType="fade" delay={0}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
              {title}
            </h2>
            {description && (
              <p className={`text-lg md:text-xl ${textColor} opacity-90 mb-8`}>
                {description}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant={background === "gold" ? "primary" : "secondary"}
                size="lg"
                onClick={() => (window.location.href = ctaLink)}
              >
                {ctaText}
              </Button>
              {secondaryCtaText && (
                <Button
                  variant="outline"
                  size="lg"
                  className={
                    background === "gold"
                      ? "border-gray-900 text-gray-900 hover:bg-black/10"
                      : ""
                  }
                  onClick={() => (window.location.href = secondaryCtaLink)}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
        </ScrollAnimatedCard>
      </Container>
    </Section>
  );
};

export default CallToAction;
