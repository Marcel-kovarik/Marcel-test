import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { HelmetTags } from './components/HelmetTags'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Event } from './pages/Event'

export const App = () => {

  return (
    <>
      <HelmetTags />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create'><Create /></Route>
        <Route path='/event'><Event /></Route>
      </Switch>
    </>
  )
}