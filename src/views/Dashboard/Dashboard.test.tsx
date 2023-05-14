import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import { rest } from "msw";
import { server } from "../../tests/setup";
import {
  generateWeatherDetails,
  generateWeatherDetailsCurrent,
} from "../../tests/generateTestData";
import { Position } from "../../types/positionTypes";

const renderComponent = () => {
  const mockOnClick = vi.fn();
  mockGeolocation({ lon: 20, lat: 20 });
  server.use(
    rest.get(
      "https://api.openweathermap.org/data/3.0/onecall",
      (req, res, context) => {
        const searchParams = req.url.searchParams;
        const lon = searchParams.get("lon");
        const lat = searchParams.get("lat");

        if (lon === "20" && lat === "20") {
          // My location
          return res(
            context.json(
              generateWeatherDetails({
                current: generateWeatherDetailsCurrent({ temp: 273.15 }),
              })
            )
          );
        }
        // Berlin and London
        return res(
          context.json(
            generateWeatherDetails({
              current: generateWeatherDetailsCurrent({ temp: 283.15 }),
            })
          )
        );
      }
    )
  );
  render(<Dashboard onClick={mockOnClick} />);
  return { mockOnClick };
};

describe("Dashboard", () => {
  it("should render My location, Berlin and London with correct tempertures and My Location", async () => {
    const { mockOnClick } = renderComponent();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    const myLocationButton = await screen.findByRole("button", {
      name: /My location/,
    });
    const berlinButton = await screen.findByRole("button", { name: /Berlin/ });
    const londonButton = await screen.findByRole("button", { name: /London/ });

    // Validate temperatures
    expect(myLocationButton).toHaveTextContent(/0/);
    expect(berlinButton).toHaveTextContent(/10/);
    expect(londonButton).toHaveTextContent(/10/);

    // Click My Location
    await userEvent.click(myLocationButton);
    expect(mockOnClick).toHaveBeenCalledWith({
      name: "My location",
      weatherDetails: expect.anything(),
    });
  });
});

const mockGeolocation = ({ lat, lon }: Position) => {
  const mockGeolocation = {
    getCurrentPosition: vi.fn().mockImplementationOnce((success) =>
      Promise.resolve(
        success({
          coords: {
            latitude: lat,
            longitude: lon,
          },
        })
      )
    ),
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.navigator.geolocation = mockGeolocation;
};
