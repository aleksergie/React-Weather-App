import React from "react";
import "./card.styles.scss";
let moment = require("moment");

const Card = ({ day }) => {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);
  const imgURL = "owf owf-" + day.weather[0].id + " owf-5x icon";
  const celcium = parseInt(day.main.temp) - 273.15;

  return (
    <div className="card-list__container">
      <h1 className="card-list__heading">{moment(newDate).format("dddd")}</h1>
      <p className="card-list__date">{moment(newDate).format("MMMM Do")}</p>
      <h2 className="card-list__temperature">{Math.round(celcium)} °C</h2>
      <i className={imgURL}></i>
      <p className="card-list__description">{day.weather[0].description}</p>
    </div>
  );
};
export default Card;
