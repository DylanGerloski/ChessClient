export const setEndPosition = (name, eco, fen, an) => {
  return {
    type: "SET_END_POSITION",
    payload: { name: name, eco: eco, fen: fen, an: an },
  };
};
