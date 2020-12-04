import React, { Component } from 'react';
import HeaderMenuItem from './HeaderMenuItem';

const topMenu1 = [ { title: "Home", items: [ "Home", "Blog", "About Us" ] }, 
{ title: "Catalog", items: [ "Ladies", "Kids'","Luxury", "Sport", "Unisex", "Vintage", "Sale", "Accessories", "Men’s", "Search" ] }, 
{ title: "Collections", items: [ "Ladies", "Kids'","Luxury", "Sport", "Unisex", "Vintage", "Sale", "Accessories", "Men’s", "Search" ] }, 
{ title: "Clearance", items: [] }, { title: "Contact Us", items: [] } ];

const topMenu = [ '1','2','3'];

export default class HeaderMenu extends Component {
    render() {

       return <ul class="sub-menu__item">{topMenu.map(item => <HeaderMenuItem name={item}></HeaderMenuItem>)}</ul>

    } 
}