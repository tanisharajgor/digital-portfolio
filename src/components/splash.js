import React, { useCallback, useEffect, useState } from "react";
import "../styling/splash.css";

const SEEN_KEY = "splash-seen";
const SHOW_MS = 1100; // ignition plays, then...
const FADE_MS = 700; // ...it dissolves into the page

// Only once per browser session, and never for people who prefer less motion.
// This must stay side-effect free: React's StrictMode calls it twice in dev.
const shouldShow = () => {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !window.sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true; // Storage can be blocked (private mode etc.); just show it.
  }
};

const markSeen = () => {
  try {
    window.sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Ignore blocked storage.
  }
};

// "Star ignition" intro: a cyan core flares up, a ring pulses out, a light
// streak sweeps across, and the whole thing dissolves into the hero.
// Click or press any key to skip.
const Splash = () => {
  const [phase, setPhase] = useState(() => (shouldShow() ? "show" : "done"));

  const dismiss = useCallback(() => {
    setPhase((current) => (current === "show" ? "fade" : current));
  }, []);

  useEffect(() => {
    if (phase === "show") {
      markSeen();
      const timer = setTimeout(dismiss, SHOW_MS);
      window.addEventListener("keydown", dismiss);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", dismiss);
      };
    }
    if (phase === "fade") {
      const timer = setTimeout(() => setPhase("done"), FADE_MS);
      return () => clearTimeout(timer);
    }
  }, [phase, dismiss]);

  if (phase === "done") return null;

  return (
    <div
      className={`splash ${phase === "fade" ? "splash-out" : ""}`}
      onClick={dismiss}
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash-glow" />
      <div className="splash-streak" />
      <div className="splash-ring" />
      <div className="splash-core" />
      <p className="splash-name">
        tanisharajgor<span className="text-neon">_</span>
      </p>
    </div>
  );
};

export default Splash;
