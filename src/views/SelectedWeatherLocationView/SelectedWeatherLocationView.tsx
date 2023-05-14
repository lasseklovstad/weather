import { ArrowBack } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { SelectedWeatherLocation } from "../../types/weatherDetailTypes";
import { DetailGridItem } from "./components/DetailGridItem";
import { WeatherLeftContent } from "./components/WeatherLeftContent";

type SelectedWeatherLocationProps = {
  selectedWeatherLocation: SelectedWeatherLocation;
  onBack: () => void;
};

export const SelectedWeatherLocationView = ({
  selectedWeatherLocation: { name, weatherDetails },
  onBack,
}: SelectedWeatherLocationProps) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        justifyContent="center"
        position={"relative"}
      >
        <IconButton
          aria-label="Back"
          onClick={onBack}
          sx={{ position: "absolute", left: 0 }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h1">{name}</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <WeatherLeftContent weatherDetails={weatherDetails} />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item xs={6} borderBottom={1} borderRight={1}>
            <DetailGridItem
              name="Sunrise"
              details={formatTime(weatherDetails.current.sunrise)}
            />
          </Grid>
          <Grid item xs={6} borderBottom={1} borderLeft={1}>
            <DetailGridItem
              name="Sunset"
              details={formatTime(weatherDetails.current.sunset)}
            />
          </Grid>
          <Grid item xs={6} borderTop={1} borderRight={1}>
            <DetailGridItem
              name="Humidity"
              details={`${weatherDetails.current.humidity} %`}
            />
          </Grid>
          <Grid item xs={6} borderTop={1} borderLeft={1}>
            <DetailGridItem
              name="Visibility"
              details={`${(weatherDetails.current.visibility / 1000).toFixed(
                2
              )} Km`}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const formatTime = (time: number) => {
  // Time in seconds
  const date = new Date(time * 1000);
  console.log(date);
  return `${date.getHours()}:${date.getMinutes()}`;
};
