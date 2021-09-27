import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { HomePage, Categories, RandomPage } from "./pages/index";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/random">
          <RandomPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
