import React from 'react'
// ! React router is a set of React elements
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

// My components
import Home from './components/Home'

import 'bulma'
import './styles/style.scss'


const App = () => {
  // ! Always start with the router at the top.
  // ! Always use switch, for it to behave as you expect
  // * SWITCH: Match the FIRST route inside the Switch.
  // ? You'll give ROUTE 2 props
  // ! 1) path (which is the path to render that route)
  // ! 2) the actual component to show
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
}

export default App