import React from "react";
import "../styling/button.css";

const Button = ({ buttonText, onPress }) => {
  return (
    <div>
      <button className="pushable">
        <a href={onPress}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">{buttonText}</span>
        </a>
      </button>
    </div>
  );
};

export default Button;
