import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import {
  HomePage,
  Categories,
  RandomPage,
  MealDetailPage,
  MealByCatsPage,
} from "./pages/index";
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
        <Route exact path={`/detail/:id`}>
          <MealDetailPage />
        </Route>
        <Route exact path={`/category/:name`}>
          <MealByCatsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
