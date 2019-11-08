import {TEST_ACTION} from '../constants/actions'

const initialState = {
    testState: []
}

export default (state = initialState, action) => {
    if (action.type === TEST_ACTION) {
        return {...state, articles: state.articles.push(action.payload)}
    }

    return state;
}
