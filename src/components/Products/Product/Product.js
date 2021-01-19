import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions';


class Product extends Component {
    
    handleClick = (id) => {
        this.props.addToCart(id);
    } 

    render() {

       return (
            <div class="product__item">
                <div class="product__img">
                    <img src={this.props.img} alt="" />
                </div>
                <div class="product__title">{this.props.name}</div>
                <p class="product__price">${this.props.price}</p>
                <div class="product-button">
                    <button class="product__btn btn" onClick={()=>{this.handleClick(this.props.id)}}>Add to cart</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
} 


export default connect(null,mapDispatchToProps)(Product)