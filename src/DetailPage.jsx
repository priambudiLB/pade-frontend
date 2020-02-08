import React, { useEffect, useState } from "react";
import "./App.css";
import AdminPage from "./AdminPage";
import { Row, Container, Col, Dropdown, Button } from "react-bootstrap";
import arrowLeft from "./arrowLeft.svg";
import { Link } from "react-router-dom";
import useWindowDimensions from "./useWindowDimension";

function getPageFromURL(url){
  return url.split('/')[2];
}
function DetailPage(props) {
  useEffect(() => {
    document.title = `PADE - ${getPageFromURL(window.location.pathname)} - ${props.match.params.id}`;
    setSelected("Menunggu Persetujuan Admin")
    setOld("Menunggu Persetujuan Admin")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(evt){
    console.log(evt)
    setSelected(evt)
  }

  function getClassByWidth(width){
    return width >= 768 ? 'go-right' : '';
  
  }
  const [old, setOld] = useState('');
  const [selected, setSelected] = useState('');
  const {width} = useWindowDimensions();
  return (
    <AdminPage
      header={
        <Container>
          <Link to={`/admin/${getPageFromURL(window.location.pathname)}`}>
            <Row>
              <img className="arrow" src={arrowLeft} alt={"pakde"} />
              <div className="back-to">
                <strong>Kembali ke halaman {getPageFromURL(window.location.pathname)}</strong>
              </div>
            </Row>
          </Link>
        </Container>
      }
      content={
        <Container className="space-bottom">
          <hr></hr>
          <Row className="space-row">
            <Col className={getClassByWidth(width)}>
              <strong>ID</strong>
            </Col>
            <Col md={10}>{width}</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Pengirim</strong>
            </Col>
            <Col md={10}>Alekey</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Kategori</strong>
            </Col>
            <Col md={10}>aaa</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Isi</strong>
            </Col>
            <Col md={10}>
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
          <Col className={getClassByWidth(width)}>
              <strong>Status</strong>
            </Col>
            <Col md={10}>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey='Menunggu Persetujuan Admin'>
                    Menunggu Persetujuan Admin
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='Diproses'>Diproses</Dropdown.Item>
                  <Dropdown.Item eventKey='Diterima'>Diterima</Dropdown.Item>
                  <Dropdown.Item eventKey='Ditolak'>Ditolak</Dropdown.Item>
                  <Dropdown.Item eventKey='Selesai'>Selesai</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="space">
          <Col className={getClassByWidth(width)}></Col>
            <Col md={10}>
              <Button disabled={old === selected} variant="dark" type="submit">
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
