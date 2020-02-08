import React, { useEffect } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventPage() {
  useEffect(() => {
    document.title = `PADE - Statistik`;
  });
  return (
    <AdminPage
      header={<PageHeader text={"Pengumuman"} />}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Sender</th>
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
              <Link to={'/admin/pengumuman/'+i}>
              <td><Link to={'/admin/pengumuman/'+i}><Badge variant="info">Lihat</Badge></Link></td>
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

export default EventPage;
