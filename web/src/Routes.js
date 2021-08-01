import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Login, ProtectedPage, Register } from "./pages";
import React, { useContext } from "react";
import authContext from "./context/authContext";
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { loggedInState } = useContext(authContext);

  if (loggedInState.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedInState.isLoggedIn === false ? (
          <Redirect to="/login" />
        ) : loggedInState.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <div></div>
        )
      }
    />
  );
}

const RedirectWhenLoggedIn = ({ component: Component, ...restOfProps }) => {
  const { loggedInState } = useContext(authContext);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedInState.isLoggedIn === true ? (
          <Redirect to="/protected" />
        ) : loggedInState.isLoggedIn === false ? (
          <Component {...props} />
        ) : (
          <></>
        )
      }
    />
  );
};
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <RedirectWhenLoggedIn exact path="/register" component={Register} />
      <RedirectWhenLoggedIn exact path="/login" component={Login} />
      <ProtectedRoute exact path="/protected" component={ProtectedPage} />
    </Switch>
  );
};

export default Routes;
