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
<<<<<<< HEAD
export default function HomePage() {
  function renderHomePage() {
    return (
      <p>This is the home page</p>
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/frontend/" render={renderHomePage}>
        </Route>
        <Route path="/frontend/about" component={About} />
      </Switch>
    </Router>
  );
=======
export default function HomePage(){
    function renderHomePage(){
      return(
        <div>
        This is the home page
        </div>
      );
    }
    return (
        <Router>
          <Switch>
            <Route path="/frontend/about" component={About} />
            <Route exact path="/frontend/" render={renderHomePage} />
          </Switch>
        </Router>
      );
>>>>>>> ac4f2124173baf43302bff29c44c3ef3e2c7ab73
}
