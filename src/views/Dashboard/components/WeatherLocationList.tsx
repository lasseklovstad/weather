import { List, ListItem } from "@mui/material";
import { GetCurrentPosition } from "./GetCurrentPosition";
import { WeatherButton } from "./WeatherButton";
import { Position } from "../../../types/positionTypes";
import { SelectedWeatherLocation } from "../../../types/weatherDetailTypes";

type WeatherLocationListProps = {
  weatherLocations: { name: string; position: Position }[];
  onClick: (location: SelectedWeatherLocation) => void;
};

export const WeatherLocationList = ({
  weatherLocations,
  onClick,
}: WeatherLocationListProps) => {
  return (
    <List>
      <ListItem disableGutters>
        <GetCurrentPosition>
          {(position) => (
            <WeatherButton
              name="My location"
              position={position}
              onClick={onClick}
            />
          )}
        </GetCurrentPosition>
      </ListItem>
      {weatherLocations.map(({ name, position }) => {
        return (
          <ListItem key={name} disableGutters>
            <WeatherButton name={name} position={position} onClick={onClick} />
          </ListItem>
        );
      })}
    </List>
  );
};
