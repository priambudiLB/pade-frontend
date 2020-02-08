import React from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import WebTemplate from "./WebTemplate";
import { Link } from "react-router-dom";

function StatusPage() {
  return (
    <WebTemplate
      text={"Status"}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tanggal Pembuatan</th>
              <th>Isi</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { [...Array(100).keys()].map(i=>{
            return <tr>
              <td>{i}</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <Link to={'/status/'+i}>
              <td>Lihat</td>
              </Link>
            </tr>
          })}
          </tbody>
        </Table>
        </div>
      }
    />
  );
}

export default StatusPage;
