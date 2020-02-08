import React, { useState } from "react";
import "./App.css";
import pakdeAdmin from "./padeAdmin.svg";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookie from 'js-cookie';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    const param = {
      username: username,
      password: password
    };

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    axios
      .post(
        proxyurl +
          `https://pade-arkavidia-backend.herokuapp.com/api/admin-login/`,
        param,
        {
          headers: {
            "content-type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data.message === "Successfully Logged In!") {
          Cookie.set('sessionid', res.data.session_id)
          window.location.href = "/admin/dasbor";
        }
      });
  };
  return (
    <div className="login">
      <img class="center" src={pakdeAdmin} alt={"pakde"} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="bold">
            <strong>Username</strong>
          </Form.Label>
          <Form.Control
            onChange={e => setUsername(e.target.value)}
            inputRef={ref => {
              this.inputUsername = ref;
            }}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control
            onChange={e => setPassword(e.target.value)}
            inputRef={ref => {
              this.inputPassword = ref;
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="outline-dark">
          <div onClick={handleClick}>Login</div>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
