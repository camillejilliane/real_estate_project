import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function App(){
  return (
    <div>
      <Topbar />
      <HomePage />
      <Footer />
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);