import { useEffect, useRef, useCallback, useState } from 'react';

export const useFullPageScroll = (
  onLoadCallback: (limit: number) => void,
  totalChildrenCount: number
) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const isScrollingInProgressRef = useRef<boolean>(false);
  const initialTouchY = useRef<number>(0);

  const scrollToPageIndex = useCallback(
    (targetPageIndex: number) => {
      if (!scrollContainerRef.current || isScrollingInProgressRef.current)
        return;

      const containerHeight = scrollContainerRef.current.clientHeight;
      const targetScrollPosition = targetPageIndex * containerHeight;

      isScrollingInProgressRef.current = true;
      scrollContainerRef.current.style.overflow = 'hidden';

      scrollContainerRef.current.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });

      setActivePageIndex(targetPageIndex);
      onLoadCallback(targetPageIndex);

      setTimeout(() => {
        isScrollingInProgressRef.current = false;
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.overflow = 'hidden';
        }
      }, 1000);
    },
    [onLoadCallback]
  );

  const handleScrollDirection = useCallback(
    (scrollDirection: 'up' | 'down') => {
      const newPageIndex =
        scrollDirection === 'down'
          ? Math.min(activePageIndex + 1, totalChildrenCount - 1)
          : Math.max(activePageIndex - 1, 0);

      scrollToPageIndex(newPageIndex);
    },
    [totalChildrenCount, scrollToPageIndex, activePageIndex]
  );

  const handleWheelEvent = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (isScrollingInProgressRef.current) return;
      handleScrollDirection(event.deltaY > 0 ? 'down' : 'up');
    },
    [handleScrollDirection]
  );

  const handleTouchStartEvent = useCallback((event: TouchEvent) => {
    initialTouchY.current = event.touches[0].clientY;
  }, []);

  const handleTouchEndEvent = useCallback(
    (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const touchDifference = initialTouchY.current - touchEndY;

      if (Math.abs(touchDifference) > 50) {
        handleScrollDirection(touchDifference > 0 ? 'down' : 'up');
      }
    },
    [handleScrollDirection]
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    onLoadCallback(totalChildrenCount);

    scrollContainer.addEventListener('wheel', handleWheelEvent, {
      passive: false,
    });
    scrollContainer.addEventListener('touchstart', handleTouchStartEvent);
    scrollContainer.addEventListener('touchend', handleTouchEndEvent);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheelEvent);
      scrollContainer.removeEventListener('touchstart', handleTouchStartEvent);
      scrollContainer.removeEventListener('touchend', handleTouchEndEvent);
    };
  }, [
    totalChildrenCount,
    handleWheelEvent,
    handleTouchStartEvent,
    handleTouchEndEvent,
    onLoadCallback,
  ]);

  return { scrollContainerRef, activePageIndex, scrollToPageIndex };
};
