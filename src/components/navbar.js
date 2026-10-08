import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-space/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        <a href="#about" className="font-mono text-sm text-white">
          tanisharajgor
          <span className="animate-blink text-neon">_</span>
        </a>

        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-sm text-gray-400 sm:inline">BOS · NYC</span>
          <a
            href="https://www.linkedin.com/in/tanisharajgor/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="text-white transition-colors hover:text-neon"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/tanisharajgor"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-white transition-colors hover:text-neon"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-sm font-semibold text-white transition-colors hover:text-neon"
          >
            Resume
            <FiArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
