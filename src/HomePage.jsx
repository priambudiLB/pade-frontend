import React from "react";
import "./App.css";
import { Row } from "react-bootstrap";
import { Statistic } from "./Statistic";
import WebTemplate from "./WebTemplate";

function HomePage() {
  return (
    <WebTemplate
      text={"Selamat Datang!"}
      content={
        <Row>
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
          <Statistic number={"3"} text={"Jumlah Acara"} />
          <Statistic number={"13"} text={"Jumlah Komplain"} />
        </Row>
      }
    />
  );
}

export default HomePage;
