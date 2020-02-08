import React from "react";
import "./App.css";

export const Statistic = props => (
  <div style={{marginRight: '50px'}}>
    <div className="statistic-number">
      <strong>{props.number}</strong>
    </div>
    <div className="statistic-text">
      <strong>{props.text}</strong>
    </div>
  </div>
);
