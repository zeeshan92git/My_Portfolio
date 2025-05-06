import React, { useState } from 'react';

function ScrollToTop() {
  const [clicked, setClicked] = useState(false); // Start unclicked

  const scrollToTop = () => {
    setClicked(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset the click state after a short delay
    setTimeout(() => setClicked(false), 100); // back to default
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg cursor-pointer transition-colors duration-300 
        ${clicked ? 'bg-orange-500' : 'bg-gray-900 hover:bg-orange-500'} text-neutral-200`}
    >
      <i className="fa fa-arrow-up md:text-lg text-sm" aria-hidden="true"></i>
     

    </div>
  );
}

export default ScrollToTop;
