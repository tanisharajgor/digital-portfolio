import React from "react";
import { render } from "@testing-library/react";
import Splash from "./splash";

beforeEach(() => window.sessionStorage.clear());

// StrictMode (on in `npm start`) runs state initializers twice; the splash
// must still show on a first visit.
test("shows on a first visit, even under StrictMode", () => {
  const { container } = render(
    <React.StrictMode>
      <Splash />
    </React.StrictMode>
  );
  expect(container.querySelector(".splash")).toBeInTheDocument();
});

test("doesn't replay once this tab has seen it", () => {
  window.sessionStorage.setItem("splash-seen", "1");
  const { container } = render(<Splash />);
  expect(container.querySelector(".splash")).not.toBeInTheDocument();
});
