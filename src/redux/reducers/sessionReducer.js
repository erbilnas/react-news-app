import { combineReducers } from 'redux'
import types from '../actionTypes'

const user = (state = null, { type, payload }) => {
    switch (type) {
        case types.LOGIN_SUCCESS:
            return payload.email
        case types.LOGIN_ERROR:
            return null
        default:
            return state
    }
};

const isAuthenticated = (state = false, { type }) => {
    switch (type) {
        case types.LOGIN_SUCCESS:
            return true
        case types.LOGIN_ERROR:
            return false
        default:
            return state
    }
};

const token = (state = null, { type, payload }) => {
    switch (type) {
        case types.LOGIN_SUCCESS:
            return payload.idToken

        case types.LOGIN_ERROR:
            return null

        default:
            return state
    }
};

export default combineReducers({
    user,
    isAuthenticated,
    token,
})
