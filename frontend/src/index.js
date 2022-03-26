import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css"; //external css
import "./index.css";
import "./styles/main.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
