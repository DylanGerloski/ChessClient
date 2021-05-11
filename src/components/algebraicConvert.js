const Chess = require("chess.js");

const algebraicConvert = (fenString) => {
  const chess = new Chess();
  const An = [];
  let moveBuffer = "";
  for (let i = 0; i < fenString.length; i++) {
    if (fenString.charAt(i) === " ") {
      const { san } = chess.move(moveBuffer, { sloppy: true });
      // console.log(san);
      An.push(moveBuffer);
      moveBuffer = "";
    } else {
      moveBuffer += fenString.charAt(i);
    }
  }
};

export default algebraicConvert;
