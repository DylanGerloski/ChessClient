/* eslint-disable import/no-anonymous-default-export */

export default (openings = initialState, action) => {
  switch (action.type) {
    case "FETCH_NAMES_SUCCESS":
      return {
        ...openings,
        mainOpenings: action.payload,
      };

    case "FETCH_OPENING_INFO_SUCCESS":
      return {
        ...openings,
        variations: action.payload,
      };

    case "CLEAR_VARIATIONS":
      return {
        ...openings,
        variations: [{ name: "", eco: "", fen: "", moves: "", an: "" }],
      };
    case "SET_DISPLAY":
      return {
        ...openings,
        display: action.payload,
      };

    default:
      return openings;
  }
};

const initialState = {
  mainOpenings: [{ firstName: "", eco: "" }],
  variations: [
    { name: "", eco: "", fen: "", moves: "", an: "", hasCont: false },
  ],
  display: "",
};
