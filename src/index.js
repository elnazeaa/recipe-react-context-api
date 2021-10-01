import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextApiProvider from "./context/ContextApi";
import ContextDetailProvider from "./context/ContextDetailId";
import ContextRandMealProvider from "./context/ContextRandomMeal";

ReactDOM.render(
  <React.StrictMode>
    <ContextApiProvider>
      <ContextDetailProvider>
        <ContextRandMealProvider>
          <App />
        </ContextRandMealProvider>
      </ContextDetailProvider>
    </ContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
