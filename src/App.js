import React, { useState } from 'react'
import data from './data'
import Main from './Main'
import Navbar from './Navbar'
import About from './About'
import { BrowserRouter, Route, Switch, useParams, useHistory } from "react-router-dom";
import Sample from './Sample';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/main" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/about/:item" component={Sample}/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
