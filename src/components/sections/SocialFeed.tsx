import React from "react";
import { Card, Container, Section } from "../index";
import ScrollAnimatedCard from "../ScrollAnimatedCard";

interface SocialPost {
  author: string;
  timestamp: string;
  content: string;
  image?: string;
  avatar?: string;
  badge?: boolean;
}

interface SocialFeedProps {
  title?: string;
  posts: SocialPost[];
  columns?: 2 | 3;
}

const SocialFeed: React.FC<SocialFeedProps> = ({
  title,
  posts,
  columns = 3,
}) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <Section background="white" size="lg" id="social">
      <Container>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          </div>
        )}

        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {posts.map((post, index) => (
            <ScrollAnimatedCard
              key={index}
              animationType="slideUp"
              delay={index * 0.1}
            >
              <Card>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.author}
                    className="w-full h-40 object-cover -m-6 mb-4"
                  />
                )}
                <div className="flex items-center mb-3">
                  {post.avatar && (
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {post.author}
                      </h4>
                      {post.badge && (
                        <span className="text-secondary-600 text-sm">✓</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.timestamp}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.content}
                </p>
              </Card>
            </ScrollAnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SocialFeed;
