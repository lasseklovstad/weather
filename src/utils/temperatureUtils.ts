import { WeatherDetails } from "../types/weatherDetailTypes";

export const convertTemperatureToCelcius = (temp: number) => {
  return (temp - 273.15).toFixed(2);
};

export const getMaxTemperatur = (hourly: WeatherDetails["hourly"]) => {
  return Math.max(...hourly.map((h) => h.temp));
};

export const getMinTemperatur = (hourly: WeatherDetails["hourly"]) => {
  return Math.min(...hourly.map((h) => h.temp));
};
