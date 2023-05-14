import { List, ListItem } from "@mui/material";
import { GetCurrentPosition } from "./GetCurrentPosition";
import { WeatherButton } from "./WeatherButton";
import { Position } from "../../types/positionTypes";

type WeatherLocationListProps = {
  weatherLocations: { name: string; position: Position }[];
};

export const WeatherLocationList = ({
  weatherLocations,
}: WeatherLocationListProps) => {
  return (
    <List>
      <ListItem disableGutters>
        <GetCurrentPosition>
          {(position) => (
            <WeatherButton
              name="My location"
              position={position}
              onClick={(weatherDetails) => console.log(weatherDetails)}
            />
          )}
        </GetCurrentPosition>
      </ListItem>
      {weatherLocations.map(({ name, position }) => {
        return (
          <ListItem key={name} disableGutters>
            <WeatherButton
              name={name}
              position={position}
              onClick={(weatherDetails) => console.log(weatherDetails)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
