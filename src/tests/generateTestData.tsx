import {
  WeatherDetails,
  WeatherDetailsCurrent,
} from "../types/weatherDetailTypes";

export const generateWeatherDetails = (
  weatherDetails?: Partial<WeatherDetails>
): WeatherDetails => {
  return {
    lat: 0,
    lon: 0,
    timezone: "",
    timezone_offset: 0,
    ...weatherDetails,
    current: generateWeatherDetailsCurrent(weatherDetails?.current),
  };
};

export const generateWeatherDetailsCurrent = (
  current?: Partial<WeatherDetailsCurrent>
): WeatherDetailsCurrent => {
  return {
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    wind_gust: 0,
    weather: [],
    ...current,
  };
};
