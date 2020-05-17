import React, { useEffect } from "react";
import "./week-container.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { fetchWeatherForecast } from "../../redux/weather-forecast/weather-forecast.actions";
import Spinner from "../../components/spinner/spinner.component";
import { Tooltip } from "@material-ui/core";
import ChartImg from "../bar-chart-image/bar-chart-image";

const WeekContainer = ({ dispatch, loading, hasErrors, weatherForecast }) => {
  useEffect(() => {
    dispatch(fetchWeatherForecast());
  }, [dispatch]);

  const renderWeather = () => {
    if (loading) return <Spinner />;
    if (hasErrors) throw new Error("Oops!");

    return weatherForecast.map((day, index) => <Card day={day} key={index} />);
  };

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <Tooltip
          title="Click to show the chart"
          TransitionProps={{ timeout: 350 }}
          placement="right"
          arrow
        >
          <div className="chart-container">
            <ChartImg />
          </div>
        </Tooltip>
      )}

      <div className="card-list">{renderWeather()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherForecast: state.weatherForecast.weatherForecast,
  loading: state.weatherForecast.loading,
  hasErrors: state.weatherForecast.hasErrors,
});

export default connect(mapStateToProps)(WeekContainer);
