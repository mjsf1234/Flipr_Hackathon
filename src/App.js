<<<<<<< HEAD
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
          
=======
import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import SignUpRest from './components/Sign Up/SignUpRest';
import SignUpUser from './components/Sign Up/SignUpUser';
import Homepage from './components/Homepage/Homepage';



// Login or Sign Up and then Store info in React Reux Store
// Get to the Homepage if we got user from the DB and isSignIn === true 
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

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
>>>>>>> 87b81a4b06e2bf1ddab1483a145a97c921b14b66
      </Router>
    </div>
  );

}

<<<<<<< HEAD
export default App
=======
export default App;

// RestuarantsDB --> name, password, items: [item:price], location_name, location_coord
>>>>>>> 87b81a4b06e2bf1ddab1483a145a97c921b14b66
