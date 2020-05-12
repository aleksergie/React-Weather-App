import React, { Component } from "react";
import WeekContainer from "../src/components/week-container/week-container.component";
import { AppStyles, Title, IconHeader } from "./App.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

class App extends Component {
  render() {
    return (
      <AppStyles>
        <ErrorBoundary>
          <Title>
            Five Day Weather Forecast
            <IconHeader className="owf owf-800-d"></IconHeader>
          </Title>
          {<WeekContainer />}
        </ErrorBoundary>
      </AppStyles>
    );
  }
}

export default App;
