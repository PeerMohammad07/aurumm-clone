import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

export const HoverCard: React.FC<CardProps> = ({ title, description, link, img }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link
      to={link}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(0)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === 0 && (
          <motion.div
            className={cn(
              'absolute inset-0 h-full w-full rounded-3xl  dark:bg-slate-800/80 bg-neutral-200'
            )}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          'rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black bg-white shadow-lg border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
          'transition-all duration-300 ease-in-out'
        )}
      >
        <div className="relative z-50">
          <div className="p-4">
            <img src={img} alt={title} className="w-10 h-10 object-cover rounded-md mb-4" />
            <h4
              className={cn(
                'text-[#265172] font-bold tracking-wide mt-4',
                'transition-colors duration-300 ease-in-out'
              )}
            >
              {title}
            </h4>
            <p
              className={cn(
                'mt-8 text-gray-800 dark:text-gray-400 tracking-wide leading-relaxed text-sm',
                'transition-colors duration-300 ease-in-out'
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const HoverCardGrid: React.FC<{ items: CardProps[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <HoverCard
          key={idx}
          title={item.title}
          description={item.description}
          link={item.link}
          img={item.img}
        />
      ))}
    </div>
  );
};