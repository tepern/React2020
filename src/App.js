import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.scss';
import Banner from './components/Banner';
import Banners from './components/Banners';
import BannerMiddle from './components/BannerMiddle';
import Products from './components/Products';
import Header from './components/Header';
import BannerBottom from './components/BannerBottom';
import Catalog from './components/Catalog';
import About from './components/About';
import Blog from './components/Blog';
import Clearance from './components/Clearance';
import Contacts from './components/Contacts';


function App() {

  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <Banner />
            <Banners />
            <BannerMiddle />
            <Products />
            <BannerBottom />
          </div>
        </Route> 
        <Route path="/Catalog/:collection?">
          <Header />
          <Catalog />
        </Route>
        <Route path="/About Us">
          <Header />
          <About />
        </Route>
        <Route path="/Blog">
          <Header />
          <Blog />
        </Route>
        <Route path="/Clearance">
          <Header />
          <Clearance />
        </Route>
        <Route path="/Contact Us">
          <Header />
          <Contacts />
        </Route>
        <Redirect from="/Home" to="/" />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
