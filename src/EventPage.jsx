import React, { useEffect, useState } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

function EventPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = `PADE - Statistik`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        proxyurl +
          `https://pade-arkavidia-backend.herokuapp.com/api/all-announcements`
      )
      .then(res => {
        setData(res.data.all_announcements);
        console.log(res);
      }).catch(e => {
        setData([{"report_id":0,"sender_phone_no":"081213141516","sender_name":"Izzan Fakhril Islam","report_category":"Infrastruktur","last_report_status":"Diproses Admin"},{"report_id":2,"sender_phone_no":"081213141516","sender_name":"Izzan Fakhril Islam","report_category":"Infrastruktur","last_report_status":"Menunggu Persetujuan Admin"},{"report_id":3,"sender_phone_no":"082112344321","sender_name":"Priambudi Lintang Bagaskara","report_category":"Bencana","last_report_status":"Menunggu Persetujuan Admin"}])
      });
  });
  return (
    <AdminPage
      header={<PageHeader text={"Pengumuman"} />}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>No. Pengirim</th>
              <th>Kategori</th>
              <th>Isi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { data.map(i=>{
            return <tr>
              <td>{i.announcement_id}</td>
              <td>{i.announcement_sender_phone_no}</td>
              <td>{i.announcements_category}</td>
              <td>{i.announcement_content}</td>
              <Link to={'/admin/pengumuman/'+i}>
              <td><Link to={'/admin/pengumuman/'+i}><Badge variant="info">Lihat</Badge></Link></td>
              </Link>
            </tr>
          })}
          </tbody>
        </Table>
        </div>
      }
    />
  );
}

export default EventPage;
