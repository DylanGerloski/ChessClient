import React from "react";
import { Link } from "react-router-dom";

const MainNavBar = () => {
  return (
    <nav className="main-nav-bar-container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/ExploreOpenings">
        ExploreOpenings
      </Link>

      <Link className="nav-link" to="/LinePractice">
        Line Practice
      </Link>

      <Link className="nav-link" to="OpeningRush">
        Opening Rush
      </Link>
    </nav>
  );
};

export default MainNavBar;
