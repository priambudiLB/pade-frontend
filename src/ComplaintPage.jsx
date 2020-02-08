import React, { useEffect } from "react";
import "./App.css";
import { PageHeader } from "./PageHeader";
import AdminPage from "./AdminPage";
import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const data = {
  'data': [
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'Informasi Kepemerintahan',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'Informasi Kepemerintahan',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 1,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 2,
      'no_pengirim': '0123123120',
      'nama_pengirim': 'adadscass',
      'kategori': 'acasdcsccadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
    {
      'id': 3,
      'no_pengirim': '0120',
      'nama_pengirim': 'adads',
      'kategori': 'acacadc',
      'status': 'Menunggu Persetujuan Admin',
    },
  ]
}
function ComplaintPage() {
  useEffect(() => {
    document.title = `PADE - Keluhan`;
  });
  return (
    <AdminPage
      header={<PageHeader text={"Keluhan"} />}
      content={
        <div className="tableFixHead">
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th class="id">ID</th>
              <th>No. Pengirim</th>
              <th class="nama">Nama Pengirim</th>
              <th>Kategori</th>
              <th className="status">Status</th>
              <th class="aksi">Aksi</th>
            </tr>
          </thead>
          <tbody>
          { data.data.map(i=>{
            return <tr>
              <td class="id">{i.id}</td>
              <td>{i.no_pengirim}</td>
              <td class="nama">{i.nama_pengirim}</td>
              <td>{i.kategori} </td>
              <td className="status"><Badge variant="danger">{i.status}</Badge></td>
              <td class="aksi"><Link to={'/admin/keluhan/'+i}><Badge variant="info">Lihat</Badge></Link></td>
            </tr>
          })}
          </tbody>
        </Table>
        </div>
      }
    />
  );
}

export default ComplaintPage;
