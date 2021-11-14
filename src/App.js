import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route, Switch
} from "react-router-dom";
import SignUpRest from './components/Sign Up/SignUpRest';
import SignUpUser from './components/Sign Up/SignUpUser';



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

          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

// RestuarantsDB --> name, password, items: [item:price], location_name, location_coord