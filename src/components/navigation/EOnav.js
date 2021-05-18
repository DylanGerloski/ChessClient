import React, { useState } from "react";
import SearchTree from "./SearchTree";
import SearchBar from "./SearchBar";

const EOnav = (props) => {
  const [searchChoice, setSearchChoice] = useState("");
  const [display, setDisplay] = useState("nav");
  const renderSearchOption = () => {
    switch (searchChoice) {
      case "search-tree":
        return <SearchTree></SearchTree>;
      case "search-bar":
        return <SearchBar></SearchBar>;
      default:
        return <></>;
    }
  };
  return (
    <div className="eonavbox-container">
      <div className="nav-choices-container">
        <button
          onClick={() => setSearchChoice("search-tree")}
          className="search-tree-button"
        >
          <h2>Search Tree</h2>
        </button>
        <button
          onClick={() => setSearchChoice("search-bar")}
          className="search-bar-button"
        >
          <h2>Search Bar</h2>
        </button>
      </div>
      <div className="nav-search-option-container">{renderSearchOption()}</div>
    </div>
  );
};

export default EOnav;
