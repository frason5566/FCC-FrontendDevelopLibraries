import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Pages/Home";
import Footer from "./Pages/Home/Components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
