import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SubMenu from './SubMenu';

export default class HeaderMenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {class: "header-menu__link",
           subMenuClass: "sub-menu"};
        this.itemActive = this.itemActive.bind(this);
        this.itemNoActive = this.itemNoActive.bind(this);
        this.itemToggle = this.itemToggle.bind(this);
    }

    itemActive() {
        if(this.state.class==="header-menu__link") {
            this.setState((state,props)=>({class: state.class + " header-menu__link_active"}));
            this.setState((state,props)=>({subMenuClass: state.subMenuClass + " sub-menu_active"}));
        }            
    }

    itemNoActive() {
        this.setState({class: "header-menu__link"});   
        this.setState({subMenuClass: "sub-menu"});  
    }

    itemToggle() {
        if(this.state.class==="header-menu__link") {
            this.setState((state,props)=>({class: state.class + " header-menu__link_active"}));
            this.setState((state,props)=>({subMenuClass: state.subMenuClass + " sub-menu_active"}));
        } else {
            this.setState({class: "header-menu__link"});   
            this.setState({subMenuClass: "sub-menu"});
        }
    }

    render() {

        if(this.props.mobile) {
            return (
                <li class="header-menu__item">
                    {this.props.items.length===0?
                        <a href={`/${this.props.name}`} className={this.state.class}>{this.props.name}
                        </a>:
                        <a className={this.state.class}>{this.props.name}
                            <span onClick={this.itemToggle}></span>
                        </a>
                    }
                    {this.props.items.length>0&&
                        <SubMenu item parentItem={this.props.name} items={this.props.items} subMenuClass={this.state.subMenuClass} visible={this.state.visible}></SubMenu>
                    }
                </li>
            );
        } else {  
            return (
                <li class="header-menu__item" onMouseEnter={this.itemActive} onMouseLeave={this.itemNoActive}>
                    {this.props.items.length===0?
                        <Link to={`/${this.props.name}`} className={this.state.class}>{this.props.name}</Link>:
                        <a className={this.state.class}>{this.props.name}
                            <span></span>
                        </a>
                    }
                    {this.props.items.length>0&&
                        <SubMenu item parentItem={this.props.name} items={this.props.items} subMenuClass={this.state.subMenuClass} visible={this.state.visible}></SubMenu>
                    }
                </li>
            );    
        }    
    }
}