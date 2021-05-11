import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExploreOpeningNav from "../navigation/ExploreOpeningNav";
import ChessBoard from "chessboardjsx";
import Board from "../board_func/Board";
import { getNames } from "../../actions/openings/getNames";

const ExploreOpenings = (props) => {
  const dispatch1 = useDispatch();

  useEffect(() => {
    dispatch1(getNames());
    console.log("dispatched");
  }, []);

  return (
    <div className="explore-openings-container">
      <div>
        {" "}
        <Board></Board>
      </div>

      <ExploreOpeningNav></ExploreOpeningNav>
    </div>
  );
};

export default ExploreOpenings;
