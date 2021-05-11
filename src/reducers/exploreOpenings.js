const initialState = { openingName: "", boardFen: "start" };

export default (exploreOpenings = initialState, action) => {
  switch (action.type) {
    case "SET_OPENING_NAME":
      return {
        ...exploreOpenings,
        openingName: action.payload,
      };

    case "SET_FEN":
      return {
        ...exploreOpenings,
        boardFen: action.payload,
      };
    default:
      return exploreOpenings;
  }
};
