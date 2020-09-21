import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Components from "views/Components/Components";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router >
    <Switch>
      <Route exact path="/test" component={Components} />
      <Route exact path="/" component={ProfilePage} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
