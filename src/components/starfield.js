import React, { useEffect, useRef } from "react";

const STARS_PER_PIXEL = 0.00018;
const SHOOTING_STAR_CHANCE = 0.003; // per frame, so roughly one every ~5s at 60fps
const SHOOTING_STAR_FRAMES = 60;
const MOUSE_PARALLAX = 28; // px the nearest stars shift toward the edges of the screen
const SCROLL_PARALLAX = 0.08; // how fast the nearest stars drift as you scroll
const PARALLAX_EASING = 0.06;
const METEOR_SHOWER_SIZE = 14;
const LAUNCH_EVENT = "starfield:launch";

// Easter egg: anything can call this to send a meteor shower across the sky.
export const launchMeteorShower = () => window.dispatchEvent(new Event(LAUNCH_EVENT));

// Full-page twinkling starfield behind everything, with the odd shooting star.
// Stars are placed once across a screen-sized field and pinned to the top-left,
// so resizing the window reveals or hides sky instead of reshuffling it.
// Each star has a depth: nearer stars are bigger and move more with the mouse
// and with scrolling, which gives the sky a bit of 3D parallax.
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fieldWidth = Math.max(window.screen?.width || 0, 2560);
    const fieldHeight = Math.max(window.screen?.height || 0, 1600);
    const stars = Array.from(
      { length: Math.round(fieldWidth * fieldHeight * STARS_PER_PIXEL) },
      () => {
        const depth = [0.25, 0.55, 1][Math.floor(Math.random() * 3)];
        return {
          x: Math.random() * fieldWidth,
          y: Math.random() * fieldHeight,
          depth,
          radius: (Math.random() * 0.6 + 0.4) * (0.6 + depth * 0.8),
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.002 + 0.0005,
        };
      }
    );
    let shootingStars = [];
    let frame;
    let width;
    let height;
    const mouse = { x: 0, y: 0 }; // -0.5..0.5 from screen center
    const offset = { x: 0, y: 0 }; // eased toward the mouse

    const drawShootingStar = (star) => {
      const { x, y, life } = star;
      const headX = x + life * 9;
      const headY = y + life * 4;
      const tailX = headX - 120;
      const tailY = headY - 54;
      const trail = ctx.createLinearGradient(headX, headY, tailX, tailY);
      trail.addColorStop(0, `rgba(4, 217, 255, ${1 - life / SHOOTING_STAR_FRAMES})`);
      trail.addColorStop(1, "rgba(4, 217, 255, 0)");
      ctx.strokeStyle = trail;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(headX, headY);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      offset.x += (mouse.x * -MOUSE_PARALLAX - offset.x) * PARALLAX_EASING;
      offset.y += (mouse.y * -MOUSE_PARALLAX - offset.y) * PARALLAX_EASING;
      const scroll = reduceMotion ? 0 : window.scrollY * SCROLL_PARALLAX;

      for (const star of stars) {
        const x = star.x + offset.x * star.depth;
        if (x < -2 || x > width + 2) continue;
        const rawY = star.y - scroll * star.depth + offset.y * star.depth;
        const y = ((rawY % fieldHeight) + fieldHeight) % fieldHeight;
        if (y > height + 2) continue;

        const alpha = reduceMotion
          ? 0.7
          : 0.35 + 0.65 * Math.abs(Math.sin(star.phase + time * star.speed));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduceMotion) return;

      if (shootingStars.length === 0 && Math.random() < SHOOTING_STAR_CHANCE) {
        shootingStars.push({
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.4,
          life: 0,
        });
      }
      for (const star of shootingStars) {
        if (star.life >= 0) drawShootingStar(star);
        star.life++;
      }
      shootingStars = shootingStars.filter((star) => star.life <= SHOOTING_STAR_FRAMES);

      frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (reduceMotion) draw(0);
    };

    const onMouseMove = (event) => {
      mouse.x = event.clientX / width - 0.5;
      mouse.y = event.clientY / height - 0.5;
    };

    // Negative life staggers the meteors so they streak in one after another.
    const onLaunch = () => {
      if (reduceMotion) return;
      for (let i = 0; i < METEOR_SHOWER_SIZE; i++) {
        shootingStars.push({
          x: Math.random() * width * 0.9 - width * 0.1,
          y: Math.random() * height * 0.5,
          life: -Math.floor(Math.random() * 70),
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener(LAUNCH_EVENT, onLaunch);
    if (!reduceMotion) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener(LAUNCH_EVENT, onLaunch);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
};

export default Starfield;
