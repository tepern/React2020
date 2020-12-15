import React, { Component } from 'react';
//import topMenu from '../HeaderMenu';
import SubMenu from './SubMenu';

export default class HeaderMenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {class: "header-menu__link",
           subMenuClass: "sub-menu"};
        this.itemActive = this.itemActive.bind(this);
        this.itemNoActive = this.itemNoActive.bind(this);
    }

    itemActive() {
        if(this.state.class==="header-menu__link"){
            this.setState((state,props)=>({class: state.class + " header-menu__link_active"}));
            this.setState((state,props)=>({subMenuClass: state.subMenuClass + " sub-menu_active"}));
        }            
    }

    itemNoActive() {
        this.setState({class: "header-menu__link"});   
        this.setState({subMenuClass: "sub-menu"});  
    }

    render() {

       return (
            <li class="header-menu__item" onMouseEnter={this.itemActive} onMouseLeave={this.itemNoActive}>
                <a className={this.state.class}>{this.props.name}</a>
                {this.props.items.length>0&&
                    <SubMenu item items={this.props.items} subMenuClass={this.state.subMenuClass} visible={this.state.visible}></SubMenu>
                }
            </li>
        );
    }
}