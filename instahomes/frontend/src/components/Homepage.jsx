import React from "react";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
}
