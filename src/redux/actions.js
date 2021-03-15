import types from './actionTypes'

const fetchRequest = () => ({
    type: types.FETCH_REQUEST,
})

const fetchSuccess = (news) => ({
    type: types.FETCH_SUCCESS,
    payload: news,
})

const fetchError = (error) => ({
    type: types.FETCH_ERROR,
    payload: error,
})

const loginRequest = () => ({
    type: types.LOGIN_REQUEST,
})

const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data,
})

const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error,
})

const actions = { fetchRequest, fetchSuccess, fetchError, loginRequest, loginSuccess, loginError }

export default actions