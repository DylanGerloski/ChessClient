export const setStartPosition = (name, eco, fen, an) => {
  return {
    type: "SET_START_POSITION",
    payload: { name: name, eco: eco, fen: fen, an: an },
  };
};
