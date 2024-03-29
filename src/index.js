import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main.scss";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
