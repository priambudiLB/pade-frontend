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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container>
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dashboard" component={DashboardPage} />
          <Route path="/admin/statistic" component={StatisticPage} />
          <Route exact path="/admin/complaint" component={ComplaintPage} />
          <Route exact path="/admin/complaint/:id" component={DetailPage} />
          <Route path="/admin/event" component={EventPage} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
