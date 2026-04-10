import React from "react";
import { Card, Container, Section } from "../index";
import ScrollAnimatedCard from "../ScrollAnimatedCard";

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const Features: React.FC<FeaturesProps> = ({
  title,
  features,
  columns = 4,
}) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section background="white" size="lg" id="features">
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {features.map((feature, index) => (
            <ScrollAnimatedCard
              key={index}
              animationType="slideUp"
              delay={index * 0.1}
            >
              <Card hoverable>
                {feature.icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mb-4 mx-auto text-3xl transform transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </ScrollAnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
