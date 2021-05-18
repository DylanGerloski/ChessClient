import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFen } from "../../actions/eo_actions/setFen";
import { setOpeningName } from "../../actions/eo_actions/setOpeningName";
import clearVariations from "../../actions/openings/clearVariations";
const Results = (props) => {
  let key = 0;
  const mainName = useSelector(
    (reducer) => reducer.exploreOpenings.openingName
  );
  const variations = useSelector((reducer) => reducer.openings.variations);
  const dispatch = useDispatch();

  useEffect(() => {
    let mainOpening = variations.filter((opening) => opening.name === mainName);
    if (mainOpening.length === 0) {
      mainOpening.push(variations[0]);
    }

    dispatch(setFen(mainOpening[0].fen));
  }, [variations]);

  key = 0;
  if (props.display === "results") {
    return (
      <div className="results-container">
        <button
          className="back-button"
          onClick={() => {
            props.setDisplay(props.option);
            dispatch(setFen("start"));
          }}
        >
          <p>Back</p>
        </button>
        <h2 className="results-title">{mainName}</h2>
        <div className="variations-container">
          {" "}
          {variations.map((vars) => {
            return (
              <button
                onClick={() => dispatch(setFen(vars.fen))}
                className="variation-button"
                key={key++}
              >
                <h3>{vars.name}</h3>
                <p> {vars.an}</p>
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
