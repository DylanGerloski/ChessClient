import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChessBoard from "chessboardjsx";
import SearchBar from "../navigation/SearchBar";
import { getNames } from "../../actions/openings/getNames";
import clearVariations from "../../actions/openings/clearVariations";
import { setStartPosition } from "../../actions/lp_actions/setStartPostion";

const LPlayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNames());
    return dispatch(clearVariations());
  }, []);
  const openingSelectionStyles = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  return (
    <div className="line-practice-container">
      <div className="lp-board-start" style={openingSelectionStyles}>
        <h2>Start Position</h2>
        <ChessBoard
          calcWidth={({ screenWidth, screenHeight }) => {
            return screenHeight / 2.5;
          }}
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
        ></ChessBoard>
      </div>
    </div>
  );
};

export default LPlayout;
