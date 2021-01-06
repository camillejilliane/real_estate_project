import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App(){
  return (
    <div>      
      <Topbar />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);