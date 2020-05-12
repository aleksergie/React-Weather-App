import { combineReducers } from "redux";
import weatherForecastReducer from "./weather-forecast/weather.reducer";

const rootReducer = combineReducers({
  weatherForecast: weatherForecastReducer,
});

export default rootReducer;
