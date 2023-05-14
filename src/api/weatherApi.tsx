import { useEffect, useState } from "react";
import { Position } from "../types/positionTypes";
import { WeatherDetails } from "../types/weatherDetailTypes";

export const getWeatherDetails = ({
  lat,
  lon,
}: Position): Promise<WeatherDetails> => {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  ).then(async (response) => {
    const body = await response.json();
    if (response.ok) {
      return body;
    }
    throw new Error(body.message || "Unknown error");
  });
};

export const useGetWeatherDetails = ({ lat, lon }: Position) => {
  const [data, setData] = useState<WeatherDetails>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getWeatherDetails({ lat, lon })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [lat, lon]);

  return { data, error, isLoading: !data && !error };
};
