import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';


export default class SubMenu extends Component {
    
  render() {
     
    return (
      <ul className={this.props.subMenuClass}>
        {this.props.items.map(item => 
          <SubMenuItem menuMobile={this.props.menuMobile} key={item} name={item} parent={this.props.parentItem}></SubMenuItem>)}
      </ul>
    );
  }
}