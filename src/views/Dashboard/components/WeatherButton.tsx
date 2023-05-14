import {
  Alert,
  AlertTitle,
  ButtonBase,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useGetWeatherDetails } from "../../../api/weatherApi";
import { Position } from "../../../types/positionTypes";
import { SelectedWeatherLocation } from "../../../types/weatherDetailTypes";
import { convertTemperatureToCelcius } from "../../../utils/temperatureUtils";

type WeatherButtonProps = {
  name: string;
  position: Position;
  onClick: (location: SelectedWeatherLocation) => void;
};

export const WeatherButton = ({
  name,
  position,
  onClick,
}: WeatherButtonProps) => {
  const { data, error, isLoading } = useGetWeatherDetails(position);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>
          Something went wrong while fetching weather data for {name}
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
      onClick={() => data && onClick({ name, weatherDetails: data })}
    >
      <Typography variant="h4" component="div">
        {name}
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
