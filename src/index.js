import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextApiProvider from "./data/contextApi";

ReactDOM.render(
  <ContextApiProvider>
    <App />
  </ContextApiProvider>,

  document.getElementById("root")
);
