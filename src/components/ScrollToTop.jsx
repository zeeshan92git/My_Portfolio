import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 md:bottom-10 md:right-10 p-3 rounded-full bg-indigo-600 text-white 
                     shadow-lg hover:bg-white hover:text-indigo-600 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 
                     animate-fadeIn z-50"
          aria-label="Scroll to top"
        >
          <i className="fa fa-arrow-up text-base md:text-lg" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
