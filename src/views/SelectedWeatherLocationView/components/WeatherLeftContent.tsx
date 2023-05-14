import { Typography, Box } from "@mui/material";
import {
  convertTemperatureToCelcius,
  getMaxTemperatur,
  getMinTemperatur,
} from "../../../utils/temperatureUtils";
import { WeatherDetails } from "../../../types/weatherDetailTypes";

type WeatherLeftContentProps = {
  weatherDetails: WeatherDetails;
};

export const WeatherLeftContent = ({
  weatherDetails,
}: WeatherLeftContentProps) => {
  const maxTemp = convertTemperatureToCelcius(
    getMaxTemperatur(weatherDetails.hourly)
  );
  const minTemp = convertTemperatureToCelcius(
    getMinTemperatur(weatherDetails.hourly)
  );
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Typography>{weatherDetails.current.weather[0]?.main}</Typography>
      <Typography variant="h2" component="div">
        {convertTemperatureToCelcius(weatherDetails.current.temp)}
      </Typography>
      <Box display="flex" gap={2}>
        <Typography>H: {maxTemp}ºC</Typography>
        <Typography>L: {minTemp}ºC</Typography>
      </Box>
    </Box>
  );
};
