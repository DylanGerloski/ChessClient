import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChessBoard from "chessboardjsx";
import SearchBar from "../navigation/SearchBar";
import { getNames } from "../../actions/openings/getNames";
import clearVariations from "../../actions/openings/clearVariations";
import setDisplay from "../../actions/openings/setDsiplay";
import { setEndPosition } from "../../actions/lp_actions/setEndPosition";
import { endChosen } from "../../actions/lp_actions/endChosen";
import {
  practiceStart,
  practiceReSet,
} from "../../actions/lp_actions/practiceStart";
const LPlayout = () => {
  const dispatch = useDispatch();

  const startPosition = useSelector(
    (reducer) => reducer.linePractice.startPosition
  );

  const endPosition = useSelector(
    (reducer) => reducer.linePractice.endPosition
  );

  const modes = useSelector((reducer) => reducer.linePractice.modes);

  const variations = useSelector((reducer) => reducer.openings.variations);

  useEffect(() => {
    dispatch(getNames());
    dispatch(setDisplay("LP"));
    return dispatch(clearVariations());
  }, [dispatch]);

  const getFinalPositions = (sP) => {
    if (!modes.startChosen) {
      return <h2>Continuations</h2>;
    }
    const finalPos = variations.filter((opening) => opening.an.includes(sP.an));
    let key = 0;

    return finalPos.map((position) => {
      return (
        <button
          key={key++}
          onClick={() => {
            dispatch(endChosen());
            dispatch(
              setEndPosition(
                position.name,
                position.fen,
                position.fen,
                position.an
              )
            );
          }}
          className="variation-button"
        >
          <h3>{position.name}</h3>
          <h4>{position.an}</h4>
        </button>
      );
    });
  };

  return (
    <div>
      {modes.practiceStart ? (
        <div className="lp-start-container">
          <div className="lp-left-side">
            {" "}
            <ChessBoard
              calcWidth={({ screenWidth, screenHeight }) => {
                return screenHeight / 1.5;
              }}
              position={startPosition.fen}
              id="start-practice-board"
            >
              {" "}
            </ChessBoard>
          </div>
          <div className="lp-right-side">
            <div className="move-box">
              <h4>
                {startPosition.name} to {endPosition.name}
              </h4>
            </div>
            <div className="final-position-container">
              <ChessBoard
                calcWidth={({ screenWidth, screenHeight }) => {
                  return screenHeight / 4;
                }}
                position={endPosition.fen}
                id="end-practice-board"
              >
                {" "}
              </ChessBoard>
            </div>
          </div>
        </div>
      ) : (
        <div className="lp-search-container">
          <div className="lp-header"> This is where the direction will go</div>
          <div className="lp-middle-section">
            <h2 className="start-heading">Start Position</h2>
            <ChessBoard
              calcWidth={({ screenWidth, screenHeight }) => {
                return screenHeight / 2.5;
              }}
              position={startPosition.fen}
              id="start-board"
            >
              {" "}
            </ChessBoard>
            <div className="start-search-container">
              <SearchBar></SearchBar>
            </div>
          </div>
          <div className="lp-bottom-section">
            <h2 className="end-heading">End Position</h2>
            <ChessBoard
              calcWidth={({ screenWidth, screenHeight }) => {
                return screenHeight / 2.5;
              }}
              position={endPosition.fen}
              id="end-board"
            >
              {" "}
            </ChessBoard>
            <div className="end-search-container">
              {getFinalPositions(startPosition)}
            </div>
            {modes.endChosen ? (
              <button onClick={() => dispatch(practiceStart())}> start</button>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LPlayout;
