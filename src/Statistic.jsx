import React from "react";
import "./App.css";

export const Statistic = props => (
  <div style={{marginRight: '50px'}}>
    <div class="statistic-number">
      <strong>{props.number}</strong>
    </div>
    <div class="statistic-text">
      <strong>{props.text}</strong>
    </div>
  </div>
);
