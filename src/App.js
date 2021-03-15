import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { NavigationRoute } from './routers/NavigationRoute'
import routes from './routers/route'
import NavigationBar from './components/Navbar'
import Footer from './components/Footer'
import { ErrorPage } from './pages/ErrorPage'

import './App.css'

function App() {
  const router = (
    NavigationRoute.map(({ path, component }, key) => (
      <Route exact path={path} key={key} component={component} />
    ))
  )

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        {router}
        <Route exact path={routes.ERROR} component={ErrorPage} />
        <Redirect from="*" to={routes.ERROR} />
      </Switch>
      <Footer />

    </div>
  )
}

export default App
