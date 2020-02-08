import React, { useEffect } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function ComplaintPage() {
  useEffect(() => {
    document.title = `PADE - Keluhan`;
  });
  return (
    <AdminPage
      header={<PageHeader text={"Keluhan"} />}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pengirim</th>
              <th>Kategori</th>
              <th>Isi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          { [...Array(100).keys()].map(i=>{
            return <tr>
              <td>{i}</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td><Badge variant="danger">Ditolak</Badge></td>
              <Link to={'/admin/keluhan/'+i}>
              <td><Badge variant="info">Lihat</Badge></td>
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

export default ComplaintPage;
