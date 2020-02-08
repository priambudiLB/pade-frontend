import React, { useEffect } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

function ComplaintPage() {
  useEffect(() => {
    document.title = `PADE - Complaint`;
  });
  const history = useHistory();
  return (
    <AdminPage
      header={<PageHeader text={"Complaint"} />}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Content</th>
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
              <Link to={'/admin/complaint/'+i} onClick={()=>history.push(i)}>
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

export default ComplaintPage;
