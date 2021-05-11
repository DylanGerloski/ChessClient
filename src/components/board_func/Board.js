import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChessBoard from "chessboardjsx";

const Board = (props) => {
  const position = useSelector((reducer) => reducer.exploreOpenings.boardFen);
  console.log(position);
  return (
    <div className="board-container">
      <ChessBoard
        position={position}
        calcWidth={(cords) => {
          console.log(cords);
          return cords.screenHeight * 0.6;
        }}
      ></ChessBoard>
    </div>
  );
};

export default Board;
