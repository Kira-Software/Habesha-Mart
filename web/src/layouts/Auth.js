import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "./../components/Navbars/AuthNavbar.js";
import FooterSmall from "./../components/Footers/FooterSmall.js";

// views

import Login from "./../pages/login.js";
import Register from "./../pages/register.js";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" +
                require("./../assets/img/register_bg_2.png").default +
                ")",
            }}
          ></div>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Redirect from="/auth" to="/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
