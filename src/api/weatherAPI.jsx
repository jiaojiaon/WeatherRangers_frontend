import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: process.env.REACT_APP_WEATHER_APP_API,
        units: "imperial"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
