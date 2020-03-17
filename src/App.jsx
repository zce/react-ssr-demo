import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'

export default () => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </>
  )
}