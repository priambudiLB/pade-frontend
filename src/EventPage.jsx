import React from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table } from "react-bootstrap";

function EventPage() {
  return (
    <AdminPage
      header={<PageHeader text={"Event"} />}
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
              <td>Ubah/Lihat</td>
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
