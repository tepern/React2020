import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';

export default class Banner extends Component {
    render() {
      return (
          <ThemeContext.Consumer>{(context) => {
            const theme = !context.lightTheme ? '' : ' lightmode';
            return (
                <section className={`section section_banner`+ theme}>
                    <div class="container">
                        <div class="banner">
                            <h3 class="h3">Creating a feature classic</h3>
                            <h1 clas="h1">Everything that’s new and now</h1>
                            <p class="text banner__text">Our extensive collection of men’s and women’s watches covers every style and taste, from cutting-edge modern designs to ageless classics.</p>
                            <a class="btn banner__btn">
                                <span>Shop Now</span>
                            </a>
                        </div>
                    </div>
                </section>
            );
          }}</ThemeContext.Consumer>  
        );   
    }
}
