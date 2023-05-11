import { Container, List, ListItem, Typography } from "@mui/material";
import { WeatherButton } from "./WeatherButton";

const weatcherLocations = [
  { locationName: "Berlin", location: { lat: 52.520008, lon: 13.404954 } },
  { locationName: "London", location: { lat: 0, lon: 0 } },
];

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ my: 2 }}>
      <Typography variant="h1" mb={2}>
        Dashboard
      </Typography>
      <List>
        <ListItem disableGutters>
          <WeatherButton
            locationName="My location"
            location={{ lat: 0, lon: 0 }}
          />
        </ListItem>
        {weatcherLocations.map(({ locationName, location }) => {
          return (
            <ListItem key={locationName} disableGutters>
              <WeatherButton locationName={locationName} location={location} />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
