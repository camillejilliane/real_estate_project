import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
export default function About(){
    const [realtor, setRealtor] = useState([]);
    
    return(
        <div>
            <section id="showcase-inner" class="py-5 text-white">
                <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                    <h1 className="display-4">About BT Real Estate</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                    </div>
                </div>
                </div>
            </section>
            
            <section id="bc" class="mt-3">
                <div className="container">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link to="/frontend/">
                            <i className="fas fa-home"></i> Home
                        </Link>
                        </li>
                        <li className="breadcrumb-item active"> About</li>
                    </ol>
                    </nav>
                </div>
            </section>

            <section id="about" className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <h2>We Search For The Perfect Home</h2>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        <img src={"../static/img/about.jpg"} alt=""/>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet
                            neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat
                            commodi id libero eveniet harum perferendis laborum molestias quia.
                        </p>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={"../static/img/tommy.jpg"} alt="Seller of the month"/>
                                <div className="card-body">
                                <h5 className="card-title">Seller Of The Month</h5>
                                <h6 className="text-secondary">Tommy</h6>
                                <p className="card-text">Best Realtor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" class="bg-dark text-white text-center">
                <h2 class="display-4">We Work For You</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
                <hr/>
                <Link to="/frontend/about" class="btn btn-secondary text-white btn-lg">View Our Featured Listings</Link>
            </section>
            <section id="team" class="py-5">
            <div class="container">
            <h2 class="text-center">Our Team</h2>
            <div class="row text-center">
                
                <div class="col-md-4">
                    <img src={"../static/img/tommy.jpg"} alt="" class="rounded-circle mb-3"/>
                    <h4>Tommy</h4>
                    <p class="text-success">
                        <i class="fas fa-award text-success mb-3"></i> Realtor</p>
                    <hr/>
                    <p>
                        <i class="fas fa-phone"></i>555-555-555</p>
                    <p>
                        <i class="fas fa-envelope-open"></i>alswang18@gmail.com</p>
                    </div>
                
                <div class="col-md-12">
                    <p>No Realtors Available</p>
                </div>
      
            </div>
            </div>
        </section>
        </div>
        
        );
}