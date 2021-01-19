import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ThemeContextProvider from "./theme-context/ThemeContext";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
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
import Cart from './components/Cart';
import cartReducer from './store/reducers/cartReducer';

const logger = store => next => action => {
  console.log('Action:', action.type);
  
  let result = next(action);
  const numberInOrder = store.getState().addedItems.length;
  const currentItem = store.getState().items.find(item => action.id === item.No);
  
  console.log('Subject:', currentItem.name);
  
  console.log('Items in cart:', numberInOrder);

  return result;
}

const store = createStore(cartReducer, applyMiddleware(logger));

function App() {
  
  return (
    
      <BrowserRouter> 
        <StoreProvider store={store}>
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
              <Route path="/Cart">
                <div className="Content">
                  <Header />
                  <Cart />
                </div>  
              </Route>
              <Redirect from="/Home" to="/" />
            </Switch> 
          </ThemeContextProvider>
        </StoreProvider>  
      </BrowserRouter>
      
  );
}

export default App;
