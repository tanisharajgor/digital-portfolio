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

  return (
    <code className="font-mono text-2xl text-white">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-blink bg-neon" />
    </code>
  );
};

export default Typewriter;
