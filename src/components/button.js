import React from "react";
import "../styling/button.css";

const Button = ({ buttonText, onPress }) => {
  return (
    <a className="pushable" href={onPress} target="_blank" rel="noreferrer">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{buttonText}</span>
    </a>
  );
};

export default Button;
