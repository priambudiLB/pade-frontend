import React from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import pakdeAdmin from "./padeAdmin.svg";
import exit from "./exit.svg";

const getClassFromURL = url => {
  return window.location.pathname.split('/').slice(1,3)[0] === url.split('/')[1] ? "active" : "nav-link";
};

const isActive = url => {
  return window.location.pathname.split('/')[2] === ("/" + url).split('/')[2] ? true : false;
};

const NavLink = props => (
  <Nav.Link
    active={isActive(props.url)}
    className={getClassFromURL(props.url)}
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
    <Navbar className="pade-nav" expand="lg">
      <Container>
        <Navbar.Brand href="/admin/dashboard">
          <img className="brand" src={pakdeAdmin} alt={"pakde"} />
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
              <img className="exit" src={exit} alt={"pakde"} />
              Keluar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
