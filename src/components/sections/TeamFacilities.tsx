import React from "react";
import { Card, Container, Section } from "../index";
import ScrollAnimatedCard from "../ScrollAnimatedCard";

interface Facility {
  image: string;
  title: string;
  description: string;
}

interface TeamFacilitiesProps {
  title?: string;
  subtitle?: string;
  facilities: Facility[];
  columns?: 2 | 3 | 4;
}

const TeamFacilities: React.FC<TeamFacilitiesProps> = ({
  title,
  subtitle,
  facilities,
  columns = 3,
}) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section background="white" size="lg" id="team">
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {facilities.map((facility, index) => (
            <ScrollAnimatedCard
              key={index}
              animationType="slideUp"
              delay={index * 0.1}
            >
              <Card
                hoverable
                image={facility.image}
                title={facility.title}
                description={facility.description}
              />
            </ScrollAnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TeamFacilities;
