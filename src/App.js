import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import Banners from './components/Banners';
import BannerMiddle from './components/BannerMiddle';
import HeaderMenu from './components/HeaderMenu';
import Products from './components/Products';
import logo from './assets/images/logo.png';


function App() {
  React.useEffect(() =>{
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
      console.log(header);
        if(window.pageYOffset >= 10 && !document.querySelector(".header_fixed")) {
           header.className += " header_fixed";
        }

       if(window.pageYOffset < 10) {
           header.className = header.className.replace(" header_fixed","");
       }
    });
  }, []);

  return (
    <div className="App">
      <header class="header">
        <div class="header-top">
          <div class="header-logo">
            <img class="header__logo" src={ logo }></img>
          </div>
        </div>
        <HeaderMenu/>
      </header>
      <Banner />
      <Banners />
      <BannerMiddle />
      <Products />
    </div>
  );
}

export default App;
