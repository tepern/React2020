import React, { Component } from 'react';
//import topMenu from '../HeaderMenu';

export default class HeaderMenuItem extends Component {
    render() {

       return (
            <li class="header-menu__item">
                <a class="header-menu__link">{this.props.name}</a>
            </li>
        );
    }
}