import React from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    ////firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt=""
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/012015/amazon-logo-rgb.png?itok=VaPUAQJF"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in </h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use and Privacy
          Notice
        </p>

        <span className="help">Need Help?</span>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
