import React, { useState, useEffect } from "react";
import "../styling/earth.css";

// Define your component
const Earth = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [marginRight, setMarginRight] = useState("190px");
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1005);
      const newMarginRight = window.innerWidth > 1005 ? "190px" : "0px"; // Change the condition and values as needed
      setMarginRight(newMarginRight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isVisible ? (
    <div style={{ marginRight }}>
      <div class="section-banner">
        <div id="star-1">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-2">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-3">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-4">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-5">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-6">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-7">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

// Export your component
export default Earth;
