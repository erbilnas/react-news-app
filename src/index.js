import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import App from './App'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)