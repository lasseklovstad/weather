import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render text", () => {
  render(<App />);
  expect(screen.getByText("Weather App")).toBeVisible();
});
