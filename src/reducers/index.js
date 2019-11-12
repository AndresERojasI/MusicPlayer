import { combineReducers } from "redux";
import genres from "./genre_reducer";
import artists from "./artists_reducer";

export default combineReducers({
  genres,
  artists
});
