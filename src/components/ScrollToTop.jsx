import React from 'react';


function ScrollToTop() {
  // Function to handle the scroll to top action
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop} // Trigger scroll on click
      className="fixed bottom-8 right-8 bg-gray-900 text-neutral-200 p-4 rounded-full shadow-lg cursor-pointer hover:bg-orange-500 "
    >
    <i className="fa fa-arrow-up md:text-2xl text-lg " aria-hidden="true"></i>
    </div>
  );
}

export default ScrollToTop;
