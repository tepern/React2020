import React, { Component } from 'react';
import { ThemeContext } from '../../theme-context/ThemeContext';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from '../../store/actions/cartActions';


class Products extends Component {

    constructor(props) {
      super(props);

      this.state = {
          index: 1
      };

      this.sliderItemActive = this.sliderItemActive.bind(this);
    }

    componentDidUpdate() {
       
    }

    sliderItemActive(dataIndex) {
        this.setState((state,props)=>({index: dataIndex}));
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        const products = this.props.items;
        const trans = {
            transform: 'translate3d(' + (this.state.index-1)*(-10) + '%, 0px,0px)'};
        return (
            <ThemeContext.Consumer>{(context) => {
                const theme = !context.lightTheme ? '' : ' lightmode';
                return (
                    <section className={`section`+ theme}>
                        <div class="container">
                            <div class="product-title">Shop Best Sellers</div>
                            <div class="product-slider">
                                <div class="product" id="products" style={ trans }>
                                    {products.map(item => <Product id={item.No} name={item.name} price={item.price} img={item.img}></Product>)}
                                </div>
                                <div className="product-dots" id="pagination">
                                    {products.map(item => <span className={`product-dots__item ${this.state.index === item.No ? ' product-dots__item_active' : ''}`} onClick={() => this.sliderItemActive(item.No)} dataIndex = { item.No }></span>).splice(-products.length,5)}
                                </div> 
                            </div>
                        </div>
                    </section>
                );
            }}</ThemeContext.Consumer>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Products)