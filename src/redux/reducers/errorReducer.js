import types from '../actionTypes'

const errorReducer = (state = null, { type, payload }) => {
    switch (type) {
        case types.FETCH_REQUEST:
        case types.FETCH_SUCCESS:
            return null
        case types.FETCH_ERROR:
            return payload
        case types.LOGIN_ERROR:
            return payload
        default:
            return state
    }
}

export default errorReducer