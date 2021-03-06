import React from "react";
import About from "./About";
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Listings from "./Listings";
export default function HomePage() {
  function renderHomePage() {

    return (<div>Homepage</div>);
  }
  return (
    
    
      <Router>
        <Switch>
          <Route path="/frontend/about" component={About} />
          <Route path="/frontend/register" component={Register} />
          <Route path="/frontend/login" component={Login} />
          <Route path="/frontend/listings" component={Listings} />
          <Route exact path="/frontend/" render={renderHomePage} />
        </Switch>
      </Router>
  );
}
