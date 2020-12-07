import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
