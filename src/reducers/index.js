import { combineReducers } from 'redux'
import GenreReducers from './genre_reducer'

export default combineReducers({
    genre: GenreReducers
})
