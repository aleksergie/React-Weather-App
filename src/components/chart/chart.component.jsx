import React, { useEffect } from "react";
import { fetchWeatherForecast } from "../../redux/weather-forecast/weather-forecast.actions";
import Chart from "react-apexcharts";
import Spinner from "../spinner/spinner.component";
import "./chart.styles.scss";
import { connect } from "react-redux";
let moment = require("moment");

const ChartWeather = ({ dispatch, loading, weatherForecast }) => {
  useEffect(() => {
    dispatch(fetchWeatherForecast());
  }, [dispatch]);

  let temperature = [];
  let weekdays = [];
  weatherForecast.forEach((day) => {
    let newDate = new Date();
    const weekday = day.dt * 1000;
    newDate.setTime(weekday);
    weekdays.push(moment(newDate.setTime(weekday)).format("dddd"));
    temperature.push(Math.round(parseInt(day.main.temp) - 273.15));
  });

  let chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [...weekdays],
      },
    },
    series: [
      {
        name: "temperature Celcium",
        data: [...temperature],
      },
    ],
  };

  return (
    <div className="app">
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              width="600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherForecast: state.weatherForecast.weatherForecast,
  loading: state.weatherForecast.loading,
});

export default connect(mapStateToProps)(ChartWeather);
