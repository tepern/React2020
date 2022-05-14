import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderBurger from './HeaderBurger';
import { Link } from "react-router-dom";
import ToggleTheme from './ToggleTheme';
import logo from '../../assets/images/logo.png';
import { ThemeContext } from '../../theme-context/ThemeContext';
import { connect } from 'react-redux';

class Header extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      class: "header",
      menuOpen: false,
    };

    this.menuOpen = this.menuOpen.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }
   
  componentDidMount() { 
    const node = this;
    window.addEventListener('scroll', this.handlerScroll = 
      function() {
        if((window.pageYOffset >= 10) && (node.state.class === "header"))  {
          node.setState((state,props) => ({class: "header header_fixed"}));
        }

        if(window.pageYOffset < 10) {
          node.setState({class: "header"});
        }
      }
    );
    window.addEventListener('resize', this.handlerResize = 
      function() {
        node.setState({menuOpen: false});
    });
  }

  /*componentDidUpdate() { 
    const node = this;
    window.addEventListener('resize', this.handlerResize = 
      function() {
        node.setState({menuOpen: false});
      });
  }*/

  /*componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScroll);
  }*/

  menuOpen() {
    this.setState({ menuOpen: true});
  }

  menuClose() {
    this.setState({ menuOpen: false});
  }

  render() {
    const inCart = this.props.items.length;
    
    return (
      <ThemeContext.Consumer>{(context) => {
        const theme = !context.lightTheme ? '' : ' lightmode';
        
          return (
            <header className={this.state.class + theme}>
              <div class="header-top">
                <HeaderBurger menuOpen={this.menuOpen}/>
                <div class="header-logo">
                  <Link to="/">
                    <img class="header__logo" src={ logo } alt="" />
                  </Link>
                </div>
                <ToggleTheme />
                <Link to="/Cart" class="header__cart">
                  <span class="shopping-cart">
                    <span>Cart</span>
                  </span>
                  <span class="products-in-cart">{inCart}</span></Link>
              </div>
              <HeaderMenu menuOpen={this.state.menuOpen}/>
              <div className={this.state.menuOpen ? "mobile-menu-close open" : "mobile-menu-close"}>
                <button className="mobile-menu-close__btn" onClick={this.menuClose}></button>
              </div>
          </header>
          );
        }}
      </ThemeContext.Consumer>    
    )      
  } 
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems
  }
}

export default connect(mapStateToProps)(Header)