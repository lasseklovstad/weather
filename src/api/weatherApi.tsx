import { useEffect, useState } from "react";

export type Location = {
  lat: number;
  lon: number;
};

export type WeatherDetails = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
    }[];
  };
};

export const getWeatherDetails = ({
  lat,
  lon,
}: Location): Promise<WeatherDetails> => {
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

export const useGetWeatherDetails = ({ lat, lon }: Location) => {
  const [data, setData] = useState<WeatherDetails>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getWeatherDetails({ lat, lon })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [lat, lon]);

  return { data, error, isLoading: !data && !error };
};
