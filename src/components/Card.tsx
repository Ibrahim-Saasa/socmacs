import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  hoverable = false,
  image,
  imageAlt = "",
  title,
  description,
  children,
  className = "",
  ...props
}) => {
  const cardClass = hoverable ? "card-hover" : "card";

  return (
    <div className={`${cardClass} ${className}`} {...props}>
      {image && (
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
