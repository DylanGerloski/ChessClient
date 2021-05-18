import React, { useState } from "react";
import HomePage from "./components/layouts/Homepage";
import OpeningRush from "./components/layouts/OpeningRush";
import EOlayout from "./components/layouts/EOlayout";
import LPlayout from "./components/layouts/LPlayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavBar from "./components/navigation/MainNavBar";
import "./sass/style.scss";
const App = () => {
  return (
    <div className="page-container">
      <Router>
        <MainNavBar></MainNavBar>
        <Switch>
          <Route exact path="/">
            {" "}
            <HomePage></HomePage>
          </Route>
          <Route path="/ExploreOpenings">
            {" "}
            <EOlayout></EOlayout>
          </Route>
          <Route path="/LinePractice">
            {" "}
            <LPlayout></LPlayout>
          </Route>
          <Route path="/OpeningRush">
            {" "}
            <OpeningRush></OpeningRush>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
