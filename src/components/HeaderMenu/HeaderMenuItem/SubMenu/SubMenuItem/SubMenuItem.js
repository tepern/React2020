import React, { Component } from 'react';

export default class SubMenuItem extends Component {
    render() {

       return (
            <li class="sub-menu__item">
                <a class="sub-menu__link">{this.props.name}</a>
            </li>
        );
    }
}