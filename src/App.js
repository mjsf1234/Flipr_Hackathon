import React from 'react'
import Homepage from './components/Homepage/Homepage'

import {
  BrowserRouter as Router,
  Routes,
  Route, Switch
} from "react-router-dom";
import RstHomepage from './components/rstHomepage';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>

          
          <Route path="/home">
            <Homepage />
          </Route>

          <Route path="/rstHomepage">
            <RstHomepage/>
          </Route>

        </Switch>
      </Router>
    </div>
  );

}

export default App
