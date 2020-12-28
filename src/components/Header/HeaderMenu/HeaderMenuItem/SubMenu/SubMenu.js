import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';


export default class SubMenu extends Component {
    
    render() {
       console.log(this.props.parentItem);
       return (
            <ul className={this.props.subMenuClass}>{this.props.items.map(item => <SubMenuItem name={item} parent={this.props.parentItem}></SubMenuItem>)}</ul>
        );
    }
}