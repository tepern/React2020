import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import logo from '../../assets/images/logo.png';


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
            <header className={this.state.class}>
                <div class="header-top">
                  <div class="header-logo">
                    <img class="header__logo" src={ logo }></img>
                  </div>
                </div>
                <HeaderMenu/>
            </header>
        );

       
    } 
}