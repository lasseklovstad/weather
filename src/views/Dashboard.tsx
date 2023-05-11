import { Container, List, ListItem, Typography } from "@mui/material";
import { WeatherButton } from "./WeatherButton";

const weatcherLocations = [
  { locationName: "Berlin", temperature: "10ºC" },
  { locationName: "London", temperature: "15ºC" },
];

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ my: 2 }}>
      <Typography variant="h1" mb={2}>
        Dashboard
      </Typography>
      <List>
        <ListItem disableGutters>
          <WeatherButton locationName="My location" temperature="22ºC" />
        </ListItem>
        {weatcherLocations.map(({ locationName, temperature }) => {
          return (
            <ListItem key={locationName} disableGutters>
              <WeatherButton
                locationName={locationName}
                temperature={temperature}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
