import API from '../utils/service'
import {
    LOAD_ARTISTS_START,
    LOAD_ARTISTS_SUCCESS,
    LOAD_ARTISTS_ERROR
} from '../constants/actions'

export const loadArtistsStart = () => ({
    type: LOAD_ARTISTS_START
})

export const loadArtistsError = () => ({
    type: LOAD_ARTISTS_ERROR
})

export const loadArtistsSuccess = payload => ({
    type: LOAD_ARTISTS_SUCCESS,
    payload
})

export const loadArtists = () => {
    return async dispatch => {
        dispatch(loadArtistsStart())
        try {
            const artists = await API.getArtists()
            if(artists.error) {
                return dispatch(loadArtistsError())
            }

            return dispatch(loadArtistsSuccess(artists.data.data))
        } catch (error) {
            return dispatch(loadArtistsError())
        }
    }
}
