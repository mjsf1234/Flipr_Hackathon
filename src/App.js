import React from 'react'
import Homepage from './components/Homepage/Homepage'

import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import RstHomepage from './components/rstHomepage';
import Login from './components/Login/Login';
import Cart from './components/Cart/cart';

import './App.css';
import SignUpRest from './components/Sign Up/SignUpRest';
import SignUpUser from './components/Sign Up/SignUpUser';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/rstHomepage:rstName">
            <RstHomepage />
          </Route>

          <Route path="/restSignUp">
            <SignUpRest />
          </Route>

          <Route path="/userSignUp">
            <SignUpUser />
          </Route>

          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div >
  );

}

export default App;
