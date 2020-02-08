import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import { Container } from "react-bootstrap";
import DashboardPage from "./DashboardPage";
import StatisticPage from "./StatisticPage";
import ComplaintPage from "./ComplaintPage";
import EventPage from "./EventPage";
import DetailPage from "./DetailPage";
import HomePage from "./HomePage";
import StatusPage from "./StatusPage";
import New from "./New";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/status" component={StatusPage} />
          <Route exact path="/new" component={New} />
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dasbor" component={DashboardPage} />
          <Route path="/admin/statistik" component={StatisticPage} />
          <Route exact path="/admin/keluhan" component={ComplaintPage} />
          <Route exact path="/admin/keluhan/:id" component={DetailPage} />
          <Route exact path="/admin/pengumuman" component={EventPage} />
          <Route exact path="/admin/pengumuman/:id" component={DetailPage} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
