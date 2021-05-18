const initialState = { startPosition: "start", endPostion: "start" };

export default (linePractice = initialState, action) => {
  switch (action.type) {
    case "SET_START_POSITION":
      return { ...linePractice, startPosition: action.payload };
    default:
      return linePractice;
  }
};
