import { useEffect, useState } from "react";
import { Position } from "../types/positionTypes";

export const useGetCurrentPosition = () => {
  const [position, setPosition] = useState<Position>();
  const [positionError, setPostionError] = useState<string>();
  const [isLoadingPosition, setIsLoadingPosition] = useState<boolean>();
  useEffect(() => {
    setIsLoadingPosition(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoadingPosition(false);
        setPosition({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        setIsLoadingPosition(false);
        setPostionError(error.message);
      }
    );
  }, []);
  return { position, positionError, isLoadingPosition };
};
