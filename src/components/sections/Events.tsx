import React from "react";
import { Card, Container, Section } from "../index";
import ScrollAnimatedCard from "../ScrollAnimatedCard";

interface Event {
  date: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
}

interface EventsProps {
  title?: string;
  events: Event[];
  columns?: 2 | 3;
}

const Events: React.FC<EventsProps> = ({ title, events, columns = 3 }) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <Section background="white" size="lg" id="events">
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {events.map((event, index) => (
            <ScrollAnimatedCard
              key={index}
              animationType="slideUp"
              delay={index * 0.1}
            >
              <Card hoverable image={event.image}>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-accent-600 text-white text-sm font-semibold rounded-full">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                {event.location && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    📍 {event.location}
                  </p>
                )}
                <p className="text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
              </Card>
            </ScrollAnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Events;
