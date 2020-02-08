import React from "react";
import "./App.css";
import { Form, Row, Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

function New() {
  return (
    <div className="radio-haha">
      <Form>
        <Row>
          <Form.Check
            custom
            type={"radio"}
            name="formHorizontalRadios"
            id={`custom-radio`}
            label={`Pengaduan`}
          />
          <div style={{width: '50px'}}></div>
          <Form.Check
            custom
            type={"radio"}
            name="formHorizontalRadios"
            id={`custom-radio2`}
            label={`Pengumuman`}
          />
        </Row>
        <input type="file" />
        <TextareaAutosize placeholder={`Ketik di sini...`} className="new" />
      </Form>
      <Button variant="success">Success</Button>
    </div>
  );
}

export default New;
