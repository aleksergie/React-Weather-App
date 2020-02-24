import React, { Component } from "react";
import "./App.css";
import { WeekContainer } from "../src/components/week-container/week-container.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
  }

  componentDidMount = () => {
    window.addEventListener("load", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let longitude = position.coords.longitude;
          let latitude = position.coords.latitude;
          const openWeatherApiKey = "c792484ade42380886f51003cfcaf04d";
          const weatherApiLink = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`;

          fetch(weatherApiLink)
            .then(res => res.json())
            .then(data => {
              const dailyData = data.list.filter(reading =>
                reading.dt_txt.includes("21:00:00")
              );
              this.setState({
                days: dailyData
              });
            });
        });
      }
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="header-title">
          Five Day Weather Forecast<i className="owf owf-800-d icon-header"></i>
        </h1>
        {<WeekContainer days={this.state.days} />}
      </div>
    );
  }
}

export default App;
