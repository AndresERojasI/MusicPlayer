import API from '../utils/service'
import {
    LOAD_ALBUMS_START,
    LOAD_ALBUMS_SUCCESS,
    LOAD_ALBUMS_ERROR
} from '../constants/actions'

export const loadAlbumsStart = () => ({
    type: LOAD_ALBUMS_START
})

export const loadAlbumsError = () => ({
    type: LOAD_ALBUMS_ERROR
})

export const loadAlbumsSuccess = payload => ({
    type: LOAD_ALBUMS_SUCCESS,
    payload
})

export const loadAlbums = () => {
    return async dispatch => {
        dispatch(loadAlbumsStart())
        try {
            const albums = await API.getAlbums()
            if(albums.error) {
                return dispatch(loadAlbumsError())
            }

            return dispatch(loadAlbumsSuccess(albums.data.data))
        } catch (error) {
            return dispatch(loadAlbumsError())
        }
    }
}
