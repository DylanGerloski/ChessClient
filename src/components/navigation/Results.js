import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEndPosition } from "../../actions/lp_actions/setEndPosition";
import { setFen } from "../../actions/eo_actions/setFen";
import { setStartPosition } from "../../actions/lp_actions/setStartPostion";
import { startChosen, startReset } from "../../actions/lp_actions/startChosen";
import { endReset } from "../../actions/lp_actions/endChosen";

const Results = (props) => {
  let key = 0;
  const mainName = useSelector(
    (reducer) => reducer.exploreOpenings.openingName
  );
  const layout = useSelector((reducer) => reducer.openings.display);

  const variations = useSelector((reducer) => reducer.openings.variations);
  const varWithContinuation = variations.filter(
    (vars) => vars.hasCont === true
  );
  console.log(variations);
  // const getContinuations = () => {
  //   variations.filter(variation => )
  // }
  //state of search bar for filtering through variations
  const [searchVal, setSearchVal] = useState("");

  const dynamicSearch = () => {
    if (searchVal === "") {
      return [];
    } else {
      return variations.filter((variation) =>
        variation.name.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
  };

  const searcedVariations = dynamicSearch(searchVal);

  const dispatch = useDispatch();

  useEffect(() => {
    let mainOpening = variations.filter((opening) => opening.name === mainName);
    if (mainOpening.length === 0) {
      mainOpening.push(variations[0]);
    }
    if (layout === "EO") {
      dispatch(setFen(mainOpening[0].fen));
    } else if (layout === "LP") {
      dispatch(
        setStartPosition(
          mainOpening[0].name,
          mainOpening[0].eco,
          mainOpening[0].fen,
          mainOpening[0].an
        )
      );
    }
  }, [variations, mainName, dispatch, layout]);

  key = 0;
  if (props.display === "results") {
    return (
      <div className="results-container">
        <div className="top-container">
          <button
            className="back-button"
            onClick={() => {
              if (layout === "EO") {
                props.setDisplay(props.option);
                dispatch(setFen("start"));
              } else if (layout === "LP") {
                dispatch(setStartPosition("", "", "start", ""));
                dispatch(setEndPosition("", "", "start", ""));
                dispatch(startReset());
                dispatch(endReset());
                props.setDisplay(props.option);
              }
            }}
          >
            <p>Back</p>
          </button>
        </div>
        <h2 className="results-title">{mainName}</h2>
        <div className="variations-container">
          <div>
            <input
              className="results-search-bar"
              type="text"
              placeholder="name "
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
          {searchVal.length === 0
            ? varWithContinuation.map((vars) => {
                return (
                  <button
                    onClick={() => {
                      if (layout === "EO") {
                        dispatch(setFen(vars.fen));
                      } else if (layout === "LP") {
                        dispatch(
                          setStartPosition(
                            vars.name,
                            vars.eco,
                            vars.fen,
                            vars.an
                          )
                        );
                        dispatch(setEndPosition("", "", "start", ""));
                        dispatch(startChosen());
                        dispatch(endReset());
                      }
                    }}
                    className="variation-button"
                    key={key++}
                  >
                    <h3>{vars.name}</h3>
                    <p> {vars.an}</p>
                  </button>
                );
              })
            : searcedVariations.map((variation) => {
                return (
                  <button
                    onClick={() => {
                      if (layout === "EO") {
                        dispatch(setFen(variation.fen));
                      } else if (layout === "LP") {
                        dispatch(
                          setStartPosition(
                            variation.name,
                            variation.eco,
                            variation.fen,
                            variation.an
                          )
                        );
                        dispatch(setEndPosition("", "", "start", ""));
                        dispatch(startChosen());
                        dispatch(endReset());
                      }
                    }}
                    className="variation-button"
                    key={key++}
                  >
                    <h3>{variation.name}</h3>
                    <p> {variation.an}</p>
                  </button>
                );
              })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Results;
