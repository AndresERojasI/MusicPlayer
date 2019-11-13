import {
  LOAD_ARTISTS_START,
  LOAD_ARTISTS_SUCCESS,
  LOAD_ARTISTS_ERROR,
  LOAD_ARTIST_START,
  LOAD_ARTIST_SUCCESS,
  LOAD_ARTIST_ERROR
} from "../constants/actions";

const initialState = {
  loading: true,
  artistsList: [],
  error: false,
  artist: {}
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
    case LOAD_ARTIST_START:
      return {...state, loading: true, error: false, artist: {}}
    case LOAD_ARTIST_ERROR:
      return {...state, loading: true, error: true, artist: {}}
    case LOAD_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        artist: action.payload
      };
    default:
      return state;
  }
};
