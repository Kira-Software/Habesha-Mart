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

import { useSelector, useDispatch } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = useSelector(
    (state) => state.authreducer.isAuthenticated
  );
  const isLoading = useSelector((state) => state.authreducer.isLoading);

  //const { loggedInState } = useContext(authContext);

  // if (isAuthenticated.isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !isAuthenticated && !isLoading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

const RedirectWhenLoggedIn = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = useSelector(
    (state) => state.authreducer.isAuthenticated
  );
  const isLoading = useSelector((state) => state.authreducer.isLoading);

  //const { isAuthenticated } = useContext(authContext);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && !isLoading ? (
          <Redirect to="/protected" />
        ) : (
          <Component {...props} />
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

      <Route exact path="/item">
        <Item />
      </Route>
      <Route exact path="/search">
        <SearchResult />
      </Route>
      <Route exact path="/profile">
        <Profile />
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
      <Route exact path="/additem" component={AddItem} />
    </Switch>
  );
};

export default Routes;
