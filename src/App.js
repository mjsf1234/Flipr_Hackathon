import React from 'react'
import Homepage from './components/Homepage/Homepage'

import {
  BrowserRouter as Router,
  Routes,
  Route, Switch
} from "react-router-dom";
import RstHomepage from './components/rstHomepage';
import Nav from './components/Nav/nav';
import Login from './components/Login/Login';
import Cart from './components/Cart/cart';
import { Provider} from 'react-redux';
const App = () => {
  return (
    <div className="app">
      <Router> 
        
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/rstHomepage:rstName">
            <RstHomepage/>
          </Route>
          
      </Router>
    </div>
  );

}

export default App
