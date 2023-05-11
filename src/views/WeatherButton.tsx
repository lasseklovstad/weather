import {
  Alert,
  AlertTitle,
  ButtonBase,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Location, useGetWeatherDetails } from "../api/weatherApi";

type WeatherButtonProps = {
  locationName: string;
  location: Location;
};

export const WeatherButton = ({
  locationName,
  location,
}: WeatherButtonProps) => {
  const { data, error, isLoading } = useGetWeatherDetails(location);

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>
          Something went wrong while fetching weatcher data for {locationName}
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
    >
      <Typography variant="h4" component="div">
        {locationName}
      </Typography>
      {data && (
        <Typography variant="h5" component="div">
          {data?.current.temp}ºC
        </Typography>
      )}
      {isLoading && <CircularProgress size={25} />}
    </ButtonBase>
  );
};
