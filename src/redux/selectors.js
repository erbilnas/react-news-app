const getNews = (state) => state.news
const getLoader = (state) => state.loader
const getError = (state) => state.error
const getAuth = (state) => state.session.isAuthenticated
const getUser = (state) => state.session.user

const selectors = { getNews, getLoader, getError, getAuth, getUser }

export default selectors
