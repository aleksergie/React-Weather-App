import React, { Component } from "react";
import { WeekContainer } from "../src/components/week-container/week-container.component";
import { AppStyles, Title, IconHeader } from "./App.styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
    };
  }

  componentDidMount = () => {
    window.addEventListener("load", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let longitude = position.coords.longitude;
          let latitude = position.coords.latitude;
          const openWeatherApiKey = "c792484ade42380886f51003cfcaf04d";
          const weatherApiLink = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`;

          fetch(weatherApiLink)
            .then((res) => res.json())
            .then((data) => {
              const dailyData = data.list.filter((reading) =>
                reading.dt_txt.includes("21:00:00")
              );
              this.setState({
                days: dailyData,
              });
            });
        });
      }
    });
  };
  render() {
    return (
      <AppStyles>
        <Title>
          Five Day Weather Forecast
          <IconHeader className="owf owf-800-d"></IconHeader>
        </Title>
        {<WeekContainer days={this.state.days} />}
      </AppStyles>
    );
  }
}

export default App;
