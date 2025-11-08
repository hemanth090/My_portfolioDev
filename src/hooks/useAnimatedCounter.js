import { useState, useEffect, useRef } from 'react';

const useAnimatedCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startValue = Number(start) || 0;
    const endValue = Number(end) || 0;
    const startTimestamp = Date.now();

    const step = (timestamp) => {
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * (endValue - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration, start]);

  return { count, counterRef };
};

export default useAnimatedCounter;
