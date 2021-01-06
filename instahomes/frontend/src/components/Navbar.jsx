import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import logo from '../../static/img/logo.png'


export default function Navbar(){
  return (
    <div>
      <span className="nav">
        <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <div class="container">
            <Link to="/frontend/" className="navbar-brand">
              <img src={logo} class="logo" alt=""></img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav">
                <li
                  /*{% if '/' == request.path %}
                  class="nav-item active mr-3"
                  {% else %}
                  class="nav-item mr-3"
                  {% endif %}*/
                >            
                  <Link className="nav-link" to="/frontend/">Home</Link>
                </li>
                <li
                  /*{% if 'about' in request.path %}
                  class="nav-item active mr-3"
                  {% else %}
                  class="nav-item mr-3"
                  {% endif %}*/
                >
                  <Link className="nav-link" to="/frontend/about">About</Link>
                </li>
                <li
                  /*{% if 'listings' in request.path %}
                  class="nav-item active mr-3"
                  {% else %}
                  class="nav-item mr-3"
                  {% endif %}*/
                >
                  <Link className="nav-link" to="/frontend/listings">Featured Listings</Link>
                </li>
              </ul>

              <ul class="navbar-nav ml-auto">
                {/*{% if user.is_authenticated %}*/}
                  <li
                    /*{% if 'dashboard' in request.path %}
                    class="nav-item active mr-3"
                    {% else %}
                    class="nav-item mr-3"
                    {% endif %}*/
                  >
                    <Link className="nav-link" to="/frontend/dashboard">Welcome {/*{ user.username }*/} (Dashboard)</Link>
                  </li>
                  <li class="nav-item mr-3">
                    <a href="javascript:{document.getElementById('logout').submit()}" class="nav-link">
                      <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                    <form action="{% url 'logout' %}" method="POST" id="logout">
                      {/*{% csrf_token %}*/}
                      <input type="hidden"></input>
                    </form>
                  </li>

                {/*{% else %}*/}
                  <li
                    /*{% if 'register' in request.path %}
                    class="nav-item active mr-3"
                    {% else %}
                    class="nav-item mr-3"
                    {% endif %}*/
                  >
                    <Link className="nav-link" to="/frontend/register">
                    <i class="fas fa-user-plus"></i> Register
                    </Link>
                  </li>
                  <li
                    /*{% if 'login' in request.path %}
                    class="nav-item active mr-3"
                    {% else %}
                    class="nav-item mr-3"
                    {% endif %}*/
                  >
                    <Link className="nav-link" to="/frontend/login">
                      <i class="fas fa-sign-in-alt"></i>Login
                    </Link>
                  </li>
                {/*{% endif %}*/}
              </ul>
            </div>
          </div>
        </nav>
        </Router>
      </span>
    </div>  
    );
  }