import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextApiProvider from "./context/ContextApi";

ReactDOM.render(
  <React.StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
