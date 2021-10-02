import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextApiProvider from "./context/ContextApi";
import ContextCategoryProvider from "./context/ContextCategory";
import ContextDetailProvider from "./context/ContextDetailId";

ReactDOM.render(
  <React.StrictMode>
    <ContextApiProvider>
      <ContextDetailProvider>
        <ContextCategoryProvider>
          <App />
        </ContextCategoryProvider>
      </ContextDetailProvider>
    </ContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
