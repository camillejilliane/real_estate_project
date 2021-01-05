import React, { Component } from "react";
import { render } from "react-dom";

export default function Topbar(){
  return (
    <div> 
        <span className="top">           
            <section id="top-bar" class="p-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <i class="fas fa-phone"></i> (555)-555-5555
                    </div>
                <div class="col-md-4">
                    <i class="fas fa-envelope-open"></i> jaime.siy@obf.ateneo.edu
                </div>
                <div class="col-md-4">
                    <div class="social text-right">
                    </div>
                </div>
                </div>
            </div>
            </section>
        </span>
    </div>
  );
}