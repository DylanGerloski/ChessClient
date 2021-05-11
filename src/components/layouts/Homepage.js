import React from "react";
import ChessBoard from "chessboardjsx";
import HomePageNav from "../navigation/HomePageNav";
const HomePage = () => {
  return (
    <div className='home-page-container'>
      <ChessBoard position='start'></ChessBoard>
      <HomePageNav></HomePageNav>
    </div>
  );
};

export default HomePage;
