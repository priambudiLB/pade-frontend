import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

function WebTemplate(props) {
  return (
    <div>
      <div className="page-header-home">
        <strong>{props.text}</strong>
      </div>
      <Container>{props.content}</Container>
    </div>
  );
}

export default WebTemplate;
