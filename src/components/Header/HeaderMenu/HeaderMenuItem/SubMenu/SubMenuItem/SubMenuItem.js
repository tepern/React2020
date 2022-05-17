import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SubMenuItem extends Component {
    render() {
       
       return (
            <li class="sub-menu__item">
                {
                  this.props.parent === 'Home'?
                  <Link to={`/${this.props.name}`} class="sub-menu__link" onClick={this.props.menuMobile}>
                    {this.props.name}
                  </Link>:
                  <Link to={`/Catalog/${this.props.name}`} onClick={this.props.menuMobile} class="sub-menu__link">
                    {this.props.name}
                  </Link>
                }
            </li>
        );
    }
}