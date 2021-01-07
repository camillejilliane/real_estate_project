import React from "react";
import About from "./About";
import Navbar from './Navbar';
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
    return (
      <div>
        This is the home page
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/frontend/about" component={About} />
        <Route path="/frontend/listings" component={Listings} />
        <Route exact path="/frontend/" render={renderHomePage} />
      </Switch>
    </Router>
  );
}
