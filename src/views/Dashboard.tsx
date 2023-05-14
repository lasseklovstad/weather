import { Container, Typography } from "@mui/material";
import { WeatherLocationList } from "./components/WeatherLocationList";

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ my: 2 }}>
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
      />
    </Container>
  );
};
