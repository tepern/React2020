import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';
import { connect } from 'react-redux';

import Product from '../Products/Product';


class Catalog extends Component {

    render() {
      const products = this.props.items;
      const collection = this.props.match.params.collection;
        return ( 
          <ThemeContext.Consumer>{(context) => {
            const theme = !context.lightTheme ? '' : ' lightmode'; 
            return (
              
              <section className={`section section_padding_top section_padding_bottom`+ theme}>
                  <div class="catalog-container">
                      <div class="product-title product-title_catalog">Products</div>
                      <div class="product-slider">
                          <div class="product-list" id="products">
                              {products.map(function(item) { 
                                if(collection){
                                  if(item.Collections.includes(collection)) {
                                    return <Product id={item.No} name={item.name} price={item.price} img={item.img}>
                                    </Product>
                                  }
                                } else {
                                  return <Product id={item.No} name={item.name} price={item.price} img={item.img}>
                                  </Product>
                                }
                               } 
                              )}
                          </div>
                      </div>
                  </div>
              </section>
              );
            }}
          </ThemeContext.Consumer>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Catalog)