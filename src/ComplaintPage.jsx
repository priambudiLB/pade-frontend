import React, { useEffect, useState } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function ComplaintPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = `PADE - Pengaduan`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        proxyurl +
          `https://pade-arkavidia-backend.herokuapp.com/api/all-reports`
      )
      .then(res => {
        setData(res.data.all_reports);
        console.log(data);
      }).catch(e => {
        setData([{"report_id":0,"sender_phone_no":"081213141516","sender_name":"Izzan Fakhril Islam","report_category":"Infrastruktur","last_report_status":"Diproses Admin"},{"report_id":2,"sender_phone_no":"081213141516","sender_name":"Izzan Fakhril Islam","report_category":"Infrastruktur","last_report_status":"Menunggu Persetujuan Admin"},{"report_id":3,"sender_phone_no":"082112344321","sender_name":"Priambudi Lintang Bagaskara","report_category":"Bencana","last_report_status":"Menunggu Persetujuan Admin"}])
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getBadgeByStatus(category){
    switch (category){
      case 'Ditolak Admin':
        return 'danger';
      case 'Diterima Admin':
        return 'primary';
      case 'Selesai':
        return 'success';
      default:
        return 'light'
    }
  }
  return (
    <AdminPage
      header={<PageHeader text={"Pengaduan"} />}
      content={
        <div className="tableFixHead">
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th className="id">ID</th>
                <th>No. Pengirim</th>
                <th className="nama">Nama Pengirim</th>
                <th>Kategori</th>
                <th className="status">Status</th>
                <th className="aksi">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(i => {
                return (
                  <tr>
                    <td className="id">{i.report_id}</td>
                    <td>{i.sender_phone_no}</td>
                    <td class="nama">{i.sender_name}</td>
                    <td>{i.report_category} </td>
                    <td className="status">
                      <Badge variant={getBadgeByStatus(i.last_report_status)}>{i.last_report_status}</Badge>
                    </td>
                    <td className="aksi">
                      <Link to={"/admin/pengaduan/" + i.report_id}>
                        <Badge variant="info">Lihat</Badge>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      }
    />
  );
}

export default ComplaintPage;
