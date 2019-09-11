import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { createRoutes } from "./utils";
import routesConfig from "./routesConfig";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>{createRoutes(routesConfig)}</Switch>
      </Router>
    );
  }
}

export default Routes;
