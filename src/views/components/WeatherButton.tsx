import {
  Alert,
  AlertTitle,
  ButtonBase,
  CircularProgress,
  Typography,
} from "@mui/material";
import { convertTemperatureToCelcius } from "../../utils/temperatureUtils";
import { WeatherDetails } from "../../types/weatherDetailTypes";
import { useGetWeatherDetails } from "../../api/weatherApi";
import { Position } from "../../types/positionTypes";

type WeatherButtonProps = {
  name: string;
  position: Position;
  onClick: (weatherDetails: WeatherDetails) => void;
};

export const WeatherButton = ({
  name: locationName,
  position,
  onClick,
}: WeatherButtonProps) => {
  const { data, error, isLoading } = useGetWeatherDetails(position);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>
          Something went wrong while fetching weather data for {locationName}
        </AlertTitle>
        {error}
      </Alert>
    );
  }

  return (
    <ButtonBase
      focusRipple
      sx={{
        boxShadow: 2,
        height: "70px",
        width: "100%",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        px: 4,
        whiteSpace: "nowrap",
      }}
      onClick={() => data && onClick(data)}
    >
      <Typography variant="h4" component="div">
        {locationName}
      </Typography>
      {data && (
        <Typography variant="h5" component="div">
          {convertTemperatureToCelcius(data.current.temp)}ºC
        </Typography>
      )}
      {isLoading && <CircularProgress size={25} />}
    </ButtonBase>
  );
};
