import React, { useState, useEffect } from "react";
import "../styling/earth.css";
import "../App.css";

const Rocket = () => {
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
      <div class="orbit">
        <div class="rocket">
          <div class="window"></div>
        </div>
        <div class="fire"></div>
      </div>
    </div>
  ) : null;
};

export default Rocket;
