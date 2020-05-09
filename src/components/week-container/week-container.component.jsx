import React from "react";
import "./week-container.styles.scss";
import Card from "../card/card.component";

export const WeekContainer = (props) => {
  return (
    <div className="card-list">
      {props.days.map((day, index) => (
        <Card day={day} key={index} />
      ))}
    </div>
  );
};
