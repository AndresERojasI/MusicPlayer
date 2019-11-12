import {
  LOAD_ARTISTS_START,
  LOAD_ARTISTS_SUCCESS,
  LOAD_ARTISTS_ERROR
} from "../constants/actions";

const initialState = {
  loading: false,
  artistsList: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTISTS_START:
      return { ...state, loading: true, error: false };
    case LOAD_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        artistsList: action.payload
      };
    case LOAD_ARTISTS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
