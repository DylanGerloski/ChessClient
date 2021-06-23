/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  startPosition: {
    name: "",
    eco: "",
    fen: "start",
    an: "",
  },
  endPosition: {
    name: "",
    eco: "",
    fen: "start",
    an: "",
  },
  modes: {
    openingSelection: true,
    practiceStart: false,
    startChosen: false,
    endChosen: false,
  },
};

export default (linePractice = initialState, action) => {
  switch (action.type) {
    case "SET_START_POSITION":
      return { ...linePractice, startPosition: action.payload };
    case "SET_END_POSITION":
      return { ...linePractice, endPosition: action.payload };
    case "START_CHOSEN":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, startChosen: true },
      };
    case "START_RESET":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, startChosen: false },
      };
    case "END_CHOSEN":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, endChosen: true },
      };
    case "END_RESET":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, endChosen: false },
      };
    case "PRACTICE_START":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, practiceStart: true },
      };
    case "PRACTICE_RESET":
      return {
        ...linePractice,
        modes: { ...linePractice.modes, practiceStart: false },
      };
    default:
      return linePractice;
  }
};
