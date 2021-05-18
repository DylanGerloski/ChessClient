export const setStartPosition = (opening) => {
  return { type: "SET_START_POSITION", payload: opening.fen };
};
