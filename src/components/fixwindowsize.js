import React, { useEffect } from 'react';

const FixedSizeWindow = () => {
  useEffect(() => {
    // Function to set a fixed size for the window
    const setWindowSize = () => {
      window.resizeTo(1005, 725); // Adjust the width and height as needed
    };

    // Call the function initially to set the window size
    setWindowSize();

    // Listen for window resize event and call the function to set the window size
    window.addEventListener('resize', setWindowSize);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', setWindowSize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return null; // This component doesn't render anything in the DOM
};

export default FixedSizeWindow;