import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EOnav from "../navigation/EOnav";
import clearVariations from "../../actions/openings/clearVariations";

import ChessBoard from "chessboardjsx";
import EOboard from "../board_func/EOboard";
import { getNames } from "../../actions/openings/getNames";

const EOlayout = (props) => {
  const dispatch1 = useDispatch();

  useEffect(() => {
    dispatch1(getNames());
    return dispatch1(clearVariations());
  }, []);

  return (
    <div className="eo-container">
      <EOboard></EOboard>
      <EOnav></EOnav>
    </div>
  );
};

export default EOlayout;
