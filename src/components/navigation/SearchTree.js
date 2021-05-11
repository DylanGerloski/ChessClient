import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import volumes from "./volumeDescriptions.js";
import { getVariations } from "../../actions/openings/getVariations.js";
import { setOpeningName } from "../../actions/exploreOpenings/setOpeningName";
import Results from "./Results";

const SearchTree = (props) => {
  const [volumeId, setVolumeId] = useState(0);
  const mainOpenings = useSelector((reducer) => reducer.openings.mainOpenings);
  const [openingNames, setName] = useState([]);
  const [display, setDisplay] = useState("search-tree");
  console.log();
  const dispatch = useDispatch();
  const getCodeNames = (code) => {
    const indeces = [];
    if (code.substring(0, 3) === "B20") {
      return [{ name: "Sicilian Defense", eco: "B20" }];
    }
    if (code.substring(0, 3) === "C00") {
      return [{ name: "French Defense", eco: "C00" }];
    }
    if (code.substring(0, 3) === "D70") {
      return [
        { name: "Neo-Grünfeld Defense", eco: "D70" },
        { name: "Grünfeld Defense", eco: "D80" },
      ];
    }

    for (let i = 0; i < mainOpenings.length; i++) {
      if (
        mainOpenings[i].eco === code.substring(0, 3) ||
        mainOpenings[i].eco === code.substring(4, 7)
      ) {
        indeces.push(i);
      }
    }
    if (code.substring(0, 3) === "C20") {
      indeces.push(147);
    }
    if (code.substring(0, 3) === "D00") {
      indeces.push(160);
    }

    if (code.substring(0, 3) === "E00") {
      indeces.push(169);
    }

    if (code.substring(0, 3) === "E60") {
      indeces.push(173);
    }
    const names = [];
    for (let j = indeces[0]; j < indeces[indeces.length - 1]; j++) {
      names.push({ name: mainOpenings[j].firstName, eco: mainOpenings[j].eco });
    }
    return names;
  };

  const handleNextVolClick = () => {
    if (volumeId != 4) {
      setVolumeId(volumeId + 1);
      setName([]);
    }
  };

  const handlePreviousVolClick = () => {
    if (volumeId != 0) {
      setVolumeId(volumeId - 1);
      setName([]);
    }
  };
  let key = 0;

  const buttonToggleNext = {
    display: volumeId != 4 ? "block" : "none",
  };
  const buttonTogglePrevious = {
    display: volumeId != 0 ? "block" : "none",
  };
  if (display == "search-tree") {
    return (
      <div className="search-tree-container">
        <div className="volume-head">
          <div className="vol-button-container">
            {" "}
            <button
              onClick={() => handlePreviousVolClick()}
              className="previous-vol-button"
              style={buttonTogglePrevious}
            >
              {"previous"}
            </button>
            <button
              onClick={() => handleNextVolClick()}
              className="next-vol-button"
              style={buttonToggleNext}
            >
              {"next"}
            </button>
          </div>
          <div className="head-title">
            <h3>{volumes[volumeId].letter}</h3>
            <p>{volumes[volumeId].description}</p>
          </div>
        </div>
        <div className="volume-codes">
          {volumes[volumeId].codes.map((code) => {
            return (
              <button
                onClick={() => {
                  setName(getCodeNames(code.code));
                }}
                key={code.code}
                className="code-container"
              >
                <h4>{code.code}</h4>
                <p style={{ padding: "0.5rem" }}>{code.description}</p>
              </button>
            );
          })}
        </div>
        <div className="volume-code-openings">
          {openingNames.map((name) => {
            return (
              <button
                onClick={() => {
                  dispatch(setOpeningName(name.name));
                  dispatch(getVariations(name.name, name.eco));
                  setDisplay("results");
                }}
                className="mainOpening-button"
                key={key++}
              >
                {name.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else if (display === "results") {
    return (
      <Results
        display={display}
        setDisplay={setDisplay}
        option={"search-tree"}
      ></Results>
    );
  } else {
    return <div>whoops</div>;
  }
};

export default SearchTree;
