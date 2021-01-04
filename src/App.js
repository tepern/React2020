import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ThemeContextProvider from "./theme-context/ThemeContext";
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

  /*const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };*/

  
  return (
    
      <BrowserRouter> 
        <ThemeContextProvider>
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
              <div className="Content">
                <Header />
                <Catalog />
              </div>  
            </Route>
            <Route path="/About Us">
              <div className="Content">
                <Header />
                <About />
              </div>  
            </Route>
            <Route path="/Blog">
              <div className="Content">
                <Header />
                <Blog />
              </div>  
            </Route>
            <Route path="/Clearance">
              <div className="Content">
                <Header />
                <Clearance />
              </div>  
            </Route>
            <Route path="/Contact Us">
              <div className="Content">
                <Header />
                <Contacts />
              </div>  
            </Route>
            <Redirect from="/Home" to="/" />
          </Switch> 
        </ThemeContextProvider>
      </BrowserRouter>
      
  );
}

export default App;
