import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpeningName } from "../../actions/eo_actions/setOpeningName";
import { getVariations } from "../../actions/openings/getVariations.js";
import { setStartPosition } from "../../actions/lp_actions/setStartPostion";

import Results from "./Results";
const SearchBar = () => {
  const names = useSelector((reducer) => reducer.openings.mainOpenings);
  const layout = useSelector((reducer) => reducer.openings.display);

  const [display, setDisplay] = useState("search-bar");
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const dynamicSearch = () => {
    if (val === "") {
      return [];
    } else {
      return names.filter((name) =>
        name.firstName.toLowerCase().includes(val.toLowerCase())
      );
    }
  };
  const searchedNames = dynamicSearch(val);
  const [clicked, setClicked] = useState(false);
  let id = 0;

  if (display === "search-bar") {
    return (
      <div className="search__bar">
        <input
          className="search__bar__input"
          type="text"
          placeholder="Name"
          onChange={(e) => setVal(e.target.value)}
        />

        {val.length > 0 ? (
          <div className="search__bar__results">
            {searchedNames.map((name) => {
              return (
                <button
                  className="name_button"
                  key={id++}
                  onClick={() => {
                    setClicked(true);
                    dispatch(setOpeningName(name.firstName));

                    dispatch(getVariations(name.firstName, name.eco)).then(
                      setDisplay("results")
                    );
                  }}
                >
                  {name.firstName}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  } else if (display === "results") {
    return (
      <Results
        display={display}
        setDisplay={setDisplay}
        option={"search-bar"}
      ></Results>
    );
  } else {
    return <div>something wrent wrong</div>;
  }
};

export default SearchBar;
