import React, { useState, useEffect } from "react";

const words = ["I'm Tanisha."];

const Typewriter = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = words[0];

    const interval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setText(currentWord.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <code style={{ fontSize: '25px', fontFamily: 'monospace' }}>{text}</code>;
};

export default Typewriter;
