import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
