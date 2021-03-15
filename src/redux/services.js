import axios from 'axios'
import actions from './actions'
import firebase from 'firebase'

const NEWS_API_KEY = '3aaa1e89ba28471f8dd450c90188d7f3'

const firebaseConfig = {
    apiKey: "AIzaSyDBLIJ-0KMxwCvHE64uXumYmutOc1C_kjg",
    authDomain: "react-news-app-ba783.firebaseapp.com",
    projectId: "react-news-app-ba783",
    storageBucket: "react-news-app-ba783.appspot.com",
    messagingSenderId: "89221672753",
    appId: "1:89221672753:web:3c0be128f08875623cca10",
    measurementId: "G-LFXR3CY549",
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const fetchNews = () => (dispatch) => {
    const options = {
        method: 'GET',
        url: `http://newsapi.org/v2/top-headlines?country=tr&apiKey=${NEWS_API_KEY}`,
    }

    axios(options)
        .then(({ data: { articles } }) => {
            dispatch(actions.fetchSuccess(articles))
        })
        .catch((error) => {
            dispatch(actions.fetchError(error))
        })
}

const login = (mail, password) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(mail, password)
        .then((userCredential) => {
            dispatch(actions.loginSuccess(userCredential))
        })
        .catch((error) => {
            dispatch(actions.loginError(error))
        })
}

const services = { fetchNews, login }

export default services