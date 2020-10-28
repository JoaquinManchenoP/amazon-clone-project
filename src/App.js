import React, { useEffect } from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.component.jsx";
import Subheader from "./Header/Subheader.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/checkout.component";
import Login from "./login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";
import Payment from "./payment/Payment.component";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);

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
          <Route path="/payment">
            <Header />

            <Payment />
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
