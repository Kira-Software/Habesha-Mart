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
import Dashboard from "./pages/Dashboard";
import ClassC from "./pages/ClassC";
import { useSelector, useDispatch } from "react-redux";

import EditProfile from "./pages/editProfile";
import EditItem from "./pages/editItem";
import About from "./pages/about";
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";
import UpgradeAccount from "./pages/upgradeAccount";
import RequestItems from "./pages/requestItem";
import ReplyForRequest from "./pages/replyForRequest";
//import ClassC from "./pages/ClassC";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = useSelector(
    (state) => state.authreducer.isAuthenticated
  );
  const user = useSelector((state) => state.authreducer.user);
  const loading = useSelector((state) => state.authreducer.loading);

  //const { loggedInState } = useContext(authContext);

  // if (isAuthenticated.loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !isAuthenticated && !loading ? (
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
  const loading = useSelector((state) => state.authreducer.loading);
  const user = useSelector((state) => state.authreducer.user);

  //const { isAuthenticated } = useContext(authContext);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated && !loading ? (
          user.role === "admin" ? (
            <Redirect to="/dashboard" />
          ) : user.role === "classCustomer" ? (
            <Redirect to="/" />
          ) : user.role === "seller" || "broker" ? (
            <Redirect to="/profile" />
          ) : null
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const Routes = () => {
  const loading = useSelector((state) => state.authreducer.loading);
  const user = useSelector((state) => state.authreducer.user);
  return (
    <Switch>
      {user !== null ? (
        <ProtectedRoute exact path="/" component={ClassC} />
      ) : (
        <Route exact path="/">
          <ClassC />
        </Route>
      )}
      {/* <Route exact path="/">
        <ClassC />
<<<<<<< HEAD
      </Route>
      <Route path="/admin" component={Admin} />
      <Route path="/about" component={About} />
      <Route path="/auth" component={Auth} />
      <Route exact path="/upgrade-account">
        <UpgradeAccount />
      </Route>
=======
      </Route> */}
      <ProtectedRoute exact path="/upgrade-account"  component={UpgradeAccount} />
        
    
>>>>>>> 4874ba4fd52167dfb7a5fceacd71f20fe8f19742
      <Route exact path="/request-item">
        <RequestItems />
      </Route>
      <Route exact path="/reply-for-request">
        <ReplyForRequest />
      </Route>
      <Route exact path="/item">
        <Item />
      </Route>
      <ProtectedRoute exact path="/edit-item" component={EditItem} />

      <Route exact path="/search">
        <SearchResult />
      </Route>
      <ProtectedRoute exact path="/profile" component={Profile} />

      <Route exact path="/about-seller">
        <AboutSeller />
      </Route>
      <Route exact path="/item-list">
        <ItemListSeller />
      </Route>
      {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <ProtectedRoute exact path="/edit-profile" component={EditProfile} />

      <RedirectWhenLoggedIn exact path="/register" component={Register} />
      <RedirectWhenLoggedIn exact path="/login" component={Login} />
      <ProtectedRoute exact path="/protected" component={ProtectedPage} />
      <Route exact path="/additem" component={AddItem} />
    </Switch>
  );
};

export default Routes;
