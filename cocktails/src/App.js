import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <h2>app component</h2>
    </div>
  );
}

export default App;
