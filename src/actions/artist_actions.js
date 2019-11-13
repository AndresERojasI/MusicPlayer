import API from "../utils/service";
import {
  LOAD_ARTISTS_START,
  LOAD_ARTISTS_SUCCESS,
  LOAD_ARTISTS_ERROR,
  LOAD_ARTIST_START,
  LOAD_ARTIST_SUCCESS,
  LOAD_ARTIST_ERROR
} from "../constants/actions";

export const loadArtistsStart = () => ({
  type: LOAD_ARTISTS_START
});

export const loadArtistsError = () => ({
  type: LOAD_ARTISTS_ERROR
});

export const loadArtistsSuccess = payload => ({
  type: LOAD_ARTISTS_SUCCESS,
  payload
});

export const loadArtists = () => {
  return async dispatch => {
    dispatch(loadArtistsStart());
    try {
      const artists = await API.getArtists();
      return dispatch(loadArtistsSuccess(artists.data.data));
    } catch (error) {
      return dispatch(loadArtistsError());
    }
  };
};

export const loadArtistStart = () => ({
  type: LOAD_ARTIST_START
});

export const loadArtistError = () => ({
  type: LOAD_ARTIST_ERROR
});

export const loadArtistSuccess = payload => ({
  type: LOAD_ARTIST_SUCCESS,
  payload
});

export const findArtist = id => {
  return async dispatch => {
    dispatch(loadArtistStart());
    try {
      const artist = await API.getArtistById(id);

      return dispatch(loadArtistSuccess(artist.data.data));
    } catch (error) {
      return dispatch(loadArtistError());
    }
  };
};
