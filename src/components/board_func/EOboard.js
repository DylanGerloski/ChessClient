import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFen } from "../../actions/eo_actions/setFen";
import ChessBoard from "chessboardjsx";

const EOboard = () => {
  const position = useSelector((reducer) => reducer.exploreOpenings.boardFen);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(setFen("start"));
  }, []);

  return <ChessBoard position={position}></ChessBoard>;
};

export default EOboard;
