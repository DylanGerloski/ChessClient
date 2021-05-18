import { combineReducers } from "redux";
import openings from "./openings";
import exploreOpenings from "./exploreOpenings";

export default combineReducers({
  openings,
  exploreOpenings,
});
