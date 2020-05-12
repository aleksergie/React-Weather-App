import React, { useEffect } from "react";
import "./week-container.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { fetchWeatherForecast } from "../../redux/weather-forecast/weather-forecast.actions";
import Spinner from "../../components/spinner/spinner.component";

const WeekContainer = ({ dispatch, loading, hasErrors, weatherForecast }) => {
  useEffect(() => {
    dispatch(fetchWeatherForecast());
  }, [dispatch]);

  const renderWeather = () => {
    if (loading) return <Spinner />;
    if (hasErrors) throw new Error("Opss!");

    return weatherForecast.map((day, index) => <Card day={day} key={index} />);
  };

  return <div className="card-list">{renderWeather()}</div>;
};

const mapStateToProps = (state) => ({
  weatherForecast: state.weatherForecast.weatherForecast,
  loading: state.weatherForecast.loading,
  hasErrors: state.weatherForecast.hasErrors,
});

export default connect(mapStateToProps)(WeekContainer);
