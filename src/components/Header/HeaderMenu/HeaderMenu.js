import React, { Component } from 'react';
import HeaderMenuItem from './HeaderMenuItem';
import topMenu from './topMenuItems';


export default class HeaderMenu extends Component {

  render() {

    const menuClass = !this.props.menuOpen ? "header-menu" : "header-menu open";

    return (
      
      <ul className={menuClass}>
        {topMenu.map(
          item => <HeaderMenuItem key={item.title} mobile={this.props.menuOpen} name={item.title} items={item.items}></HeaderMenuItem>
        )}
      </ul>
    );
  } 
}