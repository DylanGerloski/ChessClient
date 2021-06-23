import { combineReducers } from "redux";
import openings from "./openings";
import exploreOpenings from "./exploreOpenings";
import linePractice from './linePractice'

export default combineReducers({
  openings,
  exploreOpenings,
  linePractice
});
