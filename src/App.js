import React from "react";
import Header from "./Header/Header.js";
import Home from "./Home/Home.component.jsx";
import Subheader from "./Header/Subheader.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Subheader />
      <Home />
    </div>
  );
}

export default App;
