import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
// import Pagination from "./Pagination";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../hocs/Layout';
export default function App(){
  return (
    <Provider store={store}>
      <Layout>
      <HomePage />
      <Footer />
      </Layout>
    </Provider>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);