import React, { Component } from "react";
import WeekContainer from "../src/components/week-container/week-container.component";
import { AppStyles, Title, IconHeader } from "./App.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ChartWeather from "./components/chart/chart.component";
import { Switch, Route, Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

class App extends Component {
  render() {
    return (
      <AppStyles>
        <ErrorBoundary>
          <Zoom>
            <Link to="/">
              <Title>
                Five Day Weather Forecast
                <IconHeader className="owf owf-800-d"></IconHeader>
              </Title>
            </Link>
            <Switch>
              <Route exact path="/" component={WeekContainer} />
              <Route exact path="/chart" component={ChartWeather} />
            </Switch>
          </Zoom>
        </ErrorBoundary>
      </AppStyles>
    );
  }
}

export default App;
