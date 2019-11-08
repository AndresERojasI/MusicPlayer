import API from '../utils/service'
import {
    LOAD_GENRES_START,
    LOAD_GENRES_SUCCESS,
    LOAD_GENRES_ERROR
} from '../constants/actions'

export const loadGenresStart = () => ({
    type: LOAD_GENRES_START
})

export const loadGenresError = () => ({
    type: LOAD_GENRES_ERROR
})

export const loadGenresSuccess = payload => ({
    type: LOAD_GENRES_SUCCESS,
    payload
})

export const loadGenres = () => {
    return async dispatch => {
        dispatch(loadGenresStart())
        try {
            const genres = await API.getGenres()

            if(genres.error) {
                return dispatch(loadGenresError())
            }

            return dispatch(loadGenresSuccess(genres.data.data))
        } catch (error) {
            return dispatch(loadGenresError())
        }
    }
}
