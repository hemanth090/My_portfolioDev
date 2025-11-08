import React from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const AnimatedCounter = ({ end, duration = 2000, start = 0, suffix = '', prefix = '' }) => {
  const { count, counterRef } = useAnimatedCounter(end, duration, start);

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
