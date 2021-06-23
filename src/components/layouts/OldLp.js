import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChessBoard from "chessboardjsx";
import SearchBar from "../navigation/SearchBar";
import { getNames } from "../../actions/openings/getNames";
import clearVariations from "../../actions/openings/clearVariations";
import setDisplay from "../../actions/openings/setDsiplay";
import { setEndPosition } from "../../actions/lp_actions/setEndPosition";

const LPlayout = () => {
  const dispatch = useDispatch();
  const startPosition = useSelector(
    (reducer) => reducer.linePractice.startPosition
  );

  const endPosition = useSelector(
    (reducer) => reducer.linePractice.endPosition
  );

  const variations = useSelector((reducer) => reducer.openings.variations);
  useEffect(() => {
    dispatch(getNames());
    dispatch(setDisplay("LP"));
    return dispatch(clearVariations());
  }, [dispatch]);

  const openingSelectionStyles = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-evenly",
  };

  const getFinalPositions = (sP) => {
    const finalPos = variations.filter((opening) => opening.an.includes(sP.an));
    let key = 0;
    if (finalPos.fen === "start") {
      return <></>;
    }
    return finalPos.map((position) => {
      return (
        <button
          key={key++}
          onClick={() => dispatch(setEndPosition(position.fen, position.an))}
          style={{ display: "flex" }}
        >
          <h3>{position.name}</h3>
          <h4>{position.an}</h4>
        </button>
      );
    });
  };

  return (
    <div className="line-practice-container">
      <div className="lp-board-start" style={openingSelectionStyles}>
        <h2>Start Position</h2>
        <ChessBoard
          calcWidth={({ screenWidth, screenHeight }) => {
            return screenHeight / 2.5;
          }}
          position={startPosition.fen}
          id="start-board"
        ></ChessBoard>

        <SearchBar></SearchBar>
      </div>
      <div className="lp-board-end" style={openingSelectionStyles}>
        <h2>End Position</h2>
        <ChessBoard
          calcWidth={({ screenWidth, screenHeight }) => {
            return screenHeight / 2.5;
          }}
          id="end-board"
          position={endPosition.fen}
        ></ChessBoard>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          {" "}
          {getFinalPositions(startPosition)}
        </div>
      </div>
    </div>
  );
};

export default LPlayout;
