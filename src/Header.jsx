import React from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import pakdeAdmin from "./padeAdmin.svg";
import exit from "./exit.svg";

const getClassFromURL = url => {
  console.log(window.location.pathname+' '+url)
  return window.location.pathname === url ? "active" : "nav-link";
};

const isActive = url => {
  return window.location.pathname === "/" + url ? true : false;
};

const NavLink = props => (
  <Nav.Link
    active={isActive(props.url)}
    class={getClassFromURL(props.url)}
    href={`/${props.url}`}
  >
    <strong>{props.text}</strong>
  </Nav.Link>
);

function Header() {
  return window.location.pathname === "/admin" ||
    window.location.pathname === "/" ? (
    <></>
  ) : (
    <Navbar class="pade-nav" expand="lg">
      <Container>
        <Navbar.Brand href="/admin/dashboard">
          <img class="brand" src={pakdeAdmin} alt={"pakde"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink url="admin/dashboard" text="Dashboard" />
            <NavLink url="admin/event" text="Event" />
            <NavLink url="admin/complaint" text="Complaint" />
            <NavLink url="admin/statistic" text="Statistik" />
          </Nav>
          <Nav>
            <Nav.Link href="/admin">
              <img class="exit" src={exit} alt={"pakde"} />
              Keluar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
