import React, { useEffect, useState } from "react";
import "./App.css";
import AdminPage from "./AdminPage";
import { Row, Container, Col, Dropdown, Button } from "react-bootstrap";
import arrowLeft from "./arrowLeft.svg";
import { Link } from "react-router-dom";
import useWindowDimensions from "./useWindowDimension";
import axios from 'axios';

function getPageFromURL(url){
  return url.split('/')[2];
}
function DetailPage(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    document.title = `PADE - ${getPageFromURL(window.location.pathname)} - ${props.match.params.id}`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        proxyurl +
          `https://pade-arkavidia-backend.herokuapp.com/api/report/${props.match.params.id}/`
      )
      .then(res => {
        setData(res.data);
        setSelected(res.data.report_last_status)
        setOld(res.data.report_last_status)
        console.log(res);
      }).catch(e=>{
        setData({"report_id":"1","report_content":"Jalanan depan rumah rusak parah, sudah 5 bulan gaada perbaikan.","report_sender_phone_no":"081213141516","report_sender_name":"Izzan Fakhril Islam","report_last_status":"Diproses Admin","report_category":"Infrastruktur"})
        setSelected("Diproses")
        console.log(e)
        setOld("Diproses")
      });
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
            <Col md={10}>{data.report_id}</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Pengirim</strong>
            </Col>
            <Col md={10}>{data.report_sender_name}</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Kategori</strong>
            </Col>
            <Col md={10}>{data.report_category}</Col>
          </Row>
          <Row className="space-row">
          <Col className={getClassByWidth(width)}>
              <strong>Isi</strong>
            </Col>
            <Col md={10}>
              {data.report_content}
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
                  <Dropdown.Item eventKey='Diproses Admin'>Diproses Admin</Dropdown.Item>
                  <Dropdown.Item eventKey='Diterima Admin'>Diterima Admin</Dropdown.Item>
                  <Dropdown.Item eventKey='Ditolak Admin'>Ditolak Admin</Dropdown.Item>
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
