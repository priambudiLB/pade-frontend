import React from "react";
import "./App.css";
import AdminPage from "./AdminPage";
import { Row, Container, Col, Dropdown, Button } from "react-bootstrap";
import arrowLeft from "./arrowLeft.svg";

function DetailPage() {
  return (
    <AdminPage
      header={
        <Container>
          <Row>
            <img class="arrow" src={arrowLeft} alt={"pakde"} />
            <div className="back-to">
              <strong>Kembali ke halaman Complaint</strong>
            </div>
          </Row>
        </Container>
      }
      content={
        <Container>
          <hr></hr>
          <Row className="space-row">
            <Col className="go-right">
              <strong>ID</strong>
            </Col>
            <Col xs={8}>2 of 3 (wider)</Col>
          </Row>
          <Row className="space-row">
            <Col className="go-right">
              <strong>Content</strong>
            </Col>
            <Col xs={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis ex tortor, vel tempus nunc vulputate eget. Donec porta
              suscipit pretium. Sed nec ligula elit. Nullam non dolor vitae quam
              molestie mollis vitae vitae felis. Nulla eu ipsum maximus, ornare
              leo ut, tincidunt risus. Donec lacinia tellus nec neque vulputate
              lobortis. Sed tincidunt ornare sodales. Nam et lacus eget lacus
              consectetur luctus. Fusce consectetur quis elit quis lacinia. Nam
              tristique tellus at nunc aliquet, in commodo sem suscipit. Nam
              lectus lectus, laoreet ut augue ut, facilisis congue dui. Nulla
              placerat nunc ac massa vehicula, eu porttitor ipsum ornare. Nunc
              nulla ante, dignissim eu venenatis faucibus, efficitur et ex.
              Praesent malesuada turpis mollis efficitur venenatis. Nam
              porttitor nulla sed quam mattis, nec lacinia nulla sodales.
              Pellentesque ut nibh non odio accumsan egestas. Nulla facilisi.
              Sed luctus, tellus a commodo luctus, justo libero blandit turpis,
              et malesuada velit dolor non eros. Vestibulum id magna quis nisl
              laoreet gravida sit amet sit amet ante. Maecenas at ligula eros.
              Ut finibus, velit et auctor cursus, enim ipsum ullamcorper nulla,
              quis bibendum tortor ligula eu ex. Fusce ac elementum nunc, vel
              semper odio. Integer feugiat est nec elementum suscipit.
            </Col>
          </Row>
          <Row className="space-row">
            <Col className="go-right">
              <strong>Sender</strong>
            </Col>
            <Col xs={8}>Alekey</Col>
          </Row>
          <Row className="space-row">
            <Col className="go-right">
              <strong>Status</strong>
            </Col>
            <Col xs={8}>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Diterima
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Menunggu Persetujuan Admin
                  </Dropdown.Item>
                  <Dropdown.Item>Diproses</Dropdown.Item>
                  <Dropdown.Item>Selesai</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Ditolak</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="space">
            <Col className="go-right"></Col>
            <Col xs={8}>
              <Button variant="dark" type="submit">
                Simpan
              </Button>
            </Col>
          </Row>
        </Container>
      }
    />
  );
}

export default DetailPage;
