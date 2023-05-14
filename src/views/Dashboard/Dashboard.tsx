import { Typography } from "@mui/material";
import { SelectedWeatherLocation } from "../../types/weatherDetailTypes";
import { WeatherLocationList } from "./components/WeatherLocationList";

type DashboardProps = {
  onClick: (location: SelectedWeatherLocation) => void;
};

export const Dashboard = ({ onClick }: DashboardProps) => {
  return (
    <>
      <Typography variant="h1" mb={2}>
        Dashboard
      </Typography>
      <WeatherLocationList
        weatherLocations={[
          {
            name: "Berlin",
            position: { lat: 52.520008, lon: 13.404954 },
          },
          {
            name: "London",
            position: { lat: 51.509865, lon: -0.118092 },
          },
        ]}
        onClick={onClick}
      />
    </>
  );
};
