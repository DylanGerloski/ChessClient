import { combineReducers } from "redux";
import openings from "./openings";
import exploreOpenings from "./exploreOpenings";
import theoryPractice from "./theoryPractice";

export default combineReducers({
  openings,
  exploreOpenings,
  theoryPractice,
});
