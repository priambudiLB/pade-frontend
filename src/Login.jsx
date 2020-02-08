import React from "react";
import "./App.css";
import pakdeAdmin from "./padeAdmin.svg";
import { Form, Button } from "react-bootstrap";

const handleClick = () => {
  alert("Logged in !")
}
function Login() {
  return (
    <div className="login">
      <img class="center" src={pakdeAdmin} alt={"pakde"} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="bold">
            <strong>Username</strong>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          <a href="/admin/dasbor" onClick={handleClick}>Login</a>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
