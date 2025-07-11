import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setShowButton(window.scrollY > 300);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    setClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => setClicked(false), 100);
  };

  return (
    <>
      {showButton && (
        <div
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-2 rounded-full cursor-pointer transition-all duration-300
            bg-orange-200 text-orange-500 hover:text-white hover:bg-orange-500 shadow-lg z-50`}
        >
          <i className="fa fa-arrow-up md:text-lg text-sm font-bold" aria-hidden="true"></i>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
