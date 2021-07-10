import React from "react";
import {Router, Switch, Route } from "react-router-dom";
import DashBoardComponent from "../views/DashBoard/index";
import history from "../services/history";
import NotFound from "../views/NotFoundPage/index";


const AllPages = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={DashBoardComponent} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default AllPages;
