import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Login, ProtectedPage, Register } from "./pages";
import React, { useContext } from "react";
import authContext from "./context/authContext";
import AddItem from "./pages/AddItem";
import SearchResult from "./pages/SearchResult";
import Item from "./pages/item";
import Profile from "./pages/profile";
import AboutSeller from "./pages/aboutSeller";
import ItemListSeller from "./pages/itemListSeller";
import AdminDashboard from "./pages/adminDashboard";
import classC from "./pages/ClassC";
import ClassC from "./pages/ClassC";
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
      <Route exact path="/additem">
        <AddItem />
      </Route>
      <Route exact path="/item">
        <Item />
      </Route>
      <Route exact path="/search">
        <SearchResult />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <ClassC />
      </Route>
      <Route exact path="/about-seller">
        <AboutSeller />
      </Route>
      <Route exact path="/item-list">
        <ItemListSeller />
      </Route>
      <Route exact path="/dashboard">
        <AdminDashboard />
      </Route>
      <RedirectWhenLoggedIn exact path="/register" component={Register} />
      <RedirectWhenLoggedIn exact path="/login" component={Login} />
      <ProtectedRoute exact path="/protected" component={ProtectedPage} />
    </Switch>
  );
};

export default Routes;
