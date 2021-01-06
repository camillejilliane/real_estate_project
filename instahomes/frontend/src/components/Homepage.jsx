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
            <Route exact path="/frontend/" render={renderHomePage}>
            </Route>
            <Route path="/frontend/about" component={About} />
          </Switch>
        </Router>
      );
}
