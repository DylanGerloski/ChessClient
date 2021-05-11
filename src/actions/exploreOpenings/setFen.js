export const setFen = (fenString) => {
  return {
    type: "SET_FEN",
    payload: fenString,
  };
};
