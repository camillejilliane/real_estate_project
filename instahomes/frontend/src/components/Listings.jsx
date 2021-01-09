import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";

export default function Listings() {

  const [listings, setListings] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(10);


  // Get current listings
  const indexOfLastListings = currentPage * listingsPerPage;
  const indexOfFirstListings = indexOfLastListings - listingsPerPage;
  const currentListings = listings.slice(indexOfFirstListings, indexOfLastListings);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  useEffect(() => {
    fetch("/api/listing").then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        setListings(res.data)
      }));
  }, []);

  function renderListings(listing) {
    return (
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card listing-preview">
          <img class="card-img-top" src={listing.photo_main} alt="" />
          <div class="card-img-overlay">
            <h2>
              <span class="badge badge-secondary text-white">${parseInt(listing.price).toLocaleString()}</span>
            </h2>
          </div>
          <div class="card-body">
            <div class="listing-heading text-center">
              <h4 class="text-primary">{listing.title}</h4>
              <p>
                <i class="fas fa-map-marker text-secondary"></i> {listing.city} {listing.state}, {listing.zipcode}</p>
            </div>
            <hr />
            <div class="row py-2 text-secondary">
              <div class="col-6">
                <i class="fas fa-th-large"></i> Sqft: {listing.sqft}</div>
              <div class="col-6">
                <i class="fas fa-car"></i> Garage: {listing.garage}</div>
            </div>
            <div class="row py-2 text-secondary">
              <div class="col-6">
                <i class="fas fa-bed"></i> Bedrooms: {listing.bedrooms}</div>
              <div class="col-6">
                <i class="fas fa-bath"></i> Bathrooms: {listing.bathrooms}</div>
            </div>
            <hr />
            <div class="row py-2 text-secondary">
              <div class="col-6">
                <i class="fas fa-user"></i> {listing.realtor}</div>
            </div>
            <div class="row text-secondary pb-2">
              <div class="col-6">
                <i class="fas fa-clock"></i> {timeSince(Date.parse(listing.list_date))}</div>
            </div>
            <hr />
            <a href="{% url 'listing' listing.id %}" class="btn btn-primary btn-block">More Info</a>
          </div>
        </div>
      </div>
    )
  }

  function renderListingsList() {
    return (
      currentListings.map(l => (
        <div key={l.id}>{renderListings(l)}</div>)
      ));
  }

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return (
    <div>
      <section id="showcase-inner" class="py-5 text-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h1 class="display-4">Browse Our Properties</h1>
              <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
            </div>
          </div>
        </div>
      </section>

      {/* (Breadcrumb) */}
      <section id="bc" class="mt-3">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="{% url 'index' %}">
                  <i class="fas fa-home"></i> Home</a>
              </li>
              <li class="breadcrumb-item active"> Browse Listings</li>
            </ol>
          </nav>
        </div>
      </section>

      <section id="listings" class="py-5">
        <div class="container">
          <div class="row">
            {listings.length > 0 ? renderListingsList() :
              <div class="col-md-12">
                <p>No Listings Available</p>
              </div>
            }
          </div>
          <div>
            {listings.length > listingsPerPage ? <Pagination postsPerPage={listingsPerPage} totalPosts={listings.length} paginate={paginate} /> : ''}
          </div>
        </div>
      </section>
    </div>
  );
}
