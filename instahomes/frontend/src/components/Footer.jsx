import React, { Component } from "react";
import { render } from "react-dom";

export default function Topbar(){
  return (
    <div>
    <span className="footer">
        <footer id="main-footer" class="py-4 bg-primary text-white text-center">
        Copyright &copy;
        <span class="year"></span> BT Real Estate
        </footer>
    </span>
    </div>  
  );
}