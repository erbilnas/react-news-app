import types from '../actionTypes'

const newsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case types.FETCH_SUCCESS:
            return payload
        default:
            return state
    }
}

export default newsReducer