import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

function AdminPage(props) {
  return (
    <div className="admin-page">
      {props.header}
      <Container>{props.content}</Container>
    </div>
  );
}

export default AdminPage;
