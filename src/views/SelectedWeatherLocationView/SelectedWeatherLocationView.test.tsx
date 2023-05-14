import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { generateWeatherDetails } from "../../tests/generateTestData";
import { SelectedWeatherLocationView } from "./SelectedWeatherLocationView";

describe("SelectedWeatherLocationView", () => {
  it("should render heading and click back button", async () => {
    const mockOnBack = vi.fn();
    render(
      <SelectedWeatherLocationView
        selectedWeatherLocation={{
          name: "Berlin",
          weatherDetails: generateWeatherDetails(),
        }}
        onBack={mockOnBack}
      />
    );
    expect(screen.getByRole("heading", { name: "Berlin" })).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(mockOnBack).toHaveBeenCalled();
  });
});
