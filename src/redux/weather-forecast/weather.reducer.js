import WeatherForecastActionTypes from "./weather-forecast.types";

const initialState = {
  weatherForecast: [],
  loading: false,
  hasErrors: false,
};

const weatherForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case WeatherForecastActionTypes.GET_WEATHER_FORECAST:
      return { ...state, loading: true };
    case WeatherForecastActionTypes.GET_WEATHER_FORECAST_SUCCESS:
      return {
        weatherForecast: action.payload,
        loading: false,
        hasErrors: false,
      };
    case WeatherForecastActionTypes.GET_WEATHER_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    default:
      return state;
  }
};

export default weatherForecastReducer;
