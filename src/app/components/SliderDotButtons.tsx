'use client';
import React, { useCallback, memo } from 'react';

interface DotProps {
  index: number;
  currentIndex: number;
  onClick: () => void;
}

const Dot = memo(({ index, currentIndex, onClick }: DotProps) => {
  const sectionScreenSelected = index === currentIndex;
  return (
    <button
      className={`w-3 h-3 rounded-full m-1 transition-colors duration-300 ${
        sectionScreenSelected ? 'bg-black' : 'bg-gray-400 hover:bg-gray-300'
      }`}
      onClick={onClick}
      aria-label={`Go to slide ${
        sectionScreenSelected ? '(current slide)' : ''
      }`}
    />
  );
});

Dot.displayName = 'Dot';

interface DotsProps {
  limit: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const Dots = memo(({ limit, onDotClick, currentIndex }: DotsProps) => {
  const handleClick = useCallback(
    (index: number) => () => {
      onDotClick(index);
    },
    [onDotClick]
  );

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
      {Array.from({ length: limit }, (_, index) => (
        <Dot
          key={index}
          index={index}
          currentIndex={currentIndex}
          onClick={handleClick(index)}
        />
      ))}
    </div>
  );
});

Dots.displayName = 'Dots';
