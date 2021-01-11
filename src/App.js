import React from 'react'
// ! React router is a set of React elements
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

// My components
import Home from './components/Home'

import 'bulma'
import './styles/style.scss'


const App = () => {

  return <>
  <Home />
  </>
}

export default App