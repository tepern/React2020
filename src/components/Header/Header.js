import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import { Link } from "react-router-dom";
import ToggleTheme from './ToggleTheme';
import logo from '../../assets/images/logo.png';
import { ThemeContext } from '../../theme-context/ThemeContext';

export default class Header extends Component {
    
  constructor(props) {
      super(props);

      this.state = {
          class: "header",
      };
  }
   
  componentDidMount() { 
    const node = this;
    window.addEventListener('scroll', this.handlerScroll = 
      function() {
          if((window.pageYOffset >= 10) && (node.state.class === "header"))  {
           node.setState((state,props) => ({class: "header header_fixed"}));
          }

         if(window.pageYOffset < 10) {
             node.setState({class: "header"});
         }
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScroll);
}

render() {
  return (
    <ThemeContext.Consumer>{(context) => {
      const theme = !context.lightTheme ? '' : ' lightmode';
      console.log(theme);
        return (
            <header className={this.state.class + theme}>
                <div class="header-top">
                  <div class="header-logo">
                    <img class="header__logo" src={ logo } alt=""></img>
                  </div>
                  <ToggleTheme />
                  <Link to="/Cart" class="header__cart"><span>Cart</span></Link>
                </div>
                <HeaderMenu/>
            </header>
        );
    }}</ThemeContext.Consumer>    
  )
       
    } 
}