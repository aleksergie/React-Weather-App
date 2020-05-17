import React from "react";
import { withRouter } from "react-router-dom";
import "./bar-chart-image.styles.scss";
import chart from "../../image/chart.png";

const ChartImg = ({ history }) => (
  <img
    src={chart}
    className="background-image"
    onClick={() => history.push("/chart")}
    alt="Chart"
  ></img>
);

export default withRouter(ChartImg);
