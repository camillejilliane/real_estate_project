import React, { Fragment } from 'react';
import { StaticRouter, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

function Navbar({ logout, isAuthenticated }){
  const guestLinks = () =>{
    return(
    <Fragment>
      <li className={window.location.pathname ==='/frontend/register'?'nav-item active mr-3':'nav-item mr-3'}>
        <a class="nav-link" href="/frontend/register">
          <i class="fas fa-user-plus">
            </i> Register
        </a>
      </li>
      <li className={window.location.pathname ==='/frontend/login'?'nav-item active mr-3':'nav-item mr-3'}>
        <a class="nav-link" href="/frontend/login">
          <i class="fas fa-sign-in-alt"></i> Login
        </a>
      </li>
    </Fragment>
    );
  };
  const authLinks = () =>{
    return(
    <Fragment>
      <li className={window.location.pathname ==='/frontend/register'?'nav-item active mr-3':'nav-item mr-3'}>
        <a class="nav-link" href="#!" >
          Welcome to Dashboard
        </a>
      </li>
      <li className={window.location.pathname ==='/frontend/login'?'nav-item active mr-3':'nav-item mr-3'}>
        <a class="nav-link" href="#!" onClick={logoutHandler}>
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </Fragment>
    );
  };
  const logoutHandler = () =>{
    logout();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container">
          <a class="navbar-brand" href="{% url 'index' %}">
            <img src="" class="logo" alt=""/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li
                className={window.location.pathname ==='/frontend/'?'nav-item active mr-3':'nav-item mr-3'}
              >
                <a class="nav-link" href="/frontend/">Home</a>
              </li>
              <li
                className={window.location.pathname ==='/frontend/about'?'nav-item active mr-3':'nav-item mr-3'}
              >
                <a class="nav-link" href="/frontend/about">About</a>
              </li>
              <li
                className={window.location.pathname ==='/frontend/listings'?'nav-item active mr-3':'nav-item mr-3'}
              >
                <a class="nav-link" href="/frontend/listings">Featured Listings</a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              {isAuthenticated?authLinks():guestLinks()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar)