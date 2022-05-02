import React, { Component } from 'react';

export default class HeaderBurger extends Component {

  render() {

    return (
      <div class="header-burger">
        <button class="header__btn" onClick={() => this.props.menuOpen()}></button>
      </div>
    );  
  } 
}