'use client';

import React, { PropsWithChildren, useMemo } from 'react';
import { Dots } from './SliderDotButtons';
import { useFullPageScroll } from '../hooks/useFullPageScroll';

type FullPageScrollProps = {
  onPageChangeCallback?: (page: number) => void;
  onLoadCallback?: (limit: number) => void;
} & PropsWithChildren;

export const FullPageScroll: React.FC<FullPageScrollProps> = ({
  children,
  onLoadCallback = () => {},
}) => {
  const totalChildrenCount = React.Children.count(children);
  const { scrollContainerRef, activePageIndex, scrollToPageIndex } =
    useFullPageScroll(onLoadCallback, totalChildrenCount);

  const memoizedDots = useMemo(
    () => (
      <Dots
        limit={totalChildrenCount}
        currentIndex={activePageIndex}
        onDotClick={scrollToPageIndex}
      />
    ),
    [totalChildrenCount, scrollToPageIndex, activePageIndex]
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={scrollContainerRef} className="h-full w-full">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="h-full w-full">
            {child}
          </div>
        ))}
      </div>
      {memoizedDots}
    </section>
  );
};
