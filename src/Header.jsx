import React from "react";
import "./App.css";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import pakdeAdmin from "./padeAdmin.svg";
import padePortal from "./padePortal.svg";
import exit from "./exit.svg";
import { Link } from "react-router-dom";

const getClassFromURL = url => {
  return window.location.pathname.split("/").slice(1, 3)[0] ===
    url.split("/")[1]
    ? "active"
    : "nav-link";
};

const isActive = url => {
  return window.location.pathname.split("/")[2] === ("/" + url).split("/")[2]
    ? true
    : false;
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
    window.location.pathname === "/" ||
    window.location.pathname === "/login" ? (
    <></>
  ) : window.location.pathname === "/home" ||
    window.location.pathname === "/status" ||
    window.location.pathname === "/new" ? (
    <Navbar sticky="top" className="pade-nav" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img className="portal" src={padePortal} alt={"pakde"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to={"/new"}>
              <Button variant="outline-primary">Buat Baru</Button>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Informasi
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>APBDES</Dropdown.Item>
                <Dropdown.Item>Pemilihan Kepala Desa</Dropdown.Item>
                <Dropdown.Item>Publikasi Desa</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Lainnya</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Bagas
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="status">Status</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/">Keluar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar className="pade-nav" expand="lg">
      <Container>
        <Navbar.Brand href="/admin/dasbor">
          <img className="brand" src={pakdeAdmin} alt={"pakde"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink url="admin/dasbor" text="Dasbor" />
            <NavLink url="admin/pengumuman" text="Pengumuman" />
            <NavLink url="admin/keluhan" text="Keluhan" />
            <NavLink url="admin/statistik" text="Statistik" />
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
