import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';

export default class Blog extends Component {

  render() {
    return (
        <ThemeContext.Consumer>{(context) => {
            const theme = !context.lightTheme ? '' : ' lightmode';  
            return (
              <section className={`section section_padding_top section_padding_bottom`+ theme}>
                  <div class="container">
                      <h1 class="h1">Blog</h1>
                  </div>
              </section>
            );
        }}</ThemeContext.Consumer>
    )
  } 
}