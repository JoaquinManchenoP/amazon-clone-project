import React from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.component.jsx";
import Subheader from "./Header/Subheader.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/checkout.component";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Subheader />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
