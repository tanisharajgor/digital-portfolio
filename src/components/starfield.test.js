import { act, render } from "@testing-library/react";
import Starfield, { launchMeteorShower } from "./starfield";

// A fake 2D context that counts the strokes (shooting-star trails) drawn per frame.
const makeContext = () => {
  const ctx = { strokes: 0 };
  for (const method of ["clearRect", "beginPath", "arc", "fill", "moveTo", "lineTo", "setTransform"]) {
    ctx[method] = () => {};
  }
  ctx.stroke = () => {
    ctx.strokes++;
  };
  ctx.createLinearGradient = () => ({ addColorStop: () => {} });
  return ctx;
};

test("launching sends a meteor shower across the starfield", () => {
  const ctx = makeContext();
  const originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = () => ctx;
  const frames = [];
  const originalRaf = window.requestAnimationFrame;
  window.requestAnimationFrame = (callback) => frames.push(callback);
  const randomSpy = jest.spyOn(Math, "random").mockReturnValue(0.5); // no random shooting stars

  const step = (count) => {
    for (let i = 0; i < count; i++) frames.shift()?.(i * 16);
  };

  try {
    render(<Starfield />);
    step(30);
    expect(ctx.strokes).toBe(0);

    act(() => launchMeteorShower());
    step(80);
    expect(ctx.strokes).toBeGreaterThan(0);
  } finally {
    HTMLCanvasElement.prototype.getContext = originalGetContext;
    window.requestAnimationFrame = originalRaf;
    randomSpy.mockRestore();
  }
});
