import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "../styling/scroll-caret.css";

// Bobbing "Scroll!" hint under the hero; fades away once the visitor starts scrolling.
const ScrollCaret = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Stay visible until about a third of the screen has scrolled by.
    const onScroll = () => setHidden(window.scrollY > window.innerHeight * 0.35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#tools"
      aria-label="Scroll to content"
      className={`scroll-caret ${hidden ? "scroll-caret-hidden" : ""}`}
    >
      <span className="scroll-caret-label">Scroll!</span>
      <FiChevronDown size={26} className="scroll-caret-icon" />
    </a>
  );
};

export default ScrollCaret;
