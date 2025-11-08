import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 p-3 bg-gray-600 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          onClick={scrollToTop}
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default BackToTop;