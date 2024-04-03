import React, { useState, useEffect } from "react";
import "../styling/scroll-caret.css";

// Define your component
const ScrollCaret = () => {
  return (
    <div style={{ marginTop: "0px", transform: "scale(0.6)", marginBottom: "0px" }}>
      <div class="main__action">
        <a class="main__scroll" href="#tools">
          <div class="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                fill="rgba(255,255,255,1)"
              ></path>
            </svg>
            <span class="main__scroll-text">Scroll!</span>
          </div>
        </a>
      </div>
    </div>
  );
};

// Export your component
export default ScrollCaret;
