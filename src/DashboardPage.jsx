import React, { useEffect, useState } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import { Statistic } from "./Statistic";
import { Row } from "react-bootstrap";
import AdminPage from "./AdminPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import useWindowDimensions from "./useWindowDimension";
import axios from 'axios';
const data = [
  {
    name: "pengaduan",
    a: 4000,
    b: 2400,
    c: 2400,
    d: 2100,
    e: 4000,
    f: 2400,
    g: 2400,
    h: 2100,
    i: 4000,
    j: 2400,
    k: 2400,
    l: 2100,
    m: 2100,
    a1: 4000,
    b1: 2400,
    c1: 2400,
    d1: 2100,
    e1: 4000,
    f1: 2400,
    g1: 2400,
    h1: 2100,
    i1: 4000,
    j1: 2400,
    k1: 2400,
    l1: 2100,
    m1: 2100,
  }
];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function DashboardPage() {
  const { width } = useWindowDimensions();
  const [unfinished, setUnfinished] = useState([]);
  useEffect(() => {
    document.title = `PADE - Dasbor`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        proxyurl +
          `https://pade-arkavidia-backend.herokuapp.com/api/unfinished-reports/`
      )
      .then(res => {
        console.log(res)
        setUnfinished(res.data.all_unfinished_reports)
      })
  }, []);
  return (
    <AdminPage
      header={<PageHeader text={"Dasbor"} />}
      content={
        <Row>
          <Statistic number={unfinished.length} text={"Pengaduan Belum Selesai"} />
          <Statistic number={"3"} text={"Pengaduan Menunggu Persetujuan Admin"} />
          <Statistic number={"13"} text={"Pengaduan Diproses"} />
          <Statistic number={"3"} text={"Jumlah Pengaduan"} />
          <BarChart
          className="space-top"
            width={width * 0.6}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="a" fill="#8884d8" />
            <Bar dataKey="b" fill="#82ca9d" />
            <Bar dataKey="c" fill={getRandomColor()} />
            <Bar dataKey="d" fill={getRandomColor()} />
            <Bar dataKey="e" fill={getRandomColor()} />
            <Bar dataKey="f" fill={getRandomColor()} />
            <Bar dataKey="g" fill={getRandomColor()} />
            <Bar dataKey="h" fill={getRandomColor()} />
            <Bar dataKey="i" fill={getRandomColor()} />
            <Bar dataKey="j" fill={getRandomColor()} />
            <Bar dataKey="k" fill={getRandomColor()} />
            <Bar dataKey="l" fill={getRandomColor()} />
            <Bar dataKey="m" fill={getRandomColor()} />
            <Bar dataKey="a1" fill="#8884d8" />
            <Bar dataKey="b1" fill="#82ca9d" />
            <Bar dataKey="c1" fill={getRandomColor()} />
            <Bar dataKey="d1" fill={getRandomColor()} />
            <Bar dataKey="e1" fill={getRandomColor()} />
            <Bar dataKey="f1" fill={getRandomColor()} />
            <Bar dataKey="g1" fill={getRandomColor()} />
            <Bar dataKey="h1" fill={getRandomColor()} />
            <Bar dataKey="i1" fill={getRandomColor()} />
            <Bar dataKey="j1" fill={getRandomColor()} />
            <Bar dataKey="k1" fill={getRandomColor()} />
            <Bar dataKey="l1" fill={getRandomColor()} />
            <Bar dataKey="m1" fill={getRandomColor()} />
          </BarChart>
        </Row>
      }
    />
  );
}

export default DashboardPage;
