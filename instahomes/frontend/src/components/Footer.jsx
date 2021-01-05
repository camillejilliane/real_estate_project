import React, { Component } from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

export default function Topbar(){
  return (
    <span className="footer">
        
            <footer id="main-footer" class="py-4 bg-primary text-white text-center">
            Copyright &copy;
            <span class="year"></span> BT Real Estate
            </footer>
    </span>
  );
}