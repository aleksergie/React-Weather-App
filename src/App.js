import React, { Component } from "react";
import WeekContainer from "../src/components/week-container/week-container.component";
import { AppStyles, Title, IconHeader } from "./App.styles";

class App extends Component {
  render() {
    return (
      <AppStyles>
        <Title>
          Five Day Weather Forecast
          <IconHeader className="owf owf-800-d"></IconHeader>
        </Title>
        {<WeekContainer />}
      </AppStyles>
    );
  }
}

export default App;
