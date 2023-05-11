import { ButtonBase, Typography } from "@mui/material";

type WeatherButtonProps = {
  locationName: string;
  temperature: string;
};

export const WeatherButton = ({
  locationName,
  temperature,
}: WeatherButtonProps) => {
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
      <Typography variant="h5" component="div">
        {temperature}
      </Typography>
    </ButtonBase>
  );
};
