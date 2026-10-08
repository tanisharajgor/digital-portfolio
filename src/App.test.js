import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders every project card", () => {
  render(<App />);
  expect(screen.getByText(/Immersify/)).toBeInTheDocument();
  expect(screen.getByText(/Star Classification/)).toBeInTheDocument();
});

test("renders the experience terminal", () => {
  render(<App />);
  expect(screen.getByText("Spotify")).toBeInTheDocument();
  expect(screen.getByText(/AerospaceNU \(CubeSat\)/)).toBeInTheDocument();
});
