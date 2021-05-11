import React, { useState } from "react";
import HomePage from "./components/layouts/Homepage";
import OpeningRush from "./components/layouts/OpeningRush";
import ExploreOpenings from "./components/layouts/ExploreOpenings";
import LinePractice from "./components/layouts/LinePractice";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./sass/style.scss";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {" "}
          <HomePage></HomePage>
        </Route>
        <Route path="/ExploreOpenings">
          {" "}
          <ExploreOpenings></ExploreOpenings>
        </Route>
        <Route path="/LinePractice">
          {" "}
          <LinePractice></LinePractice>
        </Route>
        <Route path="/OpeningRush">
          {" "}
          <OpeningRush></OpeningRush>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
