import apiClient from "./client";

const apiKey = "c4902d16cb8ae6ba67a1fc32297fa6d4";

const getForecastOnecall = () =>
  apiClient.get(
    `/onecall?lat=12.2597701&lon=109.1064131&units=metric&appid=${apiKey}`
  );

const getForecastCurrent = () =>
  apiClient.get(
    `/weather?lat=12.2597701&lon=109.1064131&units=metric&appid=${apiKey}`
  );

export default {
  getForecastCurrent,
  getForecastOnecall,
};
