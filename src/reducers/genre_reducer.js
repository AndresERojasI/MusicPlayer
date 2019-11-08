import {
    LOAD_GENRES_START,
    LOAD_GENRES_SUCCESS,
    LOAD_GENRES_ERROR
} from '../constants/actions'

const initialState = {
    loading: false,
    genreList: [],
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GENRES_START:
            return {...state, loading: true, error: false}
        case LOAD_GENRES_SUCCESS:
            return {...state, loading: false, error: false, genreList: action.payload}
        case LOAD_GENRES_ERROR:
            return {...state, loading: false, error: true}
        default:
            return state;
    }   
}
