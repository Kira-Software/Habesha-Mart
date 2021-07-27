import { Switch, Route } from "react-router-dom";

import { Home, Login, Register } from "./pages";
import React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
