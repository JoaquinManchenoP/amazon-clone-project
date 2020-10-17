import React from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.component.jsx";
import Subheader from "./Header/Subheader.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/checkout.component";
import Login from "./login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
