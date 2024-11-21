import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Card Component
export const Card = React.memo(
  ({
    card,
    index,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 w-full transition-transform duration-300 ease-out transform hover:scale-105",
        "bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700"
      )}
    >
      {/* Background Color based on card.id */}
      <div
        className={cn(
          "absolute inset-0 flex dark:bg-black flex-col justify-end items-start p-4 sm:p-6 md:p-8 transition-opacity duration-300",
          card.id === 1
            ? "bg-[#EDFFF2E5]"
            : card.id === 2
            ? "bg-[#FFF6E2E5]"
            : "bg-[#DFF3FFAB]"
        )}
      >
        {/* Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {card.name}
        </h1>

        {/* Tagline */}
        <div className="text-sm sm:text-md md:text-lg font-medium text-gray-600 dark:text-gray-300 mt-2">
          {card.tagline}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
          {card.description}
        </p>

        {/* Button */}
        <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white text-xs sm:text-sm md:text-base font-medium shadow hover:shadow-lg focus:outline-none transition-all">
          {card.buttonText}
        </button>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// Card Type
type Card = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  buttonText: string;
  imageSymbol: string;
  lineImage: string;
  backgroundImage: string;
  arrowImage: string;
};

// FocusCards Component
export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
