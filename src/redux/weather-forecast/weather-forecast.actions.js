import WeatherForecastActionTypes from "./weather-forecast.types";

export const getWeatherForecast = () => ({
  type: WeatherForecastActionTypes.GET_WEATHER_FORECAST,
});

export const getWeatherForecastSuccess = (forecast) => ({
  type: WeatherForecastActionTypes.GET_WEATHER_FORECAST_SUCCESS,
  payload: forecast,
});

export const getWeatherForecastFailure = () => ({
  type: WeatherForecastActionTypes.GET_WEATHER_FORECAST_FAILURE,
});

export const fetchWeatherForecast = () => {
  return (dispatch) => {
    dispatch(getWeatherForecast());

    navigator.geolocation.getCurrentPosition((position) => {
      const openWeatherApiKey = "e5865c0d174ba137684ce0f057d2b9d7";
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      let weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`;
      fetch(weatherApiLink)
        .then((res) => {
          if (!res.ok) {
            dispatch(getWeatherForecastFailure());
          }
          return res;
        })
        .then((res) => res.json())
        .then((data) => {
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("15:00:00")
          );
          dispatch(getWeatherForecastSuccess(dailyData));
        });
    });
  };
};
