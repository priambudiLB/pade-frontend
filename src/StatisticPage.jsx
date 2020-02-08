import React, { useEffect } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import { Statistic } from "./Statistic";
import { Row } from "react-bootstrap";
import AdminPage from "./AdminPage";

function StatisticPage() {
  useEffect(() => {
    document.title = `PADE - Statistic`;
  });
  return (
    <AdminPage
      header={<PageHeader text={"Statistic"} />}
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

export default StatisticPage;
